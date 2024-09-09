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
import { useBasket } from '../../../hooks/useBasket';
import { getUser } from '../../../api/user';
import { useEffect } from 'react';
import { getMenu } from '../../../api/product';
import { getLocalStorage } from '../../../utils/window';
import { initialiseUserSession } from './helpers/initialiseUserSession';



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
  const {menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu} = useMenu();   // setMenu est gerer proche de son state donc dans useMenu voila pourquoi il n'est pas utiliser ici
  const { basket, setBasket, handleAddToBasket, majQuantity, handleDeleteInBasket, handleEditInBasket } = useBasket();
  const {username} = useParams();


//Un composant qui est render = un composant qui est appele comme une fonction est appele(autrement dit toutes les instructions de la fct sont éxecuté)
// quand un composant est execute il va faire 2 lecture la premiere en "ignorant" tout les useEffect puis une 2 eme lecture ou il va executer les useEffect
  useEffect(() => {
    initialiseUserSession(username, setMenu, setBasket)
  }, []); // useEffect nous met une erreur dans la console quand on lui met une fct asynchrone avec async await comme juste au dessus, du coup on fait comme ça pour contourner cet erreur(on fait une fct asynchrone qu'on appelle dans le useEffect)

  

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
    
    titleEditRef: titleEditRef,

    basket              : basket,
    handleAddToBasket   : handleAddToBasket,
    majQuantity         : majQuantity,
    handleDeleteInBasket: handleDeleteInBasket,
    handleEditInBasket  : handleEditInBasket,
    username            : username,
  }

  // appel API pour récupérer l'utilisateur "Alex"
  // getUser("Alex");

  console.log('import.meta.env.REACT_APP_API_KEY: ', import.meta.env.VITE_APP_API_KEY);   // nous permet de lire la valeur de cet variable d'environnement dans le fichier env, ne pas oublier process.env. avant le nom de la variable
//   Pour ceux qui rencontrent le même problème que moi en utilisant VITE
// "process is not defined"
// il faut utiliser import.meta.env. au lieu de process.env.
// ET renommer le nom de vos clés api en les faisant commencer par VITE_ exemple :
// VITE_AUTH_DOMAIN =
// VITE_API_KEY =
// VITE_PROJECT_ID =
// VITE_STORAGE_BUCKET =
// VITE_MESSAGING_SENDER_ID =
// VITE_APP_ID =

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