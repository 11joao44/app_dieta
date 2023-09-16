import styled from "styled-components";

import Proteina from "../proteina";

const Home = () => {
  return (
    <Main className="container">
      <Proteina />
    </Main>
  );
};

export default Home;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
