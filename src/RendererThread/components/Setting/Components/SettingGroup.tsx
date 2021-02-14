import React, { useEffect } from "react";
import { Accordion, Card, Nav, NavDropdown, Button } from "react-bootstrap";
import SettingBaseComponentProp from "./SettingGroupBaseProps";
import { nanoid } from "nanoid";
import faker from "faker";
import _ from "lodash";


export interface SettingGroupProps
{
  name: string;
  desc?: string;
  children: JSX.Element[] | JSX.Element;
  onSave: () => void;
};

export function SettingGroup(props: SettingGroupProps)
{
  
  let description: JSX.Element | undefined;
  if (props.desc) {
    description = <Card.Footer id={nanoid()}>{props.desc}</Card.Footer>;
  }

  const settingGroupEventKey = props.name

  return (
    <div className="setting-group">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} eventKey={settingGroupEventKey} variant="link">
            {props.name}
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey={settingGroupEventKey} appear>
          <Card.Body>
            {props.children}
            <div className="setting-group-linebreak" />
            <Button variant="primary" size="sm" style={{marginTop: "15px"}} onClick={props.onSave}>Save settings</Button>
          </Card.Body>
        </Accordion.Collapse>
        {description ?? ""}
      </Card>
    </div>
  );
}
