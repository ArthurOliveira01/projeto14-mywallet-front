import styled from "styled-components";
import { Link } from "react-router-dom";
import Context from "../context/context";
import { useContext } from "react";
import MyWalletLogo from "../components/MyWalletLogo";
import { useState } from "react";
import { backURL } from "../backURL";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignInPage({token, setToken}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const context = useContext(Context);


  function login(event){
    event.preventDefault();
    axios.post(`${backURL}/`, {email, password})
    .then(res => {
    setToken(res.data);
    navigate('/home');

    })
    .catch(error => alert('dados errados'))
  }


  return (
    <SingInContainer>
      <form onSubmit={login}>
        <MyWalletLogo />
        <input placeholder="E-mail" type="email" value={email} onChange={event => setEmail(event.target.value)} />
        <input placeholder="Senha" type="password" autocomplete="new-password" value={password} onChange={event => setPassword(event.target.value)} />
        <button>Entrar</button>
      </form>

      <Link to={"/cadastro"}> 
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
