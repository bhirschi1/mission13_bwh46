import React from 'react';

function Home() {
  return (
    <>
      <h1 className="display-1" style={{ paddingLeft: '10px' }}>
        Welcome to Joel Hilton's Website
      </h1>
      <h4 className="lead" style={{ paddingLeft: '10px' }}>
        The home of the glorious mind of Joel Hilton's media phenomena. This
        site contains Joel's movies and podcasts with details about each one!
      </h4>
      <br></br>
      <p style={{ paddingLeft: '10px' }}>[Pictured below: Joel Hilton]</p>
      <img
        src="./hilton_brother.jpg"
        alt="Joel Hilton"
        style={{ paddingLeft: '10px' }}
      />
    </>
  );
}

export default Home;
