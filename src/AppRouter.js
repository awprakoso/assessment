import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductListing from "./components/productListing";
import YourBag from "./components/yourBag";
import ProductDetail from "./components/productDetail";

const AppRouter = () => {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path='/' component={ProductListing}/>
                    <Route path='/bag' component={YourBag}/>
                    <Route path='/detail' component={ProductDetail}/>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default AppRouter;