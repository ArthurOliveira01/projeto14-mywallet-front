import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyWalletLogo from "../components/MyWalletLogo";
import { useState } from "react";
import axios from "axios";
import { backURL } from "../backURL";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondpass, setSecondPass] = useState('');

  function signUp(event){
    event.preventDefault();
    if(password === secondpass){
      axios.post(`${backURL}/cadastro`, {name: name, email: email, password: password}).then(() => navigate("/"))
      .catch(error => alert(error.response.data))
    } else{
      return alert('As senhas não são iguais')
    }
  }

  return (
    <SingUpContainer>
      <form onSubmit={signUp}>
        <MyWalletLogo />
        <input placeholder="Nome" type="text" value={name} onChange={event => setName(event.target.value)} />
        <input placeholder="E-mail" type="email" value={email} onChange={event => setEmail(event.target.value)} />
        <input placeholder="Senha" type="password" autocomplete="new-password" value={password} onChange={event => setPassword(event.target.value)} />
        <input placeholder="Confirme a senha" type="password" autocomplete="new-password" value={secondpass} onChange={event => setSecondPass(event.target.value)} />
        <button>Cadastrar</button>
      </form>

      <Link to={"/"}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;