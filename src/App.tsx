import { useState } from "react";
import { accessToLocalStorage } from "./helpers/accessToLocalStorage";
import { ThemeContext, ThemeProvider } from "styled-components";
import MainPage from "./page/MainPage";
import { lightTheme, localStorageGetAction, localStorageThemeKey } from "./helpers/constants";
import { themeDark, themeLight } from "./theme/theme";

const App = () => {
    const theme = accessToLocalStorage({ key: localStorageThemeKey, action: localStorageGetAction }) || lightTheme;
    const [themeState, setThemeState] = useState(theme);
    const themeContext = themeState === lightTheme ? themeLight : themeDark;
    return (
        <ThemeContext.Provider value={{ themeState, setThemeState }}>
            <ThemeProvider theme={themeContext}>
                <MainPage />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;