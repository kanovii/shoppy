import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';

const Container = styled.div`
    max-width: 700px;
    margin: 0 auto;
`;

function App() {
    return (
        <Container>
            <Nav />
            <Outlet />
        </Container>
    );
}

export default App;
