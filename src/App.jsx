import styles from '@emotion/styled'

const Container = styles.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styles.h1`
  font-size: 3.6rem;
  color: #333;
`;

const App = () => {
  return (
    <Container>
      <Title>CodeConnect</Title>
      <p>Sua plataforma de conexões de código!</p>
    </Container>
  );
}

export default App;