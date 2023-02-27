import "./App.css";
import React from "react";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import Counter from "./components/state/Counter";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import User from "./components/context/User";
import { UserContext } from "./components/context/UserContext";
import Restriction from "./components/restriction/Restriction";
import Toast from "./components/templateliterals/Toast";
import ButtonEks from "./components/html/Button";

function App() {
  const personName = {
    first: "Kuba",
    last: "Kołcz",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Adam", last: "Boiboi" },
    { first: "Jakub", last: "Kuba" },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "14px",
          marginTop: "12px",
        }}
      >
        <Greet name="kuba" count={15} isLoggedIn={true} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status="success" />
        <Heading>ChildrenText</Heading>
        <Oscar>
          <Heading>Oscar</Heading>
        </Oscar>
        <Greet name="Kubs" isLoggedIn={true} />
        <Button
          click={(e, id) => {
            e.preventDefault();
            console.log("buttons been clicked", e, id);
          }}
        />
        <Input value="" handleChange={(e) => console.log(e)} />
        <Container styles={{ border: "1px solid black", padding: "1rem" }} />
        <Counter />
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
        <UserContext>
          <User />
        </UserContext>
        <Restriction value={10} isPositive={true} />
        <Toast position="center" />
        <ButtonEks variant="primary">button</ButtonEks>
      </div>
    </>
  );
}

export default App;
