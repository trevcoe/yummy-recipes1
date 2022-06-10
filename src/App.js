import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom'
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from 'react-router-dom';
// import { BiFoodMenu } from 'react-icons/bi';
// module that gave error
import './index.css';

function App() {
  return (
    // className="card" makes the image zoom in on hover. It's located in index.css
    <div className="App">
    <BrowserRouter>
    <Nav>
      {/* <BiFoodMenu /> */}
      <Logo className="card" to={'/'}> Yummy</Logo>
    </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  font-size: 3rem;
  font-weight: 400;
  font-family: 'Lobster Two';
  color: black;
`
const Nav = styled.div`
  padding: 4rem 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 3rem;
  }
`

export default App;
