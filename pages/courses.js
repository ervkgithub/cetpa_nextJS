import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
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
      {data.slice(0,5).map((item) => {
        return (
          <>
              <Col>
                <Card className="mb-4" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.image} width="100" />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
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
