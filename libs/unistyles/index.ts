import { UnistylesRegistry } from "react-native-unistyles"; 
import { dark, light } from "./theme";
import { breakpoints } from "./tokens/breakpoint";
type AppBreakpoints = typeof breakpoints
// if you defined themes
type AppThemes = {
  light: typeof light,
  dark: typeof dark
}

// override library types
declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry
    .addConfig({
      initialTheme: "light",
      adaptiveThemes: false
    }).addBreakpoints(breakpoints).addThemes({ light: light, dark: dark, })
