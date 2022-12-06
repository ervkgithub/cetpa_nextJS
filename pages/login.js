import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import Link from "next/link";

var router;

const login = () => {
   router = useRouter();
  return (
    <>
      <Row>
        <Col xs={5}>
          <Form className="mt-3" onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPass">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/register">
            <Button variant="secondary" type="submit">
              New User Register here ?
            </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </>
  );
};

const handleLogin = async (event) => {
  event.preventDefault();
  const data = {
    email: event.target.email.value,
    password: event.target.password.value,
  };
  const JSONdata = JSON.stringify(data);
  const endpoint = "http://localhost:3000/api/users/login";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };
  const response = await fetch(endpoint, options);
  const result = await response.json();
  console.log(result);
  if (data.email == result.email && data.password == result.password) {
    router.push("/dashboard");
  } else {
    alert(result.message);
  }
};

export default login;
