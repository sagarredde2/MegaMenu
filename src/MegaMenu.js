import React, { useState } from "react";
import styled from "styled-components";

const MegaMenuContainer = styled.nav`
  ul {
    color: green;
    list-style-type: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const MegaMenuLink = styled.a`
  color: #579e56;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;


const MegaMenu = ({ links }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <MegaMenuContainer>
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{position: 'relative', width: '33.33%'}}
          >
            <MegaMenuLink href={link.url}>{link.text}</MegaMenuLink>
            {hoveredIndex === index && (
                <ul style={{ position: 'absolute', left: '0', top: '100%', paddingLeft: '0', display: 'block'}}>
                  {link.subMenu.map((subLink, subIndex) => (
                    <li key={subIndex} style={{ marginBottom: '4px'}}>
                      <MegaMenuLink href={subLink.url}>
                        {subLink.text}
                      </MegaMenuLink>
                    </li>
                  ))}
                </ul>       
            )}
          </li>
        ))}
      </ul>
    </MegaMenuContainer>
  );
};

export default MegaMenu;
