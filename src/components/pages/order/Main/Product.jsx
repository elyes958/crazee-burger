import styled from "styled-components";

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

        .description{
          border: 1px solid blue;
        }
`;


