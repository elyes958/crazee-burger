import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

// on le fait sous forme de fct pour pouvoir recuperer le state la ou on l'appel à savoir addForm car ce fichier a besoin du state newProduct qu'on lui passera en parametre lors de l'appel
export const getInputTextsConfig = (newProduct) => [
    {
      id: "0",
      name:"title", 
      value:newProduct.title, 
      type:"text", 
      placeholder:"Nom du produit (ex: Super Burger)", 
      Icon:<FaHamburger/>,
      version:"minimalist",
    },
    { 
     id: "1",
    name:"imageSource", 
    value:newProduct.imageSource, 
    type:"text", 
    placeholder:"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)", 
    Icon:<BsFillCameraFill/>,
    version:"minimalist",
  },
  { 
     id: "2",
    name:"price", 
    value: newProduct.price ? newProduct.price : "", 
    type:"text", 
    placeholder:"Prix", 
    Icon:<MdOutlineEuro/>,
    version:"minimalist",
  },
]