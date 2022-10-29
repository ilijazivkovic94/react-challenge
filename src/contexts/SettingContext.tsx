import React, { useContext } from "react";
import { ValueType } from '../constants/DataTypes';
export const SettingContext = React.createContext<[ValueType, any]>([
  {
    volume: 0,
    currentSong: "",
    analyticsOn: false,
    isPlaying: false,
  },
  null
]);

export const useSettingContext = () => {
    const settings = useContext(SettingContext);
    if (!settings[1]) {
        throw new Error('useSettingContext can\'t be used outside a SettingContext.')
    }
    return settings;
}
