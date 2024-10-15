import { Html } from '@react-email/components';
import * as React from 'react';

interface WelcomeProps {
  name: string;
  email: string;
  message: string;
  looking_for: string;
  country: string;
  city: string;
}

export default function Welcome({
  name,
  message,
  looking_for,
  country,
  city,
  email,
}: WelcomeProps) {
  return (
    <Html>
      <h1>Contact from {name}!</h1>
      <p>
        {name} from {city}, {country}. He is looking for {looking_for}.
      </p>
      <p>Message: {message}</p>
      <p>Email: {email}</p>
    </Html>
  );
}
