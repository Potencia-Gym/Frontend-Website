import {createBrowserRouter} from "react-router-dom";
import App from '../Landing Page/App'
import Dashboard from '../Dashboard/MainDash'
import { Login, Signup } from "../Auth";
import TrackProgress from "../Dashboard/Pages/TrackProgress";
import DietPlanner from "../Dashboard/Pages/DietPlanner";
import ExercisePlanner from "../Dashboard/Pages/ExercisePlanner";

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
        children:[
            {
                path:'track-progress',
                element: <TrackProgress/>
            },
            {
                path:'diet-planner',
                element: <DietPlanner/>
            },
            {
                path:'exercise-planner',
                element: <ExercisePlanner/>
            },
        ]
    }
]);

export default router;