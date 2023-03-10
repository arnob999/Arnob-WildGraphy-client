import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import CardDetails from "../../Pages/Components/CardDetails/CardDetails";
import DetailReview from "../../Pages/DetailReview/DetailReview";
import Home from "../../Pages/Home/Home/Home";
import MyClick from "../../Pages/MyClick/MyClick";
import NotFound from "../../Pages/NotFound/NotFound";
import JoinUs from "../../Pages/Shared/JoinUs/JoinUs";
import Login from "../../Pages/Shared/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '/joinUs',
                element: <JoinUs></JoinUs>
            },
            {
                path: '/myCLick',
                element: <MyClick></MyClick>,
                loader: () => fetch('https://arnob-wild-graphy-server.vercel.app/photos')
            },
            {
                path: '/details/:id',
                element: <DetailReview></DetailReview>,
                loader: ({ params }) => fetch(`https://arnob-wild-graphy-server.vercel.app/photos/${params.id}`)
            }
        ]
    }
])

export default router
/*
{
    path: '',
        element:
}
*/