import React, { FormEvent, useCallback } from 'react';

import Container from './components/Container';
import Form from './components/Form';
import InputLabel from './components/InputLabel';
import SubmitButton from './components/submitButton';

function App() {

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    console.log('passou')
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputLabel label="Email" type="email" />
        <InputLabel label="Senha" type="password" />
        <SubmitButton label="Entrar" type="submit" />
      </Form>
    </Container>
  );
}

export default App;
