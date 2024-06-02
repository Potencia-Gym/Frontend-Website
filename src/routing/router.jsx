import { createBrowserRouter } from "react-router-dom";
import App from '../Landing Page/App'
import Dashboard from '../Dashboard/MainDash'
import { Login, Signup } from "../Auth";
import WorkoutPlan from "../Dashboard/Pages/WorkoutPlan";
import DailyGoal from "../Dashboard/Pages/DailyGoal";
import DietPlanner from "../Dashboard/Pages/DietPlanner";
import LiveStream from "../Dashboard/Pages/LiveStream";
import Profile from "../Dashboard/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'workout-plan',
                element: <WorkoutPlan />
            },
            {
                path: 'daily-goal',
                element: <DailyGoal />,
            },
            {
                path: 'profile',
                element: <Profile />,
            }
        ]
    },
    {
        path: '/stream',
        element: <LiveStream />,
    }
]);

export default router;