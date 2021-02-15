import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

export interface SettingRadioButtonGroupProps
{
  groupDesc: string;
  radioButtons: { desc: string; isSelected: boolean; }[];
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
            const buttonLabel = nanoid();
            return (
              <div className="radio-button">
                <input type="radio" id={buttonLabel} name={radioGroupName} />
                <label htmlFor={radioGroupName}>{button.desc}</label>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}