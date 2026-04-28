import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import type { CategoryId } from "./data/categories";
import BrowseRoles from "./pages/BrowseRoles";
import Companies from "./pages/Companies";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import RoleDetail from "./pages/RoleDetail";

// Root route
const rootRoute = createRootRoute({
  component: Outlet,
});

// Routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const rolesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/roles",
  component: BrowseRoles,
  validateSearch: (search: Record<string, unknown>) => ({
    category: search.category as CategoryId | undefined,
  }),
});

const roleDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/roles/$roleId",
  component: RoleDetail,
});

const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quiz",
  component: Quiz,
});

const companiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/companies",
  component: Companies,
});

// Router
const routeTree = rootRoute.addChildren([
  indexRoute,
  rolesRoute,
  roleDetailRoute,
  quizRoute,
  companiesRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
