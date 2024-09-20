import CreateStudent from "../pages/admin/createStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import AdminDashBoard from "../pages/admin/AdminDashBoard";

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashBoard></AdminDashBoard>,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <AdminDashBoard></AdminDashBoard>,
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: <AdminDashBoard></AdminDashBoard>,
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: <AdminDashBoard></AdminDashBoard>,
      },
    ],
  },
];

export const adminPaths = [
  {
    path: "dashboard",
    element: <AdminDashBoard></AdminDashBoard>,
  },
  {
    path: "create-student",
    element: <CreateStudent></CreateStudent>,
  },
  {
    path: "create-admin",
    element: <CreateAdmin></CreateAdmin>,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty></CreateFaculty>,
  },
];
