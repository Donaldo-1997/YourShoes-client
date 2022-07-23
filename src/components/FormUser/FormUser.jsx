import React, {useState} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/actions";
import styles from './FormUser.module.css'
// import * as Yup from "yup";

//name, surname, nickname, email, phone_number, date_of_Birth, address

//expresion regular nombre solo letras y espacio  !/^[a-zA-ZÀ-ÿ\s]{1,40}$/
//expresion regular correo  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

export default function Formulario() {

    const dispatch = useDispatch()

    const [formularioEnviado, setformularioEnviado] = useState(false);
  return (
    <div className={styles.contenedor}>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          nickname: "",
          email: "",
          password:"",
          phone_number:"",
          date_of_Birth: "",
          address:"",

        }}
        onSubmit={(valores ,{resetForm}) => {
            resetForm()
            dispatch(postUser(valores))
            console.log('formulario enviado')
          console.log('post' ,valores);
          setformularioEnviado(true)
          setTimeout(() => setformularioEnviado(false), 5000)
        }}
        validate={(valores) => {
          let error = {};
          // validacion del nombre  
          if (!valores.name) {
            error.name = "Ingresa tu nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
            error.name= 'No debiste hacer eso'
          }

          //validacion del apellido
          if (!valores.surname) {
            error.surname = "Ingresa tu Apellido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.surname)){
            error.surname= 'No debiste hacer eso'
          }

          // validacion del nick name
          if (!valores.nickname) {
            error.nickname = "Ingresa tu Sobrenombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nickname)){
            error.nickname = 'No debiste hacer eso'
          }

          if (!valores.email) {
            error.email = "Ingresa tu Email";
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
            error.email = 'No debiste hacer eso'
          }

          if (!valores.phone_number) {
            error.phone_number = "Ingresa tu Celular";
          } else if ( !/^[0-9,$]*$/.test(valores.phone_number)){
            error.phone_number = 'No debiste hacer eso'
          }

          if (!valores.date_of_Birth) {
            error.date_of_Birth= "Ingresa tu fecha de nacimiento";
          }

          if (!valores.address) {
            error.address = "Ingresa tu Direccion";
          }

          if (!valores.password) {
            error.password = "Ingresa tu Contrasena";
          }
          



          return error;
        }}
      >
        {({errors}) => (
          <Form  className={styles.formulario}>
            <div>
              <label htmlFor="name">Name: </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Jhon Doe"
               
              />
              <ErrorMessage
                name='name' component={() => (
                    <div className={styles.error}>{errors.name}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="surname">Surname: </label>
              <Field
                type="text"
                id="surname"
                name="surname"
                placeholder="Pe pi"
              />
               <ErrorMessage
                name='surname' component={() => (
                    <div className={styles.error}>{errors.surname}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="nickname">Nikname: </label>
              <Field
                type="text"
                id="nickname"
                name="nickname"
                placeholder="Jhon Cena"
              />
               <ErrorMessage
                name='nickname' component={() => (
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
                name='phone_number' component={() => (
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
                name='date_of_Birth' component={() => (
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
                name='address' component={() => (
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
                name='email' component={() => (
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
                name='password' component={() => (
                    <div className={styles.error}>{errors.password}</div>
                )}
              />
            </div>
            <button type="submit">Enviar</button>
           { formularioEnviado && <p className={styles.exito}>Enviado con exito!</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
