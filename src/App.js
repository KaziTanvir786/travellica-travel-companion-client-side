import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewOffering from './components/AddNewOffering/AddNewOffering';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ManageBookings from './components/ManageBookings/ManageBookings';
import MyBookings from './components/MyBookings/MyBookings';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:offeringId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/add-new-package'>
              <AddNewOffering></AddNewOffering>
            </PrivateRoute>
            <PrivateRoute path='/my-bookings'>
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path='/manage-bookings'>
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
