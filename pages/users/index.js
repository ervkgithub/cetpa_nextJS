import Table from "react-bootstrap/Table";
import axios from "axios";
import Link from "next/link";

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: { data: data },
  };
};

const handleDelete = async (id) => {
  var url = `https://fakestoreapi.com/products/${id}`
  console.log("deleteddd id", id);
    await axios.delete(url)
    .then(response => console.log('Delete successful'))
    .catch(error => {
       // element.parentElement.innerHTML = `Error: ${error.message}`;
        console.error('There was an error!', error);
    });
}

const AllUsers = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="mt-5">
      <>
      <h2>All User List</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
              {data.slice(0,7).map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td> 
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.image}</td>
                    <td><span onClick={()=> handleDelete(item.id)}>Delete</span> &nbsp; <Link href={`/users/${item.id}`}>Edit</Link></td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </>
    </div>
  );
};

export default AllUsers;
