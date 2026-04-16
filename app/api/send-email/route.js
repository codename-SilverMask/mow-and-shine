import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { formType, formData, userEmail } = body;

    if (!formType || !formData) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailContent = generateEmailContent(formType, formData);

    const businessEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: emailContent.subject,
      html: emailContent.html,
    };

    await transporter.sendMail(businessEmail);

    if (userEmail) {
      const confirmationEmail = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Thank you for contacting Mow & Shine',
        html: generateConfirmationEmail(formType, formData),
      };

      await transporter.sendMail(confirmationEmail);
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error.code || error.message);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

function generateEmailContent(formType, formData) {
  const timestamp = new Date().toLocaleString();

  switch (formType) {
    case 'callback':
      return {
        subject: 'New Callback Request - Mow & Shine',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #DC2626;">New Callback Request</h2>
            <p><strong>Submitted:</strong> ${timestamp}</p>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
              <p><strong>Phone:</strong> ${escapeHtml(formData.phone)}</p>
            </div>
            <p style="color: #6b7280;">Please contact this customer within 2 hours as promised.</p>
          </div>
        `
      };

    case 'estimate':
      return {
        subject: 'New Lawn Care Estimate Request - Mow & Shine',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #DC2626;">New Lawn Care Estimate Request</h2>
            <p><strong>Submitted:</strong> ${timestamp}</p>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Customer Information</h3>
              <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
              <p><strong>Phone:</strong> ${escapeHtml(formData.contactNumber)}</p>
              <p><strong>Address:</strong> ${escapeHtml(formData.address)}</p>

              <h3 style="color: #374151;">Service Details</h3>
              <p><strong>Lawn Size:</strong> ${escapeHtml(formData.lawnSize) || 'Not specified'}</p>
              <p><strong>Preferred Service:</strong> ${escapeHtml(formData.preferredService) || 'Not specified'}</p>

              ${formData.additionalNotes ? `
                <h3 style="color: #374151;">Additional Notes</h3>
                <p style="background-color: #fff; padding: 15px; border-left: 4px solid #DC2626;">${escapeHtml(formData.additionalNotes)}</p>
              ` : ''}
            </div>
            <p style="color: #6b7280;">Schedule an on-site visit to provide accurate estimate.</p>
          </div>
        `
      };

    case 'contact':
      return {
        subject: 'New Contact Form Submission - Mow & Shine',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #DC2626;">New Contact Form Submission</h2>
            <p><strong>Submitted:</strong> ${timestamp}</p>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Customer Information</h3>
              <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
              <p><strong>Phone:</strong> ${escapeHtml(formData.phone)}</p>
              <p><strong>Address:</strong> ${escapeHtml(formData.address) || 'Not provided'}</p>

              <h3 style="color: #374151;">Service Request</h3>
              <p><strong>Service:</strong> ${escapeHtml(formData.service) || 'Not specified'}</p>
              <p><strong>Preferred Date:</strong> ${escapeHtml(formData.preferredDate) || 'Not specified'}</p>
              <p><strong>Preferred Time:</strong> ${escapeHtml(formData.preferredTime) || 'Not specified'}</p>
              <p><strong>How they heard about us:</strong> ${escapeHtml(formData.hearAboutUs) || 'Not specified'}</p>

              ${formData.message ? `
                <h3 style="color: #374151;">Message</h3>
                <p style="background-color: #fff; padding: 15px; border-left: 4px solid #DC2626;">${escapeHtml(formData.message)}</p>
              ` : ''}
            </div>
          </div>
        `
      };

    default:
      return {
        subject: 'New Form Submission - Mow & Shine',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #DC2626;">New Form Submission</h2>
            <p><strong>Submitted:</strong> ${timestamp}</p>
            <p><strong>Form Type:</strong> ${escapeHtml(formType)}</p>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <pre style="white-space: pre-wrap;">${escapeHtml(JSON.stringify(formData, null, 2))}</pre>
            </div>
          </div>
        `
      };
  }
}

function generateConfirmationEmail(formType, formData) {
  const customerName = escapeHtml(formData.name || 'Valued Customer');

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #DC2626; margin-bottom: 10px;">Mow &amp; Shine</h1>
        <p style="color: #6b7280;">Professional Cleaning &amp; Lawn Care Services</p>
      </div>

      <h2 style="color: #374151;">Thank you for contacting us, ${customerName}!</h2>

      <p>We've received your ${formType === 'callback' ? 'callback request' : formType === 'estimate' ? 'estimate request' : 'contact form submission'} and will get back to you soon.</p>

      ${formType === 'callback' ? `
        <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #DC2626; margin: 20px 0;">
          <p style="margin: 0; font-weight: bold; color: #DC2626;">Quick Response Promise</p>
          <p style="margin: 5px 0 0 0;">We typically respond to callback requests within 2 hours during business hours (8:00 AM - 6:00 PM, Monday - Friday).</p>
        </div>
      ` : formType === 'estimate' ? `
        <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #DC2626; margin: 20px 0;">
          <p style="margin: 0; font-weight: bold; color: #DC2626;">Next Steps</p>
          <p style="margin: 5px 0 0 0;">Our team will contact you within 24 hours to schedule a free on-site consultation and provide you with a detailed estimate.</p>
        </div>
      ` : `
        <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #DC2626; margin: 20px 0;">
          <p style="margin: 0; font-weight: bold; color: #DC2626;">What's Next?</p>
          <p style="margin: 5px 0 0 0;">Our team will review your request and get back to you within 24 hours.</p>
        </div>
      `}

      <div style="margin: 30px 0; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
        <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
        <p><strong>Phone:</strong> +64 21 109 9914</p>
        <p><strong>Email:</strong> support@mownshine.com</p>
        <p><strong>Business Hours:</strong> 8:00 AM - 6:00 PM, Monday - Friday</p>
      </div>

      <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
        This is an automated confirmation email. If you have any immediate questions, please call us at +64 21 109 9914.
      </p>
    </div>
  `;
}
