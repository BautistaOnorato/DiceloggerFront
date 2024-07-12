import { useRouter } from "next/navigation";
import { useState } from "react";

export type SignupData = {
  username: string;
  displayname: string;
  email: string;
  password: string;
}

export default function useSignup() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSignup = ({ username, displayname, email, password }: SignupData) => {
    setLoading(true)
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, displayname, email, password })
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        setError(true)
        setLoading(false)
        throw new Error('Failed to sign up');
      }
    }).then(data => {
      // Check if verification email has been sent
      if (data && data.message === 'Verification email sent. Please check your email to complete registration.') {
        // Show a message to the user indicating that a verification email has been sent
        console.log('Se ha enviado un correo electrónico de verificación. Por favor, verifica tu correo electrónico para completar el registro.');
      }
      setError(false)
      setLoading(false)
      router.push('/');
    }).catch(err => {
      console.error(err)
      setLoading(false)
      setError(true)
    });
  }

  return { handleSignup, loading, error }
}