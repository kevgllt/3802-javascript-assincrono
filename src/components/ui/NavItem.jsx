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

const NavItem = ({ href, img }) => {
  return (
    <NavItemContainer>
      <NavLink href={href}>{img}</NavLink>
    </NavItemContainer>
  );
}

export default NavItem;