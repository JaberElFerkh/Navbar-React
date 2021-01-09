import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-decoration: none;
  font-size: 18px;
  color: #e1e9fc;
  padding: 15px;
  height: 60px;
  margin: 5px 10px;
  /* outline: 2px solid red; */

  &:hover {
    background-color: #252831;
    border-radius: 5px;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 15px;
`;

const DropDownLink = styled(Link)`
  background-color: #414757;
  height: 60px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 20px;
  /* border: 2px solid blue; */
  z-index: 100;
  border-radius: 5px;
  margin: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #632ce4;
  }
`;

function SubMenu({ item }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropDownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropDownLink>
          );
        })}
    </>
  );
}

export default SubMenu;
