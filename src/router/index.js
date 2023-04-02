import withBasicLayout from "../hocs/with-basic-layout/with-basic-layout";
import PlanetConteiner from "../pages/planets/planet-conteiner";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: withBasicLayout(PlanetConteiner)
      },
      {
        path: "planets",
        element: <PlanetConteiner />,
      }
    ]
  },
  {
    path: "/about",
    children: [
      {
        path: "/about",
        element: <div>Information about me on /about/me</div>
      },
      {
        path: "me",
        element: <div>Denis</div>
      }
    ]
  },
];

export default router;
