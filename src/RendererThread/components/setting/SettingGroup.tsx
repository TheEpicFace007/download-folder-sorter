import React from "react";
import { Accordion, Card, Nav, NavDropdown, Button } from "react-bootstrap";
import SettingBaseComponentProp from "./SettingBaseComponentProps";
import { nanoid } from "nanoid";

export interface SettingGroupProps
{
  name: string;
  children?: SettingBaseComponentProp<unknown>[];
};

export function SettingGroup(props: SettingGroupProps)
{
  const settingGroupEventKey = nanoid(4);

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} eventKey={settingGroupEventKey} variant="link">
          {props.name}
        </Accordion.Toggle>
      </Card.Header>
      
      <Accordion.Collapse eventKey={settingGroupEventKey}>
        <Card.Body></Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}