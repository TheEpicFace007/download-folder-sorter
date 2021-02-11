import React, { FunctionComponent, useState } from "react";
import _ from "lodash";
import "./index.scss";
import Logo from "./assets/download-icon.png";
import { Menu, MenuProps } from "./components/Menu";
import { Modal, Button, Accordion } from "react-bootstrap";
import { SettingGroup } from "./components/setting/SettingGroup"

function App(props: {})
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
        <Modal.Header>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Accordion>

            <SettingGroup name="My setting group"></SettingGroup>
          </Accordion>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleSettingClose}>Close</Button>
          <Button variant="primary">Save setting</Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default App;