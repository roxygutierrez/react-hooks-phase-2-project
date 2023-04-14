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

      {/* Client-Side Routing */}
      {/* switch renders 1st child, then Routes to the next */}
      <Switch>
        <Route exact path="/emojis/new">
          <EmojiForm />
        </Route>

        {/* useParams to match category route from URL-- category becomes a variable */}
        <Route exact path="/emojis/:category">
          {/* passing in {search} to specify what emojis to display */}
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
