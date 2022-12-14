import Breadcrumb from "react-bootstrap/Breadcrumb";

export const getStaticProps = () => {
    return{
        props : {footerstatus : true}
    }
}

const Library = (props) => {
  return (
    <>
       <Breadcrumb className="mt-4">
            <Breadcrumb.Item href="/facilities">
              Facilities
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              library
            </Breadcrumb.Item>
          </Breadcrumb>
          <div>Library</div>
    </>
  )
}

export default Library