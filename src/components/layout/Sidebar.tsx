import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";

const { Sider } = Layout;

const role = {
  ADMIN: "admin ",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const role = "admin";
  let sidebarItems;
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItemsGenerator(adminPaths, "admin")}
      />
    </Sider>
  );
};

export default Sidebar;
