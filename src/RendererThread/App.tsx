import React, { useState } from "react";
import _ from "lodash";
import "./index.scss";
import { Menu } from "./components/Menu";
import { Modal, Button, Accordion } from "react-bootstrap";

function App()
{
  const [isSettingOpen, setOpenSetting] = useState(false);
  const [activeKey, setActiveKey] = useState("1");

  const openSetting = () =>
  {
    setOpenSetting(true);
    setActiveKey("2");
  };

  const handleSettingClose = () =>
  {
    setOpenSetting(false);
    setActiveKey("1");
  };

  return (
    <>
      <Menu activeKey={activeKey} setActiveKey={setActiveKey} onEditSettingPressed={openSetting} />

      <Modal
        show={isSettingOpen}
        backdrop="static"
        scrollable={true}
        keyboard={false}
        onHide={handleSettingClose}
        size="lg"
      >
        <Modal.Header closeButton={true}>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Accordion>           
            <TestSettingGroup name="Lorem ipsum" desc="Curabitur ac eros sollicitudin, convallis sapien id, rhoncus urna."/>
          </Accordion>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="dark" onClick={handleSettingClose}>Close</Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default App;