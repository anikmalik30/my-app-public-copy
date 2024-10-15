import ThankYou from '@/emails/ThankYou';
import Welcome from '@/emails/Welcome';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message, looking_for, country, city } =
      await request.json();

    const { data: contactData, error: contactError } = await resend.emails.send(
      {
        from: 'Contact Form <contact@anikmalik.com>',
        to: 'contact@anikmalik.com',
        subject: `Contact form submission from ${name}`,
        react: Welcome({ name, message, looking_for, country, city, email }),
      },
    );

    if (contactError) {
      return Response.json({ error: contactError }, { status: 500 });
    }

    // Send thank you email
    const { data: thankYouData, error: thankYouError } =
      await resend.emails.send({
        from: 'Anik Malik <info@anikmalik.com>',
        to: email,
        subject: 'Thank You for Contacting Us!',
        react: ThankYou({ name }),
      });

    if (thankYouError) {
      return Response.json({ error: thankYouError }, { status: 500 });
    }
    return Response.json({ contactData, thankYouData });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
