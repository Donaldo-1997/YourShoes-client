import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/actions";
import styles from "./FormUser.module.css";
import { useNavigate } from "react-router-dom";
import {FcDownLeft} from "react-icons/fc";
import { Link } from "react-router-dom";
// import * as Yup from "yup";

//name, surname, nickname, email, phone_number, date_of_Birth, address

//expresion regular nombre solo letras y espacio  !/^[a-zA-ZÀ-ÿ\s]{1,40}$/
//expresion regular correo  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

export default function Formulario() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formularioEnviado, setformularioEnviado] = useState(false);
  return (
    <div className={styles.contenedor}>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          nickname: "",
          email: "",
          password: "",
          phone_number: "",
          date_of_Birth: "",
          address: "",
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          dispatch(postUser(valores));
          console.log("formulario enviado");
          console.log("post", valores);
          setformularioEnviado(true);
          setTimeout(() => setformularioEnviado(false), 5000);
          navigate('/login')
        }}
        validate={(valores) => {
          let error = {};
          // validacion del nombre
          if (!valores.name) {
            error.name = "Ingresa tu nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            error.name = "Tu nombre debe contener solo letras";
          }

          //validacion del apellido
          if (!valores.surname) {
            error.surname = "Ingresa tu Apellido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.surname)) {
            error.surname = "Tu apellido debe contener solo letras";
          }

          // validacion del nick name
          if (!valores.nickname) {
            error.nickname = "Ingresa tu Sobrenombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nickname)) {
            error.nickname = "Tu nickname debe contener solo letras";
          }

          if (!valores.email) {
            error.email = "Ingresa tu Email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            error.email = "Tu email debe ser en formato mail(@)";
          }

          if (!valores.phone_number) {
            error.phone_number = "Ingresa tu Celular";
          } else if (!/^[0-9,$]*$/.test(valores.phone_number)) {
            error.phone_number = "Solo puedes escribir numeros";
          }

          if (!valores.date_of_Birth) {
            error.date_of_Birth = "Ingresa tu fecha de nacimiento";
          }

          if (!valores.address) {
            error.address = "Ingresa tu Direccion";
          }

          if (!valores.password) {
            error.password = "Ingresa tu Contrasena";
          } else if (
            !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(
              valores.password
            )
          ) {
            error.password =
              "entre 8 y 16 caracteres, al menos un dígito, una minúscula, una mayúscula";
          }

          return error;
        }}
      >
        {({ errors }) => (
          <Form className={styles.formulario}>
            <div>
            <div className={styles.yourShoes}>Your<span>Shoes</span></div>
              <label htmlFor="name">Nombre: </label>
              <Field type="text" id="name" name="name" placeholder="Jhon Doe" />
              <ErrorMessage
                name="name"
                component={() => (
                  <div className={styles.error}>{errors.name}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="surname">Apellido: </label>
              <Field
                type="text"
                id="surname"
                name="surname"
                placeholder="Pe pi"
              />
              <ErrorMessage
                name="surname"
                component={() => (
                  <div className={styles.error}>{errors.surname}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="nickname">Nombre de Usuario: </label>
              <Field
                type="text"
                id="nickname"
                name="nickname"
                placeholder="Jhon Cena"
              />
              <ErrorMessage
                name="nickname"
                component={() => (
                  <div className={styles.error}>{errors.nickname}</div>
                )}
              />
            </div>

            <div>
              <label htmlFor="phone_number">Numero de telefono: </label>
              <Field
                type="text"
                id="phone_number"
                name="phone_number"
                placeholder="000-0000000"
              />
              <ErrorMessage
                name="phone_number"
                component={() => (
                  <div className={styles.error}>{errors.phone_number}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="date_of_Birth">Dia de nacimiento: </label>
              <Field
                type="date"
                id="date_of_Birth"
                name="date_of_Birth"
                placeholder="00/00/00"
              />
              <ErrorMessage
                name="date_of_Birth"
                component={() => (
                  <div className={styles.error}>{errors.date_of_Birth}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="address">Direccion: </label>
              <Field
                type="text"
                id="adrdess"
                name="address"
                placeholder="address"
              />
              <ErrorMessage
                name="address"
                component={() => (
                  <div className={styles.error}>{errors.address}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="email">Correo: </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="correo@correo.com"
              />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className={styles.error}>{errors.email}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="password">Contrasena: </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="contrasena"
              />
              <ErrorMessage
                name="password"
                component={() => (
                  <div className={styles.error}>{errors.password}</div>
                )}
              />
            </div>
            <button type="submit">Enviar</button>
            {formularioEnviado && (
              <p className={styles.exito}>Enviado con exito!</p>
            )}
            
            <Link to='/login' className={styles.link}><p><FcDownLeft></FcDownLeft>Regresa</p></Link>

          </Form>
        )}
      </Formik>
    </div>
  );
}
