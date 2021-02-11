import { setWith } from "lodash";
import React from "react";

export default interface SettingBaseComponentProps <T>
{
  /** The name of the setting */
  name: string;
  /** The description of the setting */
  desc: string | undefined;

  /** `useState` */
  setSettingState: (setting: T) => void;
  settingState: T;
  
  defaultValue: T;
  
}