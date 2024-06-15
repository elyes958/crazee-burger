// ça c'est le code que j'ai fait moi, pas la correction
import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useContext, useState } from "react";
import AdminContext from "../../../../../context/AdminContext";
import { FiCheckCircle } from "react-icons/fi";

export default function AjoutProduit() {
  // State
  const { menu, setMenu } = useContext(AdminContext);
  const [imgurl, setImgUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  //Comportements
  const handleChange = (e) => {
    // setImgUrl(e.target.value);
    const { name, value } = e.target; // destructuring pour recuperer la valeur de name et value
    if(name === "productName") setProductName(value); //maniere d'ecrire le if sur une seule ligne quand on return direct une instruction
    if(name === "imgUrl") setImgUrl(value); // et nous permet d'utiliser une seul fct handleChange pour tous nos input
    if(name === "price") setPrice(value);

  };

  // La solution a ton probleme pour definir des id unique etait de faire ça : id: new Date().getTime() du coup chaque eleemnt ajouter aura un id qui lui est propre qui n'empietra pas sur les id definir de base dans fakeMenu
  const handleSubmit = (e) => {
    e.preventDefault(); // Empeche le rechargement de la page
    const newProduct = {
        imageSource: imgurl,
        title      : productName,
        price      : price,
    };

    if(newProduct.imageSource === ""){
        newProduct.imageSource = "/images/coming-soon.png";
    }

    // const copy = [...menu];
    // copy.unshift(newProduct)
    // setMenu(copy);
    // les 2 methode fonctionne mais celle la tien en une ligne
    setMenu((prevMenu) => [newProduct, ...prevMenu]);
    // j'ai mis newProduct en premier pour qu'il soit ajouter au debut des produits comme sur la maquette figma, si tu change l'ordre il est ajouter à la fin
    // voir explication en bas pour la ligne 37

    // ont vide les state pour ne pas que les info envoyer reste dans l'input
    setImgUrl("");
    setProductName("");
    setPrice("");

    setSuccessMessage("Ajouté avec succès !");
    setTimeout(() => {
        setSuccessMessage("");
    }, 2000);
 };

  // Affichage  
  return (
    <AjoutProduitStyled onSubmit={handleSubmit} imgurl={imgurl} action="AJOUTER UN PRODUIT" >
          <div className="divImg">{imgurl ? <img src={imgurl} alt="Produit" /> : <p>Aucune Image</p>}</div>
          <div className="formAndButton">
              <div>
                  <FaHamburger />
                  <input onChange={handleChange} value={productName} type="text" placeholder="Nom du produit (ex: Super Burger)" name="productName" />
              </div>
              <div>
                  <BsFillCameraFill />
                  <input onChange={handleChange} value={imgurl} type="url" name="imgUrl" id="" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" />
              </div>
              <div>
                  <MdOutlineEuro />
                  <input onChange={handleChange} value={price} type="text" placeholder="Prix" name="price" />
              </div>
              <div className="btn">
                <button type="submit">Ajouter un nouveau produit au menu</button>
                {successMessage && <span className="success"><FiCheckCircle/>{successMessage}</span>}
              </div>
          </div>
    </AjoutProduitStyled>
  )
}
// ligne 20: si il y'a quelque chose dans le state tu m'affiche une balise img avec le contenu du state, sinon tu m'affiche la balise p aucune image
// Attention c'est sur le formulaire qu'on met le onSubmit, pas sur le bouton

const AjoutProduitStyled = styled.form`
   display : grid;
   grid-template-columns: 215px 645px;
   gap: 20px;
   margin-top: 31px;
   margin-left: 71px;

   input{
    width: 577px;
    height: 19px;
    padding: 1px 2px 1px 2px;
    border: none;
    background-color: #F5F5F7;
   }
   button{
    width: 275px;
    height: 34px;
    top: 129px;
    left: 235px;
    border: 1px;
    border-radius: 5px;
    padding: 10px 29px 9px 29px;
    background: #60BD4F;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
   }
   .divImg{
    width: 215px;
    height: 120px;
    top: -1px;
    border: ${props => props.imgurl ? 'none' : '1px #E4E5E9 solid'};
    border-radius: 5px;
    /* padding: 48px 55px 48px 53px; */
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #93A2B1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; // pour que l'image ne depasse pas de la div

    img{
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;   // pour que l'image soit bien dimensionner dans la div et prenne tout l'espace du conteneur(Redimension, recadrage et pas de distorsion de l'image)
    }
   }

   .formAndButton{
    display: grid;
    gap: 8px; // du couppas besoin de cree des colonne/row pour utiliser gap, display grid suffit

    div{
        width: 645px;
        height: 35px;
        padding: 8px 16px 0px 24px;
        border: #F5F5F7;
        border-radius: 5px;
        background-color: #F5F5F7;

        svg{
            margin-right: 13px;
        }
    }
   }

   .success{
    margin-left: 15px;
    color: #60BD4F;
    font-weight: 400;
    line-height: 20.43px;
   }
`;


// Explications :
// Gestion des états : Vous avez trois états (productName, imgUrl, price) pour stocker les valeurs des champs du formulaire.
// handleChange : Cette fonction gère les changements dans les champs du formulaire et met à jour les états correspondants. Le name de chaque champ de formulaire est utilisé pour identifier quel état mettre à jour.
// handleSubmit : Cette fonction est déclenchée lorsque le formulaire est soumis. Elle empêche le rechargement de la page par défaut (e.preventDefault()), crée un nouvel objet produit avec les valeurs des états et l'ajoute à l'état menu.
// Formulaire : Les champs du formulaire sont contrôlés par les états, ce qui permet de lier les valeurs des champs aux états et de mettre à jour ces valeurs lorsque l'utilisateur tape dans les champs.


// Explication ligne 37 
// Explication détaillée de cette solution
// setMenu((prevMenu) => [...prevMenu, newProduct]);

// prevMenu est l'état actuel de menu. React passe automatiquement l'état actuel à cette fonction lorsque vous utilisez la version fonctionnelle de setState.
// [...prevMenu, newProduct] crée un nouveau tableau :
// Le spread operator (...prevMenu) ajoute tous les éléments de prevMenu dans le nouveau tableau.
// newProduct est ajouté à la fin du tableau.
// setMenu met à jour menu avec ce nouveau tableau.
// Pourquoi c'est mieux ?
// Immutabilité : En utilisant le spread operator, vous créez un nouveau tableau au lieu de modifier directement l'ancien tableau. Cela respecte les principes de l'immutabilité, ce qui est important en React pour éviter des bugs difficiles à diagnostiquer.
// Précision : Vous vous assurez que l'état menu est toujours un tableau et non un nombre (ou une autre valeur inattendue).
// Conclusion
// Utiliser le spread operator pour ajouter un élément à un tableau en React est la méthode recommandée car elle crée un nouveau tableau sans modifier l'ancien, respectant ainsi les principes d'immutabilité et garantissant que l'état reste cohérent.