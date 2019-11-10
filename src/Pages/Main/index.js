import React, { Component } from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, SubmitButton, Form } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
  };

  render() {
    const { newRepo } = this.state.newRepo;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={() => {}}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
          />
          <SubmitButton>
            <FaPlus color="#fff" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
