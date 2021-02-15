import { useState } from "react";
import { TextBoxSetting } from "./Components/TextBoxSetting";
import { SettingGroup } from "./Components/SettingGroup";
import SettingGroupBaseProps from "./Components/SettingGroupBaseProps";
import { RadioButtonGroup, SettingRadioButtonGroup } from "./Components/SettingRadioButtonGroup";
import faker from  "faker/locale/fr_CA";

export default function TestSettingGroup(props: SettingGroupBaseProps)
{
  const [textInput, setTextInput] = useState<string>();

  const radioButton: RadioButtonGroup[] = [];
  for (let i = 0; i <= 8; i++) {
    radioButton.push({
      desc: faker.lorem.word(),
      isSelected: false
    })
  }

  const [buttonSelected, setButtonSelected] = useState<string>();
  import("lodash")
    .then((_) =>
    {
      const selected = _.find(radioButton, (value) => value.isSelected);
      if (selected)
        setButtonSelected(selected.desc);
    })
    .catch();



  function onSave()
  {

    const settings = {
      textBoxSetting: textInput,
      radioButtonSelected: buttonSelected
    };

    console.table(settings);
  }


  return (
    <SettingGroup name={props.name} desc={props.desc} onSave={onSave}>
      <TextBoxSetting onTextEntered={(e) => setTextInput(e)} name="Text box setting component" />
      <SettingRadioButtonGroup groupDesc={"Radio button group"} radioButtons={radioButton} onRadioSelected={setButtonSelected} />
    </SettingGroup>
  );
}