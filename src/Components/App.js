import React from "react";
import Header from "./Header";
import EmojiPage from "./EmojiPage";
import { Route, Switch } from "react-router-dom";
import EmojiForm from "./EmojiForm";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <EmojiPage />
        </Route>
        <Route path="/new">
          <EmojiForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
