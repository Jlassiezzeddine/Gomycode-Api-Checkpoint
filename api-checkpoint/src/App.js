import React from "react";
import Navigation from "./components/Navigation/Navigation";
import UserList from "./components/UserList/UserList";
function App() {
  return (
    <React.Fragment>
      <Navigation />
      <UserList />
    </React.Fragment>
  );
}

export default App;
