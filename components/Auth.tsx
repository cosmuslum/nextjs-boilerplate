// components/Auth.tsx
"use client"
import { useState } from 'react'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSignup = async () => {
    // Supabase ile kayıt
  }
  
  return (
    <div className="max-w-md mx-auto">
      <input type="email" placeholder="E-posta" />
      <input type="password" placeholder="Şifre" />
      <button>Kayıt Ol</button>
    </div>
  )
}
