import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export const getStaticPaths = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const arr = await response.json();
  console.log("arr", arr)
  const paths = arr.map((item) => {
    return {
      params: { editid: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log(context.params);
  const temp = context.params.editid;
  const response = await fetch("https://fakestoreapi.com/products/" + temp);
  const data = await response.json();
  return {
    props: {
      res: data,
      notFound: true,
    },
  };
};

const edituser = ({ res }) => {
  console.log("res" - res);
  return (
    <>
      <Row>
        <>
        <div className="mt-4 mb-3">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/users">
              Batches
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
               {res.id}
            </Breadcrumb.Item>
          </Breadcrumb>

          <div>This is edit product {res.id}</div>

          </div>
        </>
      </Row>
    </>
  );
};

export default edituser;
