import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import '../Assets/Styles/Views/App.css';

function App() {
  return (

          <div>

              <div className="App">
                  <header className="App-header">
                      <p>Kadro Web Dashboard</p>


                      <Link to="/book" >Book a photographer now</Link>

                  </header>
              </div>

          </div>
  );
}



export default App;