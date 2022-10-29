import React, { useCallback, useEffect, useState } from 'react';
import { SettingContext } from './contexts/SettingContext';
import './App.css';
import { ValueType } from './constants/DataTypes';
import SongsList from './components/SongsList';
import Player from './components/Player';

function App() {
  const [values, setValues] = useState<ValueType>({
    volume: 0,
    currentSong: '',
    analyticsOn: false,
    isPlaying: false,
  });

  const storeValuesToLocalStorage = useCallback((curr_val: ValueType) => {
    localStorage.setItem('@config', JSON.stringify(curr_val));
    return curr_val;
  }, []);

  const storeAllValues = useCallback((val: ValueType) => {
    setValues(val);
    storeValuesToLocalStorage(val);
  }, [storeValuesToLocalStorage]);

  useEffect(() => {
    const configValue = localStorage.getItem('@config');
    if (configValue) {
      storeAllValues(JSON.parse(configValue));
    }
  }, [storeAllValues]);
  
  return (
    <SettingContext.Provider value={[values, storeAllValues]}>
      <div className="App">
        <SongsList />
        <Player />
      </div>
    </SettingContext.Provider>
  );
}

export default App;
