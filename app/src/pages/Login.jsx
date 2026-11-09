import { useState } from "react";
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';

const Register = () => {
  const initialState = {
    email: "",
    password: ""
  };
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value} = e.target
    setFormData((prevData) => ({...prevData, [name]: value}))
  };

  const validateForm = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    const {email, password} = formData;
    const emptyFields = [];
    if (!email) emptyFields.push("email");
    if (!password) emptyFields.push("password");

    if (emptyFields.length > 0) {
      setError(true);
      setMensaje(`Los siguientes campos son obligatorios: ${emptyFields.join(", ")}`);
      return;
    }

    // Si todo está bien, enviar el formulario
    setError(false);
    setMensaje("");
    console.log(formData);
    setFormData(initialState);


  };
  return (
    <>
      <Container className="mt-5">
        <h1 className="text-center mb-4">Login</h1>

        <Modal
                show={error}
                onHide={() => setError(false)}
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Error de validación</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  {mensaje}
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => setError(false)}
                  >
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>

        <Form onSubmit={validateForm}>


          {Object.keys(initialState).map((campo) => (
            <Row className="form-group justify-content-center" key={campo}>
              <Col className="text-center"md={6}>
                <Form.Label htmlFor={campo}>{
                  campo.charAt(0).toUpperCase() + campo.slice(1)
                }</Form.Label>
                <Form.Control
                  id={campo}
                  type={
                    campo === "email"
                      ? "email"
                      : "password"
                  }
                  name={campo}
                  value={formData[campo]}
                  onChange={handleChange}
                  className="form-control mb-4"
                />
              </Col>
            </Row>
          ))}

          <div className="text-center mb-4">
            <Button type="submit">Enviar</Button>
          </div>
        </Form>

      </Container>
    </>
  );
};

export default Register;
