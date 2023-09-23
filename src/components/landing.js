import React from 'react';

function Landing() {
  return (
    <div className="landing">
      <header className="header">
        <h1>Welcome to TNDtour</h1>
      </header>
      <section className="hero">
        <h2>Where Every Destination Becomes an Adventure</h2>
        <p>Come and join our tours to see amazing places all 
            over the world. We have tours for everyone, whether you 
            like exciting adventures, learning about different cultures, 
            or just relaxing on beautiful beaches. You can explore the 
            jungles in Costa Rica, discover the history of Rome, or 
            enjoy the peaceful beaches of the Maldives. Our friendly 
            guides will show you around, and you'll have lots of fun 
            doing exciting things and learning new things about the 
            places you visit. So, why wait? Your next adventure is 
            ready for you!</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
}

export default Landing;
