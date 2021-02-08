import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";
import styled from "@emotion/styled";
import { Row } from "components/lib";

const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h3>Logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>登出</button>
        </HeaderRight>
      </Header>
      {/* <Nav>Nav</Nav> */}
      <Main>
        <ProjectListScreen />
      </Main>
      {/* <Aside>Aside</Aside> */}
      {/* <Footer>Footer</Footer> */}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 20rem 1fr 20rem;
  grid-template-areas: "header header header" "main main main";
  height: 100vh;
  grid-gap: 5rem;
`;

const Header = styled(Row)`
  background-color: lightblue;
  grid-area: header;
`;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;

const Main = styled.main`
  background-color: lightblue;
  grid-area: main;
`;

export default AuthenticatedApp;
