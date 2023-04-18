import "./App.css";
import Container from "./components/Container";
import { FilterProvider } from "./context/FilterContext";
import { BookProvider } from "./context/BookContext";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <FilterProvider>
          <Container />
        </FilterProvider>
      </BookProvider>
    </div>
  );
}

export default App;
