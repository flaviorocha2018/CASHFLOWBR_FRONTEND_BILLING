import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppthemeProvider } from "./shared/context/ThemeContext";




export const  App = () => {
  return (
    <AppthemeProvider>
    <BrowserRouter >
      <AppRoutes />
    </BrowserRouter >
    </AppthemeProvider>
  );
}

