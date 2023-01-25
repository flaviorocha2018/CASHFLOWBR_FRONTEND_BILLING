import { Routes, Route, Navigate } from 'react-router-dom';


export const AppRoutes = () => {

    return(
        <Routes>
            <Route path="/home-page" element={<h2>Home Page</h2>} />

            <Route path= "*" element={<Navigate to="/home-page" />} />

        </Routes>
    )
}
