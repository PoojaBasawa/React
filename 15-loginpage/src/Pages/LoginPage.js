commitsample 
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import './LoginPage.css'; // Import custom CSS file

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example validation, you can replace it with actual API call
    if (!email || !password) {
      setError('Please fill in both fields.');
    } else {
      setError('');
      console.log('Logging in with', email, password);
      // Handle login logic (e.g., call an API to authenticate)
    }
  };

  return (
    <div className="login-container">
      <Container>
        <Row className="w-100">
          <Col xs={12} sm={8} md={6} lg={4}>
            <Card className="p-4">
              <Card.Title className="text-center">Login</Card.Title>
              <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address: &nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" block>
                    Login
                  </Button>
                </Form>

                {/* Sign Up Link */}
                <div className="signup-option mt-3">
                  <p className="text-center">
                    Don't have an account?{' '}
                    <a href="SignUpPage" className="signup-link">
                      Sign Up here
                    </a>
                  </p>
                </div>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
