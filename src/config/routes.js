import { lazy } from "react";

export const routes = {
  loginPage: {
    path: "/login",
    component: lazy(() => import("pages/Auth/Login")),
    authRoute: true,
    pageTitle: "Login user",
  },
  homePage: {
    path: "/",
    component: lazy(() => import("pages/Home")),
    pageTitle: "Home - Categories",
  },
  productsPage: {
    path: "/category-products/:slug",
    getPath: (slug) => `/category-products/${slug}`,
    component: lazy(() => import("pages/Products")),
    pageTitle: "Category - Products",
  },
  cartPage: {
    path: "/checkout/cart",
    component: lazy(() => import("pages/Cart")),
    pageTitle: "Checkout - cart",
  },
  checkoutPage: {
    path: "/checkout/payment",
    component: lazy(() => import("pages/Checkout")),
    secure: true,
    pageTitle: "Checkout - payment",
  },
  ordersPage: {
    path: "/order-history",
    component: lazy(() => import("pages/Orders")),
    secure: true,
    pageTitle: "Checkout - payment",
  },
};

export const renderRoutes = Object.entries(routes);
