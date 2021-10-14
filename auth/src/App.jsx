import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { AuthContext } from './store/AuthContext';

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {!isLoggedIn && <Route path="/auth" component={AuthPage} />}
        {isLoggedIn && <Route path="/profile" component={UserProfile} />}
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Layout>
  );
}

export default App;
