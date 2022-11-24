import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from "next/router";

// export const getServerSideProps = async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();
//   return {
//     props: { data: data },
//   };
// };

const ProductId = (context) => {
  const router = useRouter();
  const {id} = router.query;
  console.log("id", id)
  return (
    <div className="mt-5">
       <Row>
        return (
          <>
              This is page id - {id}
          </>
        );
      </Row>
    </div>
  );
};

export default ProductId;
