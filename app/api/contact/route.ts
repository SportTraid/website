import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, organization } = body

    // Validate inputs
    if (!name || !email || !organization) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send email to admin (use TEST_EMAIL for testing, otherwise sporttriad@gmail.com)
    const adminEmailAddress = process.env.TEST_EMAIL || 'sporttriad@gmail.com'
    const { data: adminEmail, error: adminError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Triad Contact <onboarding@resend.dev>',
      to: adminEmailAddress,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
      `,
    })

    if (adminError) {
      console.error('Error sending admin email:', adminError)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Send confirmation email to user
    // If TEST_EMAIL is set, send to TEST_EMAIL (for testing - can't send to arbitrary emails without domain verification)
    // If domain is verified (no TEST_EMAIL), send to the actual user's email
    const userEmailAddress = process.env.TEST_EMAIL || email
    const { data: userEmail, error: userError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Triad Contact <onboarding@resend.dev>',
      to: userEmailAddress,
      subject: 'Thank you for contacting Triad',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you soon.</p>
        <p>Your submission details:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Organization:</strong> ${organization}</li>
        </ul>
        <p>Best regards,<br>The Triad Team</p>
      `,
    })

    if (userError) {
      console.error('Error sending user confirmation email:', userError)
      // Don't fail the request if user email fails, admin email is more important
    }

    return NextResponse.json(
      { message: 'Form submitted successfully', success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

