import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const TabDemo = () => {
  return (
    <>
      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Profile
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Contact
      </Tab>
    </Tabs>
    </>
  );
};

export default TabDemo;
