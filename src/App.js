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
import Clock from './components/Clock';
import ClockFunction from './components/ClockFunction'
import Counter from './components/Counter';
import CounterFunction from './components/CounterFunction';
import PokemonListAPI   from "./components/PokemonListAPI";
import Footer from './components/Footer';
import GameClickButton from './components/GameClickButton';
import UpgradedGameButton from './components/UpgradedGameButton';
import GameMainSection from "./components/GameMainSection";

function App() {
  return (

    <div className="App">
      <Header />
      <GameList gamesData={gamesData} />
      <LoadMore />
        <ClassComponent />
        <FavoriteGameForm />
        <PokemonListAPI />
        <ChangeStyle />
        <Clock />
        <ClockFunction />
        <Counter />
        <CounterFunction />
        <GameClickButton />
        <UpgradedGameButton />
        <GameMainSection />
        <Footer />
    </div>
  );
}

export default App;
