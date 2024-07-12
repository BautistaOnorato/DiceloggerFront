import { useRouter } from "next/navigation";
import { useState } from "react";

export type LoginData = {
  email: string;
  password: string;
}

export default function useLogin() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleLogin = ({ email, password }: LoginData) => {
    setLoading(true)
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }).then(res => res.json()).then(data => {
      window.localStorage.setItem('user', data.data.username)
      setError(false)
      setLoading(false)
      router.push('/')
    }).catch(err => {
      console.error(err)
      setLoading(false)
      setError(true)
    })
  }

  return { handleLogin, error, loading }
}