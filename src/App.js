import React from 'react'
import './App.css';
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { Container} from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './components/ForgotPassword'
import UpdateProfile from './components/UpdateProfile';

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
      <div className="w-100" style={{minWidth: '400px'}}>
    <AuthProvider>
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </Router>
    </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
