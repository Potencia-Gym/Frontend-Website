import {createBrowserRouter} from "react-router-dom";
import App from '../Landing Page/App'
import Dashboard from '../Dashboard/MainDash'
import { Login, Signup } from "../Auth";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />
    },
    {
        path:'/signup',
        element: <Signup />
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/dashboard',
        element: <Dashboard />,
        children:[]
    }
]);

export default router;