import styles from '@emotion/styled'
import NavItem from './ui/NavItem';
import FeedImg from '../assets/feed.svg'
import AccountCircleImg from '../assets/account_circle.svg'
import InfoImg from '../assets/info.svg'
import LogoutImg from '../assets/logout.svg'

const NavContainer = styles.nav`
  ul {  
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 3rem;
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <ul>
        <NavItem href="#" children={'Publicar'} />
        <NavItem href="#" img={FeedImg} text={'Feed'} />
        <NavItem href="#" img={AccountCircleImg} text={'Perfil'} />
        <NavItem href="#" img={InfoImg} text={'Sobre nós'} />
        <NavItem href="#" img={LogoutImg} text={'Sair'} />
      </ul>
    </NavContainer>
  );
}

export default Nav;