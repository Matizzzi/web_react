import { GlobalStyles } from './index';
import styled from 'styled-components';

/* ----------  Styled Components ---------- */
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #000;
  min-height: 100vh;
`;

/* ----------  Componente principal -------- */
function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        {/* acá va tu contenido */}
      </Container>
    </>
  );
}

export default App;
