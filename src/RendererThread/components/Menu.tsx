import React, { FunctionComponent, useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";
// import Electron from "electron";
import Switch from "react-bootstrap/esm/Switch";
import { FormCheckInputProps } from "react-bootstrap/esm/FormCheckInput";

export interface MenuProps
{
  onEditSettingPressed: () => void;
  setActiveKey: (activeKey: string) => void;
  readonly activeKey: string;
}

export function Menu(props: MenuProps)
{
  const [isChecked, setChecked] = useState<boolean>();

  async function openDownloadFolder()
  {
    const Electron = await import("electron");
    let downloadFolderLocation = "";
    if (process.platform == "win32")
      downloadFolderLocation = (process?.env?.USERPROFILE || "") + "\\";
    else downloadFolderLocation = (process?.env?.HOME || "") + "/";

    downloadFolderLocation += "Downloads";

    await Electron.shell.openPath(downloadFolderLocation);
  }

  return (
    <Nav
      variant="pills"
      activeKey={props.activeKey}
      onSelect={props.setActiveKey}
      className="menu"
      fill={true}
      justify={true}
      id="app-menu"
    >
      <Nav.Item>
        <Nav.Link eventKey="1">
          Main menu
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" onSelect={props.onEditSettingPressed}>
          Edit settings
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Button onClick={openDownloadFolder}>Open download folder</Button>
      </Nav.Item>

      <Nav.Item>
        <Form>
          <Form.Check
            type="switch"
            label="Enable flitering"
            id="enable-dl-folder"
            //@ts-ignore
            onClick={async (event: React.MouseEvent<HTMLInputElement>) =>
            {
              const Electron = await import("electron");
              Electron.ipcRenderer.send(
                "file-sorter",
                "toggle-dl-folder",
                //@ts-ignore
                event.target.checked
              );
            }
            }
          />
        </Form>
      </Nav.Item>
    </Nav>);
}