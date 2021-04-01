//This is the new gen code
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// This pages contents differ from the things given by Mupalla int he older versions of the React DOCS 

//Code By Mupalla 

import React , {Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component 
{
  render()
  {
    return (
      <div className = "App">
        <header className = "App-header">
          <img src = {logo} className="App.logo" alt="logo"></img>
          <h1 className = "App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get Sarted, edit <code>src/App.js</code> and save.
        </p>
      </div>
    );
  }
}

export default App;//This is an export from this app.js file