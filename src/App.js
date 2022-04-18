import { Switch, Redirect, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Blogs from "./Blogs";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Product from "./Product";
import Products from "./Products";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route path="/products/:id" component={Product} />
          <Route path="/products" component={Products} />
          <Route
            path="/blogs/:author?"
            render={(props) => <Blogs name="Hossein" {...props} />}
          />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="/articles" to="/blogs" />
          <Route exact path="/" component={HomePage} />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
