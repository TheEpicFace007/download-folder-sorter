import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

export type RadioButtonGroup = {
  desc: string;
  isSelected: boolean;
};

export interface SettingRadioButtonGroupProps
{
  groupDesc: string;
  radioButtons: RadioButtonGroup[];
  onRadioSelected: (selectedItem: string) => void;
};

export function SettingRadioButtonGroup(props: SettingRadioButtonGroupProps)
{
  const radioGroupName = nanoid();
  return (
    <div className="radio-group">
      <p className="radio-label">{props.groupDesc}</p>
      <div className="group">
        {
          props.radioButtons.map((button) =>
          {
            if (button.isSelected)
              props.onRadioSelected(button.desc);

            const buttonLabel = nanoid();
            return (
              <div className="radio-button">
                <input type="radio" id={buttonLabel} name={radioGroupName} onClick={() => { () => props.onRadioSelected(button.desc) }} />
                <label htmlFor={radioGroupName}>{button.desc}</label>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}