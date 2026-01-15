import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/utils/i18n.js";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./App.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import MainLayout from "./layouts/MainLayout";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProcessesPage from "./pages/ProcessesPage.jsx";
import ServicesElement from "./components/ServiceInformation.jsx";
import ProjectReview from "./components/ProjectReview.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/projects",
        children: [
          { index: true, element: <ProjectsPage /> },
          { path: ":projectId", element: <ProjectReview /> },
        ],
      },
      {
        path: "/services/",
        element: <ServicesPage />,
        children: [
          { index: true, element: <Navigate to="/services/0" replace /> },
          {
            path: ":serviceId",
            element: <ServicesElement />,
          },
        ],
      },
      { path: "/processes", element: <ProcessesPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <SpeedInsights />
  </StrictMode>
);
