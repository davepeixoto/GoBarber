import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logoGoBarber.svg';

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email obrigatorio'),
  password: Yup.string().required('Senha é obrigatória'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite o email" />
        <Input name="password" type="password" placeholder="Digite a senha" />

        <button type="submit">Acessar</button>

        <Link to="/register">Crie sua conta</Link>
      </Form>
    </>
  );
}
