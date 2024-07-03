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
  const [menu, setMenu] = useState(fakeMenu2);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);  // plus propre de l'envoyer comme ça
  // const [idEditCard, setIdEditCard] = useState(null);  // ce que j'ai fait moi
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();



  //comportements (gestionnaire de state ou "state handlers")
  // oublie pas un comportement qui modifie un state doit etre defini proche de ce state(bonne pratique), la seul exception c'est quand ont a des state assez simple comme un booleen, ou juste une string mais pas sur des state complexe avec array objet
  const handleAdd = (newProduct) => {
    // Copie du tableau
    const menuCopy = [...menu]
    // manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy]
    // update du state
    setMenu(menuUpdated)
  }

  const handleDelete = (idOfProductToDelete) => {
    // Copie du tableau(je laisse l'ancienne facon de faire mais il faut utiliser la methode ligne 57 à partir de maintenant)
    const copy = [...menu];

    // manip de la copie du tableau
    const filterProducts = copy.filter((product) => product.id !== idOfProductToDelete);
    console.log("filterProducts: ", filterProducts);

    // update du state
    setMenu(filterProducts);   // ce comportement doit etre defini proche du state qu'il est en train de modifier
  }

  const handleEdit = (productBeingEdited) => {
    console.log("productBeingEdited: ", productBeingEdited);
    // Copie du state(deep clone) avec la methode JSON qui est bien mieux(voir explication F09 live 1 si tu te rapel plus pk)
    const menuCopy = deepClone(menu);

    // manip de la copie du state
    const indexOfProductToEdit = menu.findIndex((product) => product.id === productBeingEdited.id);
    console.log("indexOfProductToEdit: ", indexOfProductToEdit);

    menuCopy[indexOfProductToEdit] = productBeingEdited;

    // update du state
    setMenu(menuCopy);
  }

  // Ce que j'ai fait moi
  // const handleModify = (id, editCard) => { 
  //   const copy = [...menu];

  //   const modify     = copy.filter((card) => card.id !== id);
  //   const menuModify = [editCard, ...modify];

  //   setMenu(menuModify);
  // }

  const resetMenu = () => { // ont envoie le comportement dans le context pour eviter d'envoyer le settter qui lui doit rester dans le composant dans lequel il est defini(bonne pratique)
    setMenu(fakeMenu2);
  }

  // const handleModify = (idOfProductToModify, newTitle, newImageSource, newPrice) => {
  //   const copy = [...menu];

    
    
  // }

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