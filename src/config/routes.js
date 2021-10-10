import { lazy } from "react";

export const routes = {
  homePage: {
    path: "/",
    component: lazy(() => import("pages/Home")),
    authRoute: false,
    secure: false,
  },
};

export const renderRoutes = Object.entries(routes);
