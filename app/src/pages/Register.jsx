import {  Form,   Button,   Container,   Row,   Col,   Modal,   Spinner, } from "react-bootstrap";

import { useRegister } from "../features/auth/hooks/useRegister";

const Register = () => {
  const { email, password, loading, error, handleRegister, clearError } = useRegister();

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Register</h1>

      <Modal
        show={!!error}
        onHide={clearError}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Error de autenticación
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {error}
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={clearError}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Form onSubmit={handleRegister}>
        <Row className="justify-content-center">
          <Col className="text-center" md={6}>
            <Form.Label htmlFor="email">
              Email
            </Form.Label>

            <Form.Control
              id="email"
              type="email"
              name="email"
              value={email.value}
              onChange={email.onChange}
              className="mb-4"
              autoComplete="email"
              disabled={loading}
              required
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="text-center" md={6}>
            <Form.Label htmlFor="password">
              Password
            </Form.Label>

            <Form.Control
              id="password"
              type="password"
              name="password"
              value={password.value}
              onChange={password.onChange}
              className="mb-4"
              autoComplete="current-password"
              disabled={loading}
              required
            />
          </Col>
        </Row>

        <div className="text-center mb-4">
          <Button type="submit" disabled={loading}>
            {loading ? (
              <>
                <Spinner
                  animation="border"
                  size="sm"
                  className="me-2"
                />
                Iniciando sesión...
              </>
            ) : (
              "Enviar"
            )}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
