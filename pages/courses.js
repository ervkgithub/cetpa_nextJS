
export const getStaticProps = async () =>{
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return{
    props:{data:data}
  }
}

const Courses = (props) => {
  const {data} = props;
    return (
      <div>
        {data.map((item) =>{
          return(
            <>
            <h1>{item.title}</h1>
            </>
          )
        })}
      </div>
    )
  }
  
  export default Courses