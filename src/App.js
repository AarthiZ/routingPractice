
import React from 'react';
import { Route, Redirect } from 'react-router-dom'
// import AntDesign from './AntDesign'
// import Welcome from './Welcome';
// import Header from './Header';
// import ProductDetails from './ProductDetails';
// import Products from './Products';
import { AllQuotes } from './pages/AllQuotes';
import { NewQuote } from './pages/NewQuote';
import { QuoteDetail } from './pages/QuoteDetail';
import { Switch } from 'react-router-dom';
const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Switch>
        {/* <Route path="/antdesign"><AntDesign /></Route>
        <Route path="/welcome"><Welcome /></Route>
        <Route path="/products" exact><Products /></Route>
        <Route path="/products/:productId"><ProductDetails /></Route> */}
        <Route path="/" exact><Redirect to='/quotes'></Redirect></Route>
        <Route path="/quotes"><AllQuotes /></Route>
        <Route path="/quote/:quoteId"><QuoteDetail /></Route>
        <Route path="/new-quote"><NewQuote /></Route>
      </Switch>
    </div>
  )
}
export default App;