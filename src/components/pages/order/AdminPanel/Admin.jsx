import { useContext, useState } from "react";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";
import styled from "styled-components";
import AdminContext from "../../../../context/AdminContext";
import PanelContext from "../../../../context/PanelContext";
import SelectTabContext from "../../../../context/selectTabContext";

export default function Admin() {
  // state
  const modeAdmin = useContext(AdminContext);
  const [displayPanel, setDisplayPanel] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);

  const panelContext = {
    displayPanel: displayPanel,
    setDisplayPanel: setDisplayPanel
  };

  const selectedTabContext = {
    selectedTab: selectedTab,
    setSelectedTab: setSelectedTab
  };

  if(modeAdmin.isModeAdmin){
    return (
      <PanelContext.Provider value={panelContext}>
       <SelectTabContext.Provider value={selectedTabContext}>
          <AdminStyled>
            <AdminTabs/>
            <AdminPanel/>
          </AdminStyled>
        </SelectTabContext.Provider>
      </PanelContext.Provider>
    )
  } else {
    return null;
  }
}


const AdminStyled = styled.div`
  width: 1400px;
  /* height: 295px;   // si je ne donne pas de height au container c'est bon il ne prend que la taille de ces enfant et donc quand je fait disparaitre AdminPanel, il ne prend que la height de AdminTabs qui ce retrouve bien tout en bas ce qui est ce que je veux parfait ! */
  /* border: 1px solid red; */
`;
