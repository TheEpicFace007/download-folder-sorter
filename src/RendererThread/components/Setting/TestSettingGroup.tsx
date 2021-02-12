import { useState } from "react";
import { TextBoxSetting } from "./Components/TextBoxSetting";
import { SettingGroup } from "./Components/SettingGroup";
import SettingGroupBaseProps from "./Components/SettingGroupBaseProps";


export default function TestSettingGroup(props: SettingGroupBaseProps)
{
  function onSave()
  {

  }

  return (
    <SettingGroup name={props.name} desc={props.desc} onSave={onSave}>
      
    </SettingGroup>
  )
}