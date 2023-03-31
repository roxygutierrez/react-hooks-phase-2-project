import React, { useState } from "react";
import Header from "./Header";
import EmojiPage from "./EmojiPage";
import { Route, Switch } from "react-router-dom";
import EmojiForm from "./EmojiForm";
import Home from "./Home";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Header setSearch={setSearch} />
      <Switch>
        <Route exact path="/emojis/new">
          <EmojiForm />
        </Route>
        <Route exact path="/emojis/:category">
          <EmojiPage search={search} />
        </Route>
        <Route exact path="">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
