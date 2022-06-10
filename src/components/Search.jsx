import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// This function makes the search bar work on every page
function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        
        navigate("/searched/" + input)
    };

  return (
      // classname="card" makes zoom effect on card. It's css is in index.css
    <FormStyle className="card" onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input 
            onChange={(e) => setInput(e.target.value)}
            type="text" 
            value={input} 
            />
        </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    position: relative;
        div{
            width: 100%;
            position: relative;
        }
    input{
        width: 100%;
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }

    `;

export default Search