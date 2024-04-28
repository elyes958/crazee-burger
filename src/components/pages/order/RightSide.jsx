import {  Link, useNavigate, useParams } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";

export default function RightSide({ username }) {
 // state
//  const navigate = useNavigate();
  //state
//   const {username} = useParams();
  // la variable parametres contient un objet car useParams nous retourne un objet(la valeur des parametre qu'on a passer dans l'url via le : est la cle qui contient notre valeur)
  // console.log("username: ", username);
  // quand ont console.log en mettant dans une variable comme on a fait avant on voit que notre valeur ce trouver dans la cle username de l'objet

 // comportements
//  const handleClick = () => {
//     navigate("/login");
//  }


 //affichage
  return (
      <RightSideStyled>
          {/* <div className='userButton'>
            <span>Hey, {username}</span>
            <button className='cliker' onClick={handleClick}>Se déconnecter</button>
        </div>
        <BsPersonCircle className='svg'/> */}
          Right
          <h1>Bonjour {username}</h1>
          <Link to="/">
              <button>Deconnexion</button>
          </Link>
      </RightSideStyled>
  )
}


const RightSideStyled = styled.div`
    /* display: flex;
    align-items: center;
    font-family: "Open Sans";
    width: 120px;
    height: 44px;
    margin-right: 70px;
    .clicker{
        cursor: pointer;
        font-family: "Open Sans";
        font-size: 10px;
    }
    .userButton{
        display: flex;
        flex-direction: column;
        width: 74px;
        height: 44px;
    }
    .userButton span{
        font-size: 16px;
    }
    .svg{
        height: 36px;
        width: 36px;
    } */
      background: purple;
`;
