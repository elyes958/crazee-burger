import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { fadeIn } from "../../../../../../theme/animations";


export default function ImagePrewiew({ newProduct }) {
  return (
      <ImagePrewiewStyled>
          {newProduct.imageSource ? 
          <img src={newProduct.imageSource} alt={newProduct.title} />
           : 
           <div className="empty-image">Aucune Image</div>}
      </ImagePrewiewStyled>
  )
}


const ImagePrewiewStyled = styled.div`
    /* background: red; */
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        animation: ${fadeIn} 1s;
    }

    .empty-image{
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
    }
`;