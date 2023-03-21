import React from "react";
import Header from "./Header";
import EmojiPage from "./EmojiPage";
import { Route, Switch } from "react-router-dom";
import EmojiForm from "./EmojiForm";
import Home from "./Home";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/emojis/new">
          <EmojiForm />
        </Route>
        <Route exact path="/emojis/:category">
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
