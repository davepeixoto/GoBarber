import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logoGoBarber.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatorio'),
  email: Yup.string().email('Email inválido').required('Email obrigatorio'),
  password: Yup.string()
    .min(6, 'Minimo de 6 caracteres')
    .required('Senha é obrigatória'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Digite seu nome completo" />
        <Input name="email" type="email" placeholder="Digite o email" />
        <Input name="password" type="password" placeholder="Digite a senha" />

        <button type="submit">Criar contat</button>

        <Link to="/">Já possui conta?</Link>
      </Form>
    </>
  );
}
