import React from 'react'
let change = {
    status:false,
}
export const ThemeContext = React.createContext({
    change,
    toggleTheme: () => {},
  });