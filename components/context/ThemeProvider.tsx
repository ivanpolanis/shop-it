import {useState, createContext} from 'react'
import { Mode } from '../../types'

export const ThemeContext = createContext({})

export const ThemeProvider = (props:React.PropsWithChildren) => {
  const [mode, setMode] = useState<Mode>('light')
  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider value={{mode,toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
