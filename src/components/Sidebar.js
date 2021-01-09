import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const Nav = styled.div`
  background-color: #15171c;
  height: 80px;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border: 2px solid red; */
`;

const NavIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 80px;
  margin: 0 0 10px 10px;
  /* margin-left: 10px;
  margin-bottom: 10px; */
  font-size: 30px;
  /* outline: 2px solid yellow; */
`;

const SidebarNav = styled.nav`
  background-color: #15171c;
  width: 350px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 1000ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  /* background-color: whitesmoke; */
  /* border: 2px solid yellow; */
`;

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>

          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
}

export default Sidebar;
