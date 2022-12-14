
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export const getStaticProps = async () => {
  const res = await fetch(process.env.API_URL);
  const data = await res.json();
  return {
    props: { data: data },
  };
};

const Batches = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="mt-4">
         <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active href="/batches">
              Batches
            </Breadcrumb.Item>
          </Breadcrumb>
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
                    <Link href={`/batches/${item.id}`}>
                    <Button variant="primary">Buy Now</Button>
                    </Link>
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

export default Batches;
