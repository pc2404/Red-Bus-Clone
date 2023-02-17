import { useRef } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const loginFunction = () => {
    if (!username.current.value || !password.current.value) {
      toast.error("All fields required");
    } else {
      localStorage.setItem("token", "userToken");
      navigate("/");
    }
  };

  return (
    <>
      <Toaster />
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="UserName" ref={username} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={password}
            />
          </Form.Group>

          <Button variant="danger w-100" type="submit" onClick={loginFunction}>
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Login;
