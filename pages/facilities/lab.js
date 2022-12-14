import Breadcrumb from "react-bootstrap/Breadcrumb";

export const getStaticProps = () => {
    return{
        props : {footerstatus : true}
    }
}

const Lab = (props) => {
  return (
    <>
       <Breadcrumb className="mt-4">
            <Breadcrumb.Item href="/facilities">
              Facilities
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              lab
            </Breadcrumb.Item>
          </Breadcrumb>
          <div>lab</div>
    </>
  )
}

export default Lab