import styles from '@emotion/styled'
import Logo from '../assets/Logo.svg'
import Nav from './Nav'

const AsideContainer = styles.aside`
  width: 17.7rem;
  padding: 2rem;
  background-color: #171D1F;
  border-right: 1px solid #ddd;
`;

const LogoImage = styles.img`
  width: 100%;
  height: auto;
  margin: 2.2rem auto;
`;


const Aside = () => {
  return (
    <AsideContainer>
      <LogoImage src={Logo} alt="Logo" />
        <Nav />
    </AsideContainer>
  );
}

export default Aside;