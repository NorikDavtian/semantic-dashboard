import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { home } from '../config';
import './Login.css';

const LoginForm = () => (
  <div id="login">
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Link to={`${home}/`}><Button fluid size="large" className="primary">Login</Button></Link>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to={`${home}/login`}>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginForm;
