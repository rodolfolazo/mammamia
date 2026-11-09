import { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';


const Register = () => {
  const initialState = {
    email: "",
    password: "",
    confirmPassword: "",
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
    const {email, password, confirmPassword} = formData;
    const emptyFields = [];
    if (!email) emptyFields.push("email");
    if (!password) emptyFields.push("password");
    if (!confirmPassword) emptyFields.push("confirmPassword");
    if (emptyFields.length > 0) {
      setError(true);
      setMensaje(`Los siguientes campos son obligatorios: ${emptyFields.join(", ")}`);
      return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError(true);
      setMensaje("Las contraseñas no coinciden");
      return;
    }

    // Validar que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
      setError(true);
      setMensaje("La contraseña debe tener al menos 6 caracteres");
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
        <h1 className="text-center mb-4">Formulario de Registro</h1>

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

        {error && (
          <Row className="justify-content-center">
            <Col md={6}>
              <Alert variant="dark">{mensaje}</Alert>
            </Col>
          </Row>
        )}

      </Container>
    </>
  );
};

export default Register;
