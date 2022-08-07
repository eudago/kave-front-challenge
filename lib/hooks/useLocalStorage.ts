import { useState } from "react";

export const useLocalStorage = <T>(keyName: string, defaultValue: T) => {
  
  const getValue = () => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } 
      else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  }
  
  const [storedValue, setStoredValue] = useState(() => {
    return getValue();
  });

  const setValue = (newValue: T) => {
    setStoredValue(newValue);
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
  };

  return [storedValue, setValue, getValue];
};