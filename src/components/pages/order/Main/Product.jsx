// Card.jsx remplace Product(du coup ont utilise plus ce fichier dans le projet,je le garde pour mes notes)
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Product({ title, imageSource, price }) {
  return (
    <ProductStyled >
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="price">{price}</div>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  )
}
// ici aucun interet à decouper encore en sous composant car tout le jsx ne concerne qu'un seul objet(product)

const ProductStyled = styled.div`
        background: red;
        width: 200px;   // ont a ajouter 20px et 20px de padding(ligne 26) ce qui a fait grandir notre largeur du coup ont enleve 40px ici qui de base etait à 240px et ont garde la bonne valeur maximum de base
        height: 300px;  // pareil ont a rajouter 20px en haut et 10px en bas padding donc ont descend la hauteur de 30px ce qui nous fait 300px au lieu de 330px de base
        display: grid;
        grid-template-rows: 65% 1fr; // premier element prend 65% et le 2eme element prend le reste(1fr)
        padding: 20px; // 20px de padding partout sauf en bas ligne 27 ou c'est 10px
        padding-bottom: 10px;

        .image{
            border: 1px solid yellow; // permet de voir les contour de notre images dans notre div
            width: 100%;
            height: auto;

            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
                margin-top: 30px; // car deja 20px de padding en haut ce qui ns fait 50px(comme sur la maquette)
            }
        }

        .info-text{
          border: 3px solid fuchsia;
          display: grid;


          .description{
            border: 1px solid yellow;
            .price{
            border: 1px solid blue;   // oublie pas les border c'est pas mal pour identifier toutes tes balise surtout quand il y'a bc d'imbrication comme ici

          }

          .add-button{
            border: 1px solid green;
          }
        }
          

        }
`;




// Petit conseil pour le CSS

// Dans la "Card", tu as ajouté 20px à droite et à gauche et tu as modifié ensuite la largeur de la "Card" de 240px à 200px;
// Pour éviter cela, tu peux ajouter la propriété "box-sizing: border-box;"

// Sans
// width: 240px;
// padding-left: 20px;
// padding-right: 20px;
// La largeur total = 240 + 20 + 20 = 280px

// Avec  box-sizing: border-box;
// width: 240px;
// padding-left: 20px;
// padding-right: 20px;
// La card va faire en sorte de garder la largeur initial de 240px et appliquer ensuite le padding à l'intérieur
// Donc la largeur total = 240px sans devoir le modifier


