import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container mt-3">
          <Switch>
            <Route path="/" exact component={Posts} />
            <Route path="/create" exact component={CreatePost} />
            <Route path="/edit/:postId" exact component={EditPost} />
            <Route path="/about" exact component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
