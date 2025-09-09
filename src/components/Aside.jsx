import styles from '@emotion/styled'
import Logo from '../assets/Logo.svg'
import Nav from './Nav'

const AsideContainer = styles.aside`
  width: 300px;
  padding: 2rem;
  background-color: #f9f9f9;
  border-right: 1px solid #ddd;
`;

const LogoImage = styles.img`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
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