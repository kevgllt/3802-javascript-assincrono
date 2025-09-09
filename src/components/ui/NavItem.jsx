import styled from '@emotion/styled'

const NavItemContainer = styled.li`
  list-style: none;
  margin: 1rem 0;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1.4rem;

  &:hover {
    color: #007BFF;
  }
`;

const ImageContent = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;

const NavItem = ({ href, img, children }) => {
  return (
    <NavItemContainer>
      <NavLink href={href}>
        { img ? (<ImageContent src={img} alt="icon" />) : (children) }
      </NavLink>
    </NavItemContainer>
  );
}

export default NavItem;