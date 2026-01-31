import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage";
import React from 'react'
import UserContext from "./UserContext";
import ProfilePage from "../../alx-react-app-props/src/components/ProfilePage";

export default function App() {
  const userData = {name:"John Doe", email: "johndoe@gmail.com"}
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
       <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <WelcomeMessage />
      <Counter />
      <UserContext.Provider value={userData}>
          <ProfilePage />
      </UserContext.Provider>
    </div>
    
  )
}
