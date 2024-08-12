import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenue from "./components/SelectMenue";
import CountryCard from "./components/CountryCard";
import CountryList from "./components/CountryList";
import "./App.css";

function App() {
  return (
    <>
    <Header/>
      <main>
       <div className="search-filter-container">
       <SearchBar/>
       <SelectMenue/>
       {/* <CountryCard/> */}
       <CountryList/>
       
       </div>
      </main>

      
    </>
  );
}

export default App;
