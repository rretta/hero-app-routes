
import {createBrowserRouter } from "react-router-dom"
import { HeroesApp } from "./HeroesApp";

import { AppRouter } from "./router/AppRouter";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <HeroesApp/>,
    },
  ]);


  