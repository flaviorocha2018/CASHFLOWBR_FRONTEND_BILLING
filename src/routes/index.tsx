import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppThemeContext } from '../shared/context';


export const AppRoutes = () => {
    
  const {toggleTheme} = useAppThemeContext();

  return(
    <Routes>
      <Route path="/home-page" element={<Button variant= 'contained' color='primary' onClick={toggleTheme}>Toggle Theme</Button>} />

      <Route path= "*" element={<Navigate to="/home-page" />} />

    </Routes>
  );
};
