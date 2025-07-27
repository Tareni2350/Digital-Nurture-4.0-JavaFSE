import React, { useState } from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function UserGreeting() {
  return <h1>Welcome back</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginClick() {
    setIsLoggedIn(true);
  }

  function handleLogoutClick() {
    setIsLoggedIn(false);
  }

  let button;
  let greeting;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
    greeting = <UserGreeting />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
    greeting = <GuestGreeting />;
  }

  return (
    <div>
      {greeting}
      {button}
    </div>
  );
}

export default App;