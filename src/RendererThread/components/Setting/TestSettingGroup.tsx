import { useState } from "react";
import { TextBoxSetting } from "./Components/TextBoxSetting";
import { SettingGroup } from "./Components/SettingGroup";
import SettingGroupBaseProps from "./Components/SettingGroupBaseProps";
import { SettingRadioButtonGroup } from "./Components/SettingRadioButtonGroup";


export default function TestSettingGroup(props: SettingGroupBaseProps)
{
  const [textInput, setTextInput] = useState<string>();
  function onSave()
  {
    const settings = {
      textBoxSetting: textInput,
    };

    console.table(settings);
  }

  return (
    <SettingGroup name={props.name} desc={props.desc} onSave={onSave}>
      <TextBoxSetting onTextEntered={(e) => setTextInput(e)} name="Text box setting component" />
      <SettingRadioButtonGroup groupDesc={"Radio button group"} radioButtons={[
        {
          desc: "Lorem ipsum",
          isSelected: false
        },
        {
          desc: "Sit amet",
          isSelected: false
        }
      ]} />
    </SettingGroup>
  );
}