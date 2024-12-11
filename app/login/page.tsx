"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Lock, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginSignupPage() {
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState(""); // For signup only
  const [rememberMe, setRememberMe] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // Message to show in the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const router = useRouter();
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isSignup) {
      // Handle signup submission
      if (password !== confirmPassword) {
        setModalMessage("Las contraseñas no coinciden.");
        setIsModalOpen(true);
        return;
      }
      setModalMessage("Cuenta creada exitosamente.");
      setIsModalOpen(true);
    } else {
      router.push("/");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSignup(!isSignup);
    setEmail("");
    setPassword("");
    if (!isSignup) router.push("/home"); // Redirect on successful login
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-title">
          {isSignup ? "Regístrate en Mentalia" : "Inicia sesión en Mentalia"}
        </h2>

        {isSignup && (
          <div>
            <label htmlFor="name">Nombre Completo</label>
            <div className="input-group">
              <User />
              <input
                type="text"
                id="name"
                placeholder="Martina Gómez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
        )}

        <label htmlFor="email">Correo electrónico</label>
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

        {isSignup && (
          <>
            <label htmlFor="name">Nombre</label>
            <div className="input-group">
              <User />
              <input
                type="text"
                id="name"
                placeholder="Martina"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <label htmlFor="lastName">Apellido</label>
            <div className="input-group">
              <User />
              <input
                type="text"
                id="lastName"
                placeholder="Gómez Pérez"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <label htmlFor="age">Edad</label>
            <div className="input-group">
              <User />
              <input
                type="number"
                id="age"
                placeholder="25"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <label htmlFor="location">Ubicación</label>
            <div className="input-group">
              <MapPin />
              <input
                type="text"
                id="location"
                placeholder="Ciudad, País"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <label htmlFor="password">Contraseña</label>
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

        {!isSignup && (
          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe" style={{ marginLeft: "8px" }}>
              Recordarme
            </label>
          </div>
        )}

        <button type="submit" className="submit-btn">
          {isSignup ? "Registrarse" : "Ingresar"}
        </button>

        {!isSignup && (
          <a href="#" className="forgot-password">
            Olvidé mi contraseña
          </a>
        )}

        <p className="toggle-text">
          {isSignup ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
          <button
            type="button"
            className="toggle-button"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Inicia sesión" : "Regístrate"}
          </button>
        </p>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button className="close-btn" onClick={handleCloseModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}

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
          margin-bottom: 20px;
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

        .form-title {
          font-size: 18px;
          font-weight: bold;
          color: #4b0082;
          margin-bottom: 20px;
          text-align: center;
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

        .toggle-text {
          text-align: center;
          margin-top: 20px;
          color: #333;
        }

        .toggle-button {
          background: none;
          border: none;
          color: #4b0082;
          font-weight: bold;
          cursor: pointer;
        }

        .toggle-button:hover {
          text-decoration: underline;
        }

        /* Modal Styles */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .close-btn {
          background-color: #4b0082;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          margin-top: 10px;
          font-weight: bold;
          cursor: pointer;
        }

        .close-btn:hover {
          background-color: #37006b;
        }
      `}</style>
    </div>
  );
}
