import React, { FunctionComponent, useState } from "react";
import _ from "lodash";
import "./index.scss";
import Logo from "./assets/download-icon.png";
import { Menu, MenuProps } from "./components/Menu";

function App(props: {})
{
  const [isSettingOpened, setOpenedSetting] = useState(false);
  const [activeKey, setActiveKey] = useState("1");

  const openSetting = () =>
  {
    setOpenedSetting(true);
    setActiveKey("2");
  };

  return (
    <>
      <Menu activeKey={activeKey} setActiveKey={setActiveKey} onEditSettingPressed={openSetting} />
      
    </>
  );
}

export default App;