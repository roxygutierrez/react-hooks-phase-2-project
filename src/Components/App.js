import React from "react";
import Header from "./Header";
import EmojiPage from "./EmojiPage";
import { Route, Switch } from "react-router-dom";
import EmojiForm from "./EmojiForm";
import Home from "./Home";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/emojis/new">
          <EmojiForm />
        </Route>
        <Route exact path="/emojis/:category">
          <br />
          <EmojiPage />
        </Route>
        <Route exact path="">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
