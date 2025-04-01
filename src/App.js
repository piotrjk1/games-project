import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/Header.css';
import Header from './components/Header';
import GameList from './components/GameList';
import gamesData from './GamesData';
import LoadMore from './components/LoadMore';
import ChangeStyle from './components/ChangeStyle'
import FavoriteGameForm from "./components/FavoriteGameForm";
import ClassComponent from "./components/ClassComponent";
import Footer from './components/Footer';

function App() {
  return (

    <div className="App">
      <Header />
      <GameList gamesData={gamesData} />
      <LoadMore />
        <ClassComponent />
        <FavoriteGameForm />
        <ChangeStyle />
        <Footer />
    </div>
  );
}

export default App;
