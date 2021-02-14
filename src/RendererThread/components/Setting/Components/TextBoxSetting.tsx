import SettingBaseComponentProps from "./SettingGroupBaseProps";
import React, { useState, useEffect } from "react";
import { Button, FormText, FormLabel, Form } from "react-bootstrap";
import { nanoid } from "nanoid";
import "./SettingComponent.scss"


export type TextBoxSettingReducerOptions = string;

export interface SettingTextBoxProps extends SettingBaseComponentProps
{
  onTextEntered: (text: string) => void;
}

export function TextBoxSetting(props: SettingTextBoxProps)
{
  const [textSetted, setText] = useState<string>();
  let textEntered = "";
  const onTextChange = (change: string) =>
  {
    setText(change);
  };
  const textFormID = nanoid();

  const divStyle: React.CSSProperties = {
    display: "inline-block",
  };

  return (
    <div className="setting-component setting-textbox">
      <Form.Label htmlFor={`inline-${textFormID}`}>{props.name}</Form.Label>
      <Form.Control type="text" id={`inline-${textFormID}`} onKeyDown={(e: React.KeyboardEvent) =>
      {
        //@ts-ignore
        props.onTextEntered(e.target.value)
      }}
        size="sm" about={props.desc}/>
    </div>
  );
}

function remove_last_character(element: string): string
{
  return element.slice(0, element.length - 1);
}