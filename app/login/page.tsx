"use client";

import { useState } from 'react';
import Image from 'next/image';
import { User, Lock } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle login submission
    router.push('/');
  };

  return (
    <div className="container">
      <div className="logo" style={{ marginTop: '0px' }}>
        <Image src="/images/icon.png" alt="Mentalia" width={250} height={250} />
      </div>

      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">Ingresa tu usuario o correo electrónico</label>
        <div className="input-group">
          <User />
          <input
            type="email"
            id="email"
            placeholder="martinagomez@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <label htmlFor="password">Ingresa tu contraseña</label>
        <div className="input-group">
          <Lock />
          <input
            type="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe" style={{ marginLeft: '8px' }}>Recordarme</label>
        </div>

        <button type="submit" className="submit-btn">Ingresar</button>

        <a href="#" className="forgot-password">Olvidé mi contraseña</a>
      </form>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100%;
          background: linear-gradient(to bottom, #b7d6f5, #8e24aa);
          padding: 0 20px;
        }

        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .logo h1 {
          font-size: 32px;
          color: #4b0082;
          margin-left: 10px;
          font-weight: bold;
        }

        .form {
          width: 100%;
          max-width: 400px;
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }

        label {
          font-size: 14px;
          color: #333;
          margin-bottom: 5px;
        }

        .input-group {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 5px;
        }

        .input-group input {
          flex: 1;
          border: none;
          outline: none;
          padding: 10px;
          font-size: 14px;
        }

        .input-group svg {
          color: #4b0082;
          margin-right: 10px;
        }

        .remember-me {
          margin-bottom: 20px;
          display: flex;
          align-items: center;
        }

        .submit-btn {
          background-color: #4b0082;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
        }

        .submit-btn:hover {
          background-color: #37006b;
        }

        .forgot-password {
          color: #4b0082;
          text-align: center;
          margin-top: 10px;
          text-decoration: none;
        }

        .forgot-password:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
