import { AppContainer } from './App.styled';
import Counter from './components/Counter';
// import BooksList from './components/BooksList';
// import Navbar from './components/Navbar';
// import ThemeToggle from './components/ThemeToggle';
// import BooksContextProvider from './contexts/BooksContext';
// import ThemeContextProvider from './contexts/ThemeContext';

function App() {

  return (
    <AppContainer>
      <Counter />
      {/* <ThemeContextProvider>
        <BooksContextProvider>

          <Navbar />

          <BooksList />

        </BooksContextProvider>

        <ThemeToggle />

      </ThemeContextProvider> */}
    </AppContainer>
  );
}

export default App;
