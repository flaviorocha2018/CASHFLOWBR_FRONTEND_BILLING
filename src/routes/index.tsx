import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/context';


export const AppRoutes = () => {
    
  const { toggleDrawerOpen } = useDrawerContext();

  return(
    <Routes>
      <Route path="/home-page" element={<Button variant= 'contained' color='primary' onClick={toggleDrawerOpen}>Toggle Drawer</Button>} />

      <Route path= "*" element={<Navigate to="/home-page" />} />

    </Routes>
  );
};
