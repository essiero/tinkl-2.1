import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Pee in peace.');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Did you know that nearly <strong>60%</strong> of trans Americans avoided using public restrooms in the last year?
          </p>

          <p>
            Contrary to right-wing vitriol, trans people are much more likely to experience harassment <strong>themselves</strong> while using public bathrooms. <sup><a href="https://glaad.org/fact-sheet-misleading-narratives-about-transgender-people-and-restrooms-locker-rooms-and-other-single-sex-spaces/">1</a></sup>
          </p>

          <p>
            tinkl is a harm-reduction tool to support trans, nonbinary and gender-nonconforming people find safer restrooms while out and about. It locates nearby gender-neutral and single-stall bathrooms so that we can <strong>pee in peace </strong>- goddammit!!
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
