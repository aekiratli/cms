import {
    createBrowserRouter,
    Navigate,
    Outlet,
} from "react-router-dom";
import { isExpired, decodeToken } from 'react-jwt';
import App from "./App";
import Login from "./pages/login";

function ProtectedRoute() {
    const storedToken = localStorage.getItem('token');
    if (storedToken === null) {
        return <Navigate to="/admin/login" replace />;
    }
    const decodedToken = decodeToken(storedToken);
    const isTokenExpired = isExpired(storedToken);

    if (decodedToken) {
      if (!('sub' in decodedToken && 'exp' in decodedToken && !isTokenExpired)) {
        <Navigate to="/admin/login" replace />;
      }
    }
    return <Outlet />;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/admin/login",
        element: <Login />,
    },
    {
        path: "/admin",
        element: <ProtectedRoute />,
        children: [
            {
                index: true,
                element: <h1>Home</h1>,
            },
        ]
    },
]);

export default router;