import './App.css';
import { Route, Switch } from "react-router-dom";
// import NotFoundPage from "./UI/NotFoundPage";
import HomePageContainer from "./UI/HomePage/HomePageContainer";
import NotFoundPage from './UI/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' render={() => <HomePageContainer />} />
        <Route path='*' render={() => <NotFoundPage />} />
      </Switch>
    </>
  );
}

export default App;
