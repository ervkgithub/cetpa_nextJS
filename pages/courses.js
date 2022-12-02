import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const getStaticProps = async () => {
  const res = await fetch(process.env.API_URL);
  const data = await res.json();
  return {
    props: { data: data },
  };
};

const Courses = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="mt-5">
       <Row>
      {data.slice(0,4).map((item) => {
        return (
          <>
              <Col>
                <Card className="mb-4" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.image} width="150" height="300" />
                  <Card.Body>
                    <Card.Title>{item.title.substring(0, 15)}</Card.Title>
                    <Card.Text>{item.description.substring(0, 32)}</Card.Text>
                    <Card.Text><em>Price:</em> {item.price}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
          </>
        );
      })}
      </Row>
    </div>
  );
};

export default Courses;
