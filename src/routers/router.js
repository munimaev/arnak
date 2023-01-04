import {
  createBrowserRouter,
} from "react-router-dom";
import Category from "../components/Category";
import Home from '../components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/book",
    element: <Category type="book" />,
  },
  {
    path: "/mag",
    element: <Category type="mag" />,
  },
  {
    path: "/tablets",
    element: <Category type="tablets" />,
  },
  {
    path: "/idol",
    element: <Category type="idol" />,
  },
  {
    path: "/guardian",
    element: <Category type="guardian" />,
  },
  {
    path: "/item",
    element: <Category type="item" />,
  },
  {
    path: "/artifact",
    element: <Category type="artifact" />,
  },
  {
    path: "/fear",
    element: <Category type="fear" />,
  },
  {
    path: "/trophy",
    element: <Category type="trophy" />,
  },
]);

export default router;