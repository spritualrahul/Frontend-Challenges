import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenue from "./components/SelectMenue";
import CountryCard from "./components/CountryCard";
import CountryList from "./components/CountryList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
     
      <Header/>
       <div className="search-filter-container">
       <SearchBar/>
       <SelectMenue/>
       <CountryCard/>
       <CountryList/>
       
       </div>
      </main>

      
    </div>
  );
}

export default App;
