import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppthemeProvider } from './shared/context/ThemeContext';
import { LateralMenu } from './shared/components';




export const  App = () => {
  return (
    <AppthemeProvider>
      <BrowserRouter >

        <LateralMenu>
          <AppRoutes />
        </LateralMenu>
        
      </BrowserRouter >
    </AppthemeProvider>
  );
};

