import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { useState } from 'react';
// import { Router } from 'react-router';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App = () => {
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const country = 'in';

 const [Progress, setProgress] = useState(0)

  return (
    <Router>
      <div>
        
        <Navbar />
        {/* <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="sports" /> */}
        <LoadingBar
          color='green'
          height={3}
          progress={Progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Switch>
          <Route exact path="/"> <News setProgress={setProgress} apiKey={apiKey} key="home" pageSize={pageSize} country={country} category="general" /> </Route>

          <Route exact path="/business"> <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" /> </Route>
          <Route exact path="/entertainment"> <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" /> </Route>
          <Route exact path="/general"> <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" /> </Route>
          <Route exact path="/health"> <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" /> </Route>
          <Route exact path="/science"> <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" /> </Route>
          <Route exact path="/sports"> <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" /> </Route>
          <Route exact path="/technology"> <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" /> </Route>
        </Switch>

      </div>
    </Router>
  )
}
export default App


// import './App.css';
// import Navbar from './components/Navbar';
// import News from './components/News';
// import React, { Component } from 'react';
// // import { Router } from 'react-router';
// import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';


// export default class App extends Component {
//   pageSize = 8;
//   apiKey = process.env.REACT_APP_NEWS_API;
//   country = 'us';

//   state = {
//     progress: 0
//   }

//   setProgress = (progress) => {
//     this.setState({ progress: progress })
//   }

//   render() {
//     return (
//       <Router>
//         <div>
//           <Navbar />
//           {/* <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country={this.props.country} category="sports" /> */}
//           <LoadingBar
//             color='green'
//             height={3}
//             progress={this.state.progress}
//           // onLoaderFinished={() => setProgress(0)}
//           />
//           <Switch>
//             <Route exact path="/home"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="home" pageSize={this.pageSize} country={this.props.country} category="general" /> </Route>

//             <Route exact path="/business"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country={this.props.country} category="business" /> </Route>
//             <Route exact path="/entertainment"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country={this.props.country} category="entertainment" /> </Route>
//             <Route exact path="/general"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country={this.props.country} category="general" /> </Route>
//             <Route exact path="/health"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country={this.props.country} category="health" /> </Route>
//             <Route exact path="/science"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country={this.props.country} category="science" /> </Route>
//             <Route exact path="/sports"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country={this.props.country} category="sports" /> </Route>
//             <Route exact path="/technology"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={this.props.country} category="technology" /> </Route>

//           </Switch>

//         </div>
//       </Router>
//     )
//   }
// }