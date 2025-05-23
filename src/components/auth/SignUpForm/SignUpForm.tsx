"use client";
import { useState, useEffect } from 'react';
import Button from "@/components/common/buttons/Button";
import Input from "@/components/common/inputs/Input";
import InputPassword from "@/components/common/inputs/InputPassword";
import styles from "./SignUpForm.module.css";
import formStyles from "../AuthForm/AuthForm.module.css";
import Link from "next/link";
import useLogin from "@/hooks/useLogin";
import FormGroup from "@/components/home/NewLayout/FormGroup";
import useSignup from "@/hooks/useSignup";

const SignUpForm = () => {
  // const [verificationSent, setVerificationSent] = useState(false); // Estado para controlar si se ha enviado la verificación
  
  const { handleSignup, error, loading } = useSignup();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.target as HTMLFormElement).username.value;
    const displayname = (e.target as HTMLFormElement).displayname.value;
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;
    handleSignup({ username, displayname, email, password });
    // setVerificationSent(true);
  };

  // useEffect(() => {
  //   if (verificationSent) {
  //     const timeout = setTimeout(() => {
  //       setVerificationSent(false); 
  //     }, 5000); 
      
  //     return () => clearTimeout(timeout); 
  //   }
  // }, [verificationSent]);

  return (
    <>
      <h1>Crear cuenta</h1>
      <p className={formStyles.description}>
        ¡Bienvenido! <br/>
        Ingresa tus datos para formar parte de <strong>DiceLogger</strong>
      </p>
      <form onSubmit={handleSubmit} className={formStyles.form}>
        <section className={styles.container}>
          <FormGroup>
            <label htmlFor="username" className={styles.label}>
              Nombre de usuario
            </label>
            <Input
              type="text"
              name="username"
              placeholder="johndoe17"
              required
              className={styles.input}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="displayname" className={styles.label}>
              Nombre de display
            </label>
            <Input
              type="text"
              name="displayname"
              placeholder="Jhon"
              className={styles.input}
            />
          </FormGroup>
        </section>
        <FormGroup>
          <label htmlFor="email" className={styles.label}>
            Correo electrónico
          </label>
          <Input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            required
            className={styles.input}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password" className={styles.label}>
            Contraseña
          </label>
          <InputPassword
            name="password"
            placeholder="••••••••••"
            required
            className={styles.input}
          />
        </FormGroup>

        {/* {verificationSent && ( // Muestra el mensaje si la verificación se ha enviado
        <div className={styles.notification}>
          Se ha enviado un correo de verificación. Por favor, revisa tu bandeja de entrada.
        </div>
      )} */}
        <div className={formStyles.buttons}>
          <Button type="submit" className={styles.submit}>
            {loading ? "Cargando..." : "Crear cuenta"}
          </Button>
          {error && <span className={styles.error}>Algo salió mal.</span>}
          <span className={formStyles.navigation}>
            ¿Ya tienes cuenta? <Link href={"/auth/login"}>Inicia Sesión</Link>
          </span>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
