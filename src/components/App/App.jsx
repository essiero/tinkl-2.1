import React, { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { AboutPage } from '../AboutPage/AboutPage';
import { LeafletMap } from '../LeafletMap/LeafletMap';
import HomePage from '../HomePage';
import AddBathroom from '../AddBathroom';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import './App.css';
import 'leaflet/dist/leaflet.css';

import { setUser, setUserLocation } from '../../redux/reducers/userReducer';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  const [locationReady, setLocationReady] = useState(false);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });

    // Gets lat and lng coordinates from user and places it in redux state
       if (navigator.geolocation) {
      const watcher = navigator.geolocation.watchPosition(
        (position) => {
          dispatch(setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude }));
          setLocationReady(true);
          console.log("user location is: ", ({ lat: position.coords.latitude, lng: position.coords.longitude }))
          dispatch({
            type: "SET_LOCATION", 
            payload: { 
              lat: position.coords.latitude, 
              lng: position.coords.longitude }})
        },
        (error) => {
          console.error('Error watching position:', error);
        }
      );

      //Return cleans up the watcher on component unmount
      return () => {
        navigator.geolocation.clearWatch(watcher);
      }
    } else {

      //todo - create option to look via zip code
      console.error('Geolocation is not supported by this browser');
    }
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:5173/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the HomePage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}
          <ProtectedRoute
            // logged in shows HomePage else shows LoginPage
            exact
            path="/user"
          >
            <HomePage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows AddBathroom else shows LoginPage
            exact
            path="/add"
          >
            <AddBathroom />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
