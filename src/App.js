import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom'
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { MdFastfood } from 'react-icons/md';
import './index.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav>
    <a href='/'>
    <MdFastfood id="yummyLogo"/>
     </a>
      <Logo to={'/'}> Yummy</Logo>
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
  font-size: 3rem;
  font-weight: 400;
  font-family: 'Lobster Two';
  background: -webkit-linear-gradient(#f27121,#e94057);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`
const Nav = styled.div`
  padding: 3rem 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 3rem;
  }
`

export default App;
