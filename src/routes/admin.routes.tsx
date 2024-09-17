import CreateStudent from "../pages/admin/createStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import AdminDashBoard from "../pages/admin/AdminDashBoard";
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
