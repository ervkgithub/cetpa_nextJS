import Table from "react-bootstrap/Table";

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/users/alluser");
  const data = await res.json();
  return {
    props: { data: data },
  };
};

const deleteFn = async (id) => {
   console.log("deleteid" ,id)
   const url = `http://localhost:3000/api/users/${id}`;
   console.log(url)
   try{
    const response = await axios.delete(url);
    console.log(response.data);
    if(response.data) {
      console.log(response.data);
    }
}
catch{
    // setSubmitStatus(true);
}
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
               <th>#UserId</th>
              <th>User Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.userid}>
                    <td>{item.userid}</td> 
                    <td>{item.username}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.password}</td>
                    <td><span onClick={()=> deleteFn(item._id)}>Delete</span> &nbsp; <span>Edit</span></td>
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
