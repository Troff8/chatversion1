import { useState } from "react";

import "./App.css";

import LoginPage from "../Pages/LoginPage";
import ChatPage from "../Pages/ChatPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <LoginPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatPage user={user} />;
  }
}

export default App;