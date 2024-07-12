import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Admin from './AdminPanel/Admin';
import AdminContext from '../../../context/AdminContext';
import { fakeMenu2 } from '../../../fakeData/fakeMenu';
import { EMPTY_PRODUCT } from '../../../enums/product';
import { deepClone } from '../../../utils/array';
import { useMenu } from '../../../hooks/useMenu';



export default function OrderPage() {
  //state
  // const {username} = useParams();
  // la variable parametres contient un objet car useParams nous retourne un objet(la valeur des parametre qu'on a passer dans l'url via le : est la cle qui contient notre valeur)
  // console.log("username: ", username);
  // quand ont console.log en mettant dans une variable comme on a fait avant on voit que notre valeur ce trouver dans la cle username de l'objet
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  // il a cree un state pour ajouter et un autre pour modifier qui permet de afficher/fermer la fenetre
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);  // plus propre de l'envoyer comme ça
  // const [idEditCard, setIdEditCard] = useState(null);  // ce que j'ai fait moi
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const {menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu} = useMenu();
  // setMenu est gerer proche de son state donc dans useMenu voila pourquoi il n'est pas utiliser ici

  //value du context
  const adminValue = {
    isModeAdmin: isModeAdmin,
    setIsModeAdmin: setIsModeAdmin,

    isCollapsed: isCollapsed,
    setIsCollapsed: setIsCollapsed,

    isEditSelected: isEditSelected,
    setIsEditSelected: setIsEditSelected,

    isAddSelected: isAddSelected,
    setIsAddSelected : setIsAddSelected,

    currentTabSelected: currentTabSelected,
    setCurrentTabSelected: setCurrentTabSelected,

    menu: menu,
    // setMenu: setMenu, faut pas l'envoyer du coup regle bonne pratique voir ligne 27

    handleAdd: handleAdd,
    handleDelete: handleDelete,

    resetMenu: resetMenu,

    newProduct: newProduct,
    setNewProduct: setNewProduct,

    // idEditCard: idEditCard,  // ce que j'ai fait moi
    // setIdEditCard: setIdEditCard, // 

    // handleModify: handleModify, //

    productSelected: productSelected,
    setProductSelected: setProductSelected,

    handleEdit: handleEdit,
    
    titleEditRef: titleEditRef
  }

  //affichage
  return (
    <AdminContext.Provider value={adminValue}>
    <OrderPageStyled>
       <div className='container'>
          <Navbar />
          <Main/>
          {/* <Admin/> */}
       </div>
    </OrderPageStyled>
    </AdminContext.Provider>
  )
}
// ligne 32 le composant Admin que j'avais fait moi avant la correction
// Le dossier AdminPanel et ce qu'il y'a dedans c'est tout ce que j'ai fait moi, le dossier Admin c'est la correction


const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  /* padding-top: 25px; */
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  .container{
  /* background: red; */
  height: 95vh;
  width: 1400px;
  display: flex;
  flex-direction: column;
  border-radius: ${theme.borderRadius.extraRound};
  }
`;




// <h1>Bonjour {username}</h1>
// <Link to={"/login"}>
//     <button>Déconnexion</button>
// </Link>