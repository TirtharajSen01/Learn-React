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
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes'

class App extends Component 
{
  // Making state up 
  constructor(props)
  {
    super(props);

    this.state = {
      dishes : DISHES
    };
  }
  render()
  {
    return (
      <div className = "App">
        {/* <header className = "App-header">
          <img src = {logo} className="App.logo" alt="logo"></img>
          <h1 className = "App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get Sarted, edit <code>src/App.js</code> and save.
        </p> */}
        <Navbar dark color = "primary">
          <div className = "container">
            <NavbarBrand href = "/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes} />
      </div>
    );
  }
}

export default App;//This is an export from this app.js file