import styled from '@emotion/styled'

const NavItemContainer = styled.li`
  list-style: none;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #81FE88;
  font-size: 3rem;

  &:hover {
    color: #007BFF;
  }
`;

const ImageContent = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;

const TextContent = styled.span`
  font-size: 1.6rem;
  color: #FFF;
`;

const NavItem = ({ href, img, children, text }) => {
  return (
    <NavItemContainer>
      <NavLink href={href}>
        { img ? (<ImageContent src={img} alt="icon" />) : (children) }
      </NavLink>
        <TextContent>{text}</TextContent>
    </NavItemContainer>
  );
}

export default NavItem;