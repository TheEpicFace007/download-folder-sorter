import React, { useEffect } from "react";
import { Accordion, Card, Nav, NavDropdown, Button } from "react-bootstrap";
import SettingBaseComponentProp from "./SettingGroupBaseProps";
import { nanoid } from "nanoid";
import LineBreak from "jsx-linebreak";


export interface SettingGroupProps
{
  name: string;
  desc?: string;
  children: JSX.Element[];
  onSave: () => void;
};

export function SettingGroup(props: SettingGroupProps)
{
  const settingGroupEventKey = nanoid(4);
  let description: JSX.Element | undefined;
  if (props.desc) {
    description = <Card.Footer id={settingGroupEventKey}>{props.desc}</Card.Footer>;
  }

  return (
    <div className="setting-group">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} eventKey={settingGroupEventKey} variant="link">
            {props.name}
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey={settingGroupEventKey}>
          <Card.Body>
            {props.children}
            <div className="setting-group-linebreak" />
            <Button variant="primary" size="sm">Save settings</Button>
          </Card.Body>
        </Accordion.Collapse>
        {description ?? ""}
      </Card>
    </div>
  );
}
