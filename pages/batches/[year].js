import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export const getStaticPaths = async () => {
  // const arr = ['2022', '2021', '2020', '2019', '2018'];
  const response = await fetch(process.env.API_URL);
  const arr = await response.json();
  const paths = arr.map((item) => {
    return {
      params: { year: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log(context.params);
  const temp = context.params.year;
  const response = await fetch(process.env.API_URL + temp);
  const data = await response.json();
  return {
    props: {
      res: data,
      notFound: true,
    },
  };
};

const Year = ({ res }) => {
  console.log("res" - res);
  return (
    <>
      <Row>
        <>
        <div className="mt-4 mb-3">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/batches">
              Batches
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              {res.id}
            </Breadcrumb.Item>
          </Breadcrumb>
          </div>
          <Col>
            <Card className="mb-4" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={res.image}
                width="150"
                height="300"
              />
              <Card.Body>
                <Card.Title>{res.title.substring(0, 15)}</Card.Title>
                <Card.Text>{res.description.substring(0, 32)}</Card.Text>
                <Card.Text>
                  <em>Price:</em> {res.price}
                </Card.Text>
                <Button variant="primary">Checkout</Button>
              </Card.Body>
            </Card>
          </Col>
        </>
      </Row>
    </>
  );
};

export default Year;
