import styled from "styled-components";
import axios from "axios";
import { backURL } from "../backURL";
import { useState } from "react";


export default function TransactionsPage({token, setToken, type}) {
  const header = { headers: { Authorization: `Bearer ${token}` } };
  const [value, setValue] = useState();
  const [text, setText] = useState();





  function send(event){
    event.preventDefault();
    const body = {
      value: value,
      text: text
    }
    if(type === 'saida'){
      axios.post(`${backURL}/nova-transacao/:${type}`, body, header)
      .then(res => {

      })
    } else{
      axios.post(`${backURL}/nova-transacao/:${type}`, body, header)
      .then(res => {

      })
    }
  }

  return (
    <TransactionsContainer>
      <h1>Nova TRANSAÇÃO</h1>
      <form onSubmit={send}>
        <input placeholder="Valor" type="text" value={value} onChange={event => setValue(event.target.value)} />
        <input placeholder="Descrição" type="text" value={text} onChange={event => setText(event.target.value)} />
        <button>Salvar TRANSAÇÃO</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`;
