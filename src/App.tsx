import React, { createContext, useCallback, useEffect, useState } from 'react';
import { SettingContext } from './contexts/SettingContext';
import logo from './logo.svg';
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

  const storeValuesToLocalStorage = useCallback(() => {
    localStorage.setItem('@config', JSON.stringify(values));
    return values;
  }, [values]);

  useEffect(() => {
    const configValue = localStorage.getItem('@config');
    if (configValue) {
      setValues(JSON.parse(configValue));
    }

    return () => {
      storeValuesToLocalStorage()
    };
  }, []);
  
  return (
    <SettingContext.Provider value={[values, setValues]}>
      <div className="App">
        <SongsList />
        <Player />
      </div>
    </SettingContext.Provider>
  );
}

export default App;
