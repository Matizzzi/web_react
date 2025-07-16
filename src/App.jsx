import React from 'react';
import { GlobalStyles, MyRoutes, Sidebar } from './index';
import styled, { ThemeProvider } from 'styled-components';
import { Device } from './styles/breakpoints';
import { useThemeStore } from './store/ThemeStore';

/* ----------  Styled Components ---------- */
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr; /* Solo una columna por defecto (mobile) */
  background-color: #000;
  min-height: 100vh;

  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr; /* Sidebar + contenido (desktop) */
  }
`;

const SidebarSection = styled.section`
  display: none;
  background-color: rgba(78, 45, 78, 0.5);

  @media ${Device.tablet} {
    display: block;
  }
`;

const MenuHamburguesa = styled.section`
  background-color: rgba(78, 45, 78, 0.5);
  display: block;
  position: absolute;

  @media ${Device.tablet} {
    display: none;
  }
`;

const RouterSection = styled.section`
  background-color: rgba(78, 45, 78, 0.5);
  width: 100%;
`;

/* ----------  Componente principal ---------- */
function App() {

  const { themeStyle, SidebarOpen, setSidebarOpen } = useThemeStore();


  return (
    <ThemeProvider theme={themeStyle}>
      <>
        <GlobalStyles />
        <Container>
          <SidebarSection>
      <Sidebar
  state={SidebarOpen}
  setState={() => setSidebarOpen(!SidebarOpen)}
/>

          </SidebarSection>

          <MenuHamburguesa>
            menú (hamburguesa)
          </MenuHamburguesa>

          <RouterSection>
            <MyRoutes />
          </RouterSection>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
