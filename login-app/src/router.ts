import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import App from "./App";
import { MainPage } from "./MainPage";
import { LoginPage } from "./LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: MainPage,
                async loader() {
                    const res = await axios.get("http://localhost:3000/profile");

                    return res.data as { username: string, role: string };
                }
            },
            {
                path: "/login",
                Component: LoginPage
            }
        ]
    }
]);