import Breadcrumb from "react-bootstrap/Breadcrumb";

export const getStaticProps = () => {
    return{
        props : {footerstatus : true}
    }
}

const Playground = (props) => {
  return (
    <>
       <Breadcrumb className="mt-4">
            <Breadcrumb.Item href="/facilities">
              Facilities
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              playground
            </Breadcrumb.Item>
          </Breadcrumb>
          <div>Playground</div>
    </>
  )
}

export default Playground