import React from 'react';

export const AboutPage: React.FC = () => {
  return (
            <div className="container">
            <h1 className="wiggle" id="about-header">Did you know?</h1>
            <h2 className="aboutText">
                <p>
                    Nearly <strong>60%</strong> of trans Americans have avoided using public bathrooms in
                    the last year.
                </p>
            </h2>

            <div id="need-to-pee">
                <img src="https://cdn4.iconfinder.com/data/icons/person-actions/227/person-action-006-512.png" height={'100px'}/>
            </div>
            <h3 className="aboutText">
                <p>tinkl is a bathroom-finder app that locates  <strong>nearby gender-neutral and
                    single-stall bathrooms</strong> so that trans, nonbinary and gender
                    non-conforming people can <strong>pee in peace</strong>.
                </p>
            </h3>
        </div>
  )
  
}
