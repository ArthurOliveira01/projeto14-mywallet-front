import styled from "styled-components";
import { BiExit } from "react-icons/bi";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { backURL } from "../backURL";
import { useState } from "react";

export default function HomePage({token, setToken, type, setType}) {
  const [balance, setBalance] = useState();
  const header = { headers: { Authorization: `Bearer ${token}` } };
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${backURL}/home`, header)
    .then(res => {
      
    })
  })

  useEffect(() => {
    if(token === undefined){
      navigate("/")
    }
  });

  function logout(){
    setToken(undefined);
  }

  function entrada(){
    setType('entrada');
    navigate('/nova-transacao')
  }

  function saida(){
    setType('saida');
    navigate('/nova-transacao')
  }

  

  return (
    <HomeContainer>
      <Header>
        <h1>Olá, Fulano</h1>
        <BiExit onClick={logout} />
      </Header>

      <TransactionsContainer>
        <ul>
          <ListItemContainer>
            <div>
              <span>19/04</span>
              <strong>Bkzinho</strong>
            </div>
            <Value color={"negativo"}>-31,90</Value>
          </ListItemContainer>

          <ListItemContainer>
            <div>
              <span>10/05</span>
              <strong>Salário</strong>
            </div>
            <Value color={"positivo"}>1200,00</Value>
          </ListItemContainer>
        </ul>

        <article>
          <strong>Saldo</strong>
          <Value color={"positivo"}>2880,00</Value>
        </article>
      </TransactionsContainer>


      <ButtonsContainer>
        <button>
          <AiOutlinePlusCircle onClick={entrada} />
          <p>Nova <br /> entrada</p>
        </button>
        <button>
          <AiOutlineMinusCircle onClick={saida} />
          <p>Nova <br />saída</p>
        </button>
      </ButtonsContainer>

    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
`;
const TransactionsContainer = styled.article`
  flex-grow: 1;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  article {
    display: flex;
    justify-content: space-between;   
    strong {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;
const ButtonsContainer = styled.section`
  margin-top: 15px;
  margin-bottom: 0;
  display: flex;
  gap: 15px;
  
  button {
    width: 50%;
    height: 115px;
    font-size: 22px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 18px;
    }
  }
`;
const Value = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "positivo" ? "green" : "red")};
`;
const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  margin-right: 10px;
  div span {
    color: #c6c6c6;
    margin-right: 10px;
  }
`;