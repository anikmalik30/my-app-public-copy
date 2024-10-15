import React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Button,
  Hr,
  Section,
} from '@react-email/components';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

interface ThankYouProps {
  name: string;
}

const ThankYou: React.FC<ThankYouProps> = ({ name }) => (
  <Html>
    <Head>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        `}
      </style>
    </Head>
    <Preview>Thank you for contacting us!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Thank You, {name}!</Heading>
        <Text style={paragraph}>
          We have received your message and will get back to you shortly.
        </Text>
        {/* <Hr style={hr} /> */}
        <Section style={footer}>
          <Text style={footerText}>Best regards,</Text>
          <Text style={footerText}>Anik Malik</Text>
          <Button style={button} href='https://anikmalik.com'>
            Visit My Website
          </Button>
        </Section>
        <Hr style={hr} />
        <Section style={socialFooter}>
          <Text style={footerText}>Follow Us:</Text>
          <Text style={footerText}>
            <a
              href='https://www.linkedin.com/in/anik-malik-6bb8a1245'
              style={linkStyle}
            >
              LinkedIn
            </a>{' '}
            |
            <a href='https://github.com/anikmalik30' style={linkStyle}>
              GitHub
            </a>{' '}
            |
            <a href='https://x.com/anikmalik4' style={linkStyle}>
              X
            </a>
          </Text>
        </Section>
        {/* <Hr style={hr} /> */}
        <Section style={copyrightFooter}>
          <Text style={footerText}>
            © 2024 Anik Malik. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#0d0d0d', // Darker background color
  fontFamily: 'Roboto, Arial, sans-serif', // Custom font
  color: '#e0e0e0', // Light text color for contrast
  padding: '20px',
};

const container = {
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#1a1a1a', // Darker container background
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)', // Darker shadow
  maxWidth: '600px',
  textAlign: 'center' as const, // Center align text
};

const heading = {
  fontSize: '28px', // Larger font size
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#ffffff', // White text color
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '20px',
  color: '#cccccc', // Light grey text color
};

const hr = {
  border: 'none',
  borderTop: '1px solid #333333', // Darker horizontal rule
  margin: '20px 0',
};

const footer = {
  textAlign: 'center' as const,
  marginBottom: '10px',
};

const footerText = {
  fontSize: '14px',
  color: '#aaaaaa', // Light grey footer text
  marginBottom: '5px',
};

const button = {
  backgroundColor: '#ffffff', // White button background
  color: '#0d0d0d', // Dark text color for contrast
  padding: '12px 24px', // Larger padding
  borderRadius: '25px', // Rounded button
  textDecoration: 'none',
  display: 'inline-block',
  fontWeight: 'bold',
  border: '2px solid #0d0d0d', // Dark border
  transition: 'background-color 0.3s, color 0.3s', // Smooth transition
};

const socialFooter = {
  textAlign: 'center' as const,
  marginTop: '10px',
  marginBottom: '10px',
};

const socialLink = {
  margin: '0 10px',
  color: '#e0e0e0', // Light color for icons
  textDecoration: 'none',
};

const socialIcon = {
  width: '24px', // Width for icons
  height: '24px', // Height for icons
};

const contactFooter = {
  textAlign: 'center' as const,
  marginTop: '10px',
  marginBottom: '10px',
};

const emailLink = {
  color: '#e0e0e0', // Light color for email link
  textDecoration: 'none',
};

const copyrightFooter = {
  textAlign: 'center' as const,
  marginTop: '0px',
};

const linkStyle = {
  color: '#e0e0e0', // Light color for links
  textDecoration: 'none',
  margin: '0 5px',
};

export default ThankYou;
