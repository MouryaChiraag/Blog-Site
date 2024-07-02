// import './App.css';

// function App() {
//   const title = "Welcome to the New Blog";
//   const likes = 50;
//   const person = {name : "mcb", age : 30};// gives error. Cannot output an object.  /* <p>{person}</p>  */

//   const link = "https://www.google.co.uk/"; // to define an attribute

//   return (
//     <div className = "App">
//       <div className="content">
//       {/* <h1 class = "text-red-600 heading">Hello World!</h1> */}

//       <h1>{title}</h1>
//       <p>Liked {likes} times</p>
//       {/* we can also pass dynamic values directly */}

//       <p>{10}</p>
//       <p>{"HELLO MCB!"}</p>
//       <p>{[1,2,3,4,5]}</p>
//       <p>{Math.random() * 10}</p>

//       {/* to define an attribute */}
//       <a href = {link}>Google Site</a>//

//       </div>
//     </div>
//   );
// }

// export default App;


import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path = "/">
              < Home />
            </Route>
            <Route path = "/create">
              < Create />
            </Route>
            <Route path = "/blogs/:id">
              < BlogDetails />
            </Route>
            <Route path = "*">
              < NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;