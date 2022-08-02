import { AppContainer } from './App.styled';
import BooksList from './components/BooksList';
import Navbar from './components/Navbar';
import NewBookForm from './components/NewBookForm';
import ThemeToggle from './components/ThemeToggle';
import BooksContextProvider from './contexts/BooksContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {

  return (
    <AppContainer>
      <ThemeContextProvider>
        <BooksContextProvider>

          <Navbar />

          <BooksList />

          <NewBookForm />

        </BooksContextProvider>

        <ThemeToggle />

      </ThemeContextProvider>
    </AppContainer>
  );
}

export default App;
