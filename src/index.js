import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme";
import Loading from "./components/Loading";
import Nav from "./components/Nav";

const Posts = React.lazy(() => import("./components/Posts"));
const Post = React.lazy(() => import("./components/Post"));
const User = React.lazy(() => import("./components/User"));

// Component
// State
// Lifecycle
// UI

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  // useEffect(() => {
  //   setTheme((theme) => {
  //     theme: theme === "light" ? "dark" : "light";
  //   });
  // }, [theme]);

  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={`container ${theme}`}>
          <Nav toggleTheme={toggleTheme} />

          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/">
                <Posts type="top" />
              </Route>

              <Route path="/new">
                <Posts type="new" />
              </Route>

              <Route path="/post">
                <Post />
              </Route>

              <Route path="/user">
                <User />
              </Route>

              <Route path="*">
                <h1>Four oh Four</h1>
              </Route>
            </Switch>
          </Suspense>
        </div>
      </ThemeProvider>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
