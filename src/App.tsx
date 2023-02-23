import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppthemeProvider } from './shared/context/ThemeContext';
import { DrawerProvider } from './shared/context';
import { LateralMenu } from './shared/components';




export const  App = () => {
  return (
    <AppthemeProvider>
      <DrawerProvider>
        <BrowserRouter >

          <LateralMenu>
            <AppRoutes />
          </LateralMenu>
        
        </BrowserRouter >
      </DrawerProvider>
    </AppthemeProvider>
  );
};

