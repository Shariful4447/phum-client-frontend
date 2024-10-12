import { Layout } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const Sidebar = () => {
  return (
    <div>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div
          style={{
            color: "white",
            textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>PH UNI</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItemsGenerator(adminPaths, "admin")}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
