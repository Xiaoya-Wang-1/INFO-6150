import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CatHabitsPage from './components/CatHabitsPage';
import CatBreedsPage from './components/CatBreedsPage';
import CatNewsPage from './components/CatNewsPage';
import WelcomePage from './components/WelcomePage';
import '../src/styles/global.css';

function App() {
  const [page, setPage] = React.useState('welcome');

  const renderPage = () => {
    switch (page) {
      case 'welcome':
        return <WelcomePage />;
      case 'cathabits':
        return <CatHabitsPage />;
      case 'catbreeds':
        return <CatBreedsPage />;
      case 'catnews':
        return <CatNewsPage />;
      default:
        return <WelcomePage />;
    }
  };

  return (
    <div className="app-container">
      <Header setPage={setPage} className="app-header" />
      <main className="app-main">{renderPage()}</main>
      <Footer className="app-footer" />
    </div>
  );
}

export default App;
