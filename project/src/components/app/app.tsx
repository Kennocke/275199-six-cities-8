import MainPage from '../main-page/main-page';

type AppProps = {
  offersCount: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <MainPage
      offersCount = {props.offersCount}
    />
  );
}

export default App;
