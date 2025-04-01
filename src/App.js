import logo from './logo.svg';
import './App.css';
import './styles/Header.css';
import Header from './components/Header';
import GameList from './components/GameList';
import gamesData from './GamesData';
import LoadMore from './components/LoadMore';
import ThemeToggle from './components/ThemeToggle'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
      <GameList gamesData={gamesData} />
      <LoadMore />
      <ThemeToggle />
      <Footer />

    </div>
  );
}

export default App;
