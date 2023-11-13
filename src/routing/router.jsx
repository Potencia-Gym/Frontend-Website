import {createBrowserRouter} from "react-router-dom";
import App from '../Landing Page/App'
import Login from '../Auth/login'
import SignUp from '../Auth/signup'
import Dashboard from '../Dashboard/MainDash'

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />
    },
    {
        path:'/signup',
        element: <SignUp />
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