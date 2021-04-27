import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

const Routes = () => (
    <BrowserRouter>
     <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;