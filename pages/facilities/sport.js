import Breadcrumb from "react-bootstrap/Breadcrumb";

export const getStaticProps = () => {
    return{
        props : {footerstatus : true}
    }
}

const Sport = (props) => {
  return (
    <>
       <Breadcrumb className="mt-4">
            <Breadcrumb.Item href="/facilities">
              Facilities
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              sport
            </Breadcrumb.Item>
          </Breadcrumb>
          <div>Sport</div>
    </>
  )
}

export default Sport