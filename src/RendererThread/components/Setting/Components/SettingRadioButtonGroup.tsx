import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

export interface SettingRadioButtonGroupProps
{
  radioButtons: { desc: string; isSelected: boolean; }[];
};

export function SettingRadioButtonGroup(props: SettingRadioButtonGroupProps)
{
  return (
    <div className="radio-button-group">
      <InputGroup size="sm">
        <InputGroup.Prepend>
          {props.radioButtons.map((button) =>
          {
            const button_id = nanoid();

            return (
              <div className="setting-radio">
                <InputGroup.Radio id={button_id} />
                <p>{button.desc}</p>
              </div>
            );
          })}
        </InputGroup.Prepend>
      </InputGroup>
    </div>
  );
}