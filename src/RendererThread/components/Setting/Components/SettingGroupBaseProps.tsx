import { setWith } from "lodash";
import React from "react";

export default interface SettingGroupBaseProps
{
  /** The name of the setting */
  name: string;
  /** The description of the setting */
  desc?: string;
  children: React.ReactChildren
}