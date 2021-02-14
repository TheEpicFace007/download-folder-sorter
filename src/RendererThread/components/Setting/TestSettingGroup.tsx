import { useState } from "react";
import { TextBoxSetting } from "./Components/TextBoxSetting";
import { SettingGroup } from "./Components/SettingGroup";
import SettingGroupBaseProps from "./Components/SettingGroupBaseProps";
import { SettingRadioButtonGroup } from "./Components/SettingRadioButtonGroup"


export default function TestSettingGroup(props: SettingGroupBaseProps)
{
  const [textInput, setTextInput] = useState<string>()
  function onSave()
  {
    console.table({textBoxSetting: textInput})
  }

  return (
    <SettingGroup name={props.name} desc={props.desc} onSave={onSave}>
      <TextBoxSetting onTextEntered={(e) => setTextInput(e)} name="Text box setting component" />
      <SettingRadioButtonGroup radioButtons={[
        {
          desc: "Lorem ipsum",
          isSelected: true  
        }
      ]}/>
    </SettingGroup>
  )
}