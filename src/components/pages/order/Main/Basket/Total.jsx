import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";
import CasinoEffect from "../../../../reusable-ui/CasinoEffect.jsx"

export default function Total({ amountToPay }) {
  return (
      <Header>
          <TotalStyled>
              <span className="total">Total</span>
              {/* <CasinoEffect count={amountToPay}/> */}
              <span className="amount">{amountToPay}</span>
          </TotalStyled>
      </Header>
  )
}

const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;
