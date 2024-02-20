import { createBrowserRouter } from "react-router-dom";
import App from '../Landing Page/App'
import Dashboard from '../Dashboard/MainDash'
import { Login, Signup } from "../Auth";
import WorkoutPlan from "../Dashboard/Pages/WorkoutPlan";
import DailyGoal from "../Dashboard/Pages/DailyGoal";
import TrackProgress from "../Dashboard/Pages/TrackProgress";
import DietPlanner from "../Dashboard/Pages/DietPlanner";
import ExercisePlanner from "../Dashboard/Pages/ExercisePlanner";
import LiveStream from "../Dashboard/Pages/LiveStream";

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
                path: 'track-progress',
                element: <TrackProgress />
            },
            {
                path: 'diet-planner',
                element: <DietPlanner />
            },
            {
                path: 'exercise-planner',
                element: <ExercisePlanner />
            },
        ]
    },
    {
        path: '/stream',
        element: <LiveStream />,
    }
]);

export default router;