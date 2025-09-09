import styles from '@emotion/styled'
import NavItem from './ui/NavItem';
import FeedImg from '../assets/feed.svg'
import AccountCircleImg from '../assets/account_circle.svg'
import InfoImg from '../assets/info.svg'
import LogoutImg from '../assets/logout.svg'

const NavContainer = styles.nav`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Nav = () => {
  return (
    <NavContainer>
      <ul>
        <NavItem href="#" children={'Publicar'} />
        <NavItem href="#" img={FeedImg} />
        <NavItem href="#" img={AccountCircleImg} />
        <NavItem href="#" img={InfoImg} />
        <NavItem href="#" img={LogoutImg} />
      </ul>
    </NavContainer>
  );
}

export default Nav;