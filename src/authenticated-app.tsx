import { FC } from "react";
import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";
import styled from "@emotion/styled";
import { Row } from "components/lib";
import { User } from "screens/project-list";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Dropdown, Menu, Button } from "antd";
import { ProjectScreen } from "screens/project";
import { resetRoute } from "utils";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const AuthenticatedApp: FC<{ user: User }> = () => {
  return (
    <Container>
      <PageHeader />
      {/* <Nav>Nav</Nav> */}
      <Main>
        <Router>
          <Routes>
            <Route path="projects" element={<ProjectListScreen />} />
            <Route path="projects/:projectId/*" element={<ProjectScreen />} />
            <Navigate to="projects" />
          </Routes>
        </Router>
      </Main>
      {/* <Aside>Aside</Aside> */}
      {/* <Footer>Footer</Footer> */}
    </Container>
  );
};

const PageHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <Button type="link" onClick={resetRoute}>
          <SoftwareLogo width="18rem" color="rgb(38, 132, 255)" />
        </Button>
        <h3>项目</h3>
        <h3>用户</h3>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="logout">
                <Button type="link" onClick={logout}>
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type="link" onClick={(e) => e.preventDefault()}>
            Hi, {user?.name}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: "header header header" "main main main";
  height: 100vh;
  grid-gap: 5rem;
`;

const Header = styled(Row)`
  grid-area: header;
  padding: 3rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;

const Main = styled.main`
  background-color: lightblue;
  grid-area: main;
`;

export default AuthenticatedApp;
