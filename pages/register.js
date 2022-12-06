
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import { useRouter } from "next/router";
import Link from "next/link";
var router;

const handleRegister = async (event) => {
  event.preventDefault()
  const data = {
    userid: event.target.userid.value,
    username: event.target.username.value,
    name: event.target.name.value,
    email: event.target.email.value,
    mobile: event.target.mobile.value,
    password: event.target.password.value,
  }
  const JSONdata = JSON.stringify(data)
  const endpoint = 'http://localhost:3000/api/users/register'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONdata,
  }
  const response = await fetch(endpoint, options)
  const result = await response.json();
  console.log(result);
  if(data.userid == result.userid && data.username == result.username && data.name == result.name && data.email == result.email && data.password == result.password && data.mobile == result.mobile){
    router.push("/success");
  }
  else{
    alert(result.message);
  }
}

const register = () => {
  router = useRouter();
  return (
    <>
        <Row>
        <Col xs={5}>
          {/* <Form className="mt-3" action="http://localhost:3000/api/users/register" method="post"> */}
          <Form className="mt-3" onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicUserId">
              <Form.Label>UserID</Form.Label>
              <Form.Control type="text" placeholder="Enter UserId" name="userid" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>UserName</Form.Label>
              <Form.Control type="text" placeholder="Enter username" name="username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Mobile no.</Form.Label>
              <Form.Control type="number" placeholder="Enter mob. number" name="mobile" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPass">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" name="password" />
            </Form.Group>
{/*            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
            <Button variant="primary" type="submit">
              Register
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/login">
            <Button variant="secondary" type="submit">
              Already regustered, Login here?
            </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default register