import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString  from "query-string"
import { getHerosByName } from "../helpers/getHerosByName";
import { HeroCard } from "../components/HeroCard";

export const SearchHeroPage = () => {
  
  const navigate = useNavigate()
  
  const location = useLocation()
  
  const {q = ""} = queryString.parse(location.search)
  
    const {searchText, onInputChange, onResetForm} = useForm({
      searchText: q
    })

  const heroes = getHerosByName(q)


  const onSearchSubmit = (event) =>{
event.preventDefault()
if(searchText.trim().length <= 1 ) return;
navigate(`?q=${searchText.toLowerCase().trim()}`)

  }







  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">
        <h4>Searching</h4>
        <hr />
        <form onSubmit={onSearchSubmit}>
          <input
            type="text"
            placeholder="search hero"
            className="form-control"
            name="searchText"
            value={searchText}
            onChange={onInputChange}
            autoComplete="off"
          />
          <button className="btn btn-outline-primary mt-2">Search</button>
        </form>
        </div>

        
        <div className="col-7">
          <h4>Results</h4>
          <hr />

{
  (q === "")? <div className="alert alert-primary">
  Search a hero
</div> : (heroes.length === 0) && <div className="alert alert-danger">
            No results for <b>{q}</b>
          </div>

}


    



        {
          heroes.map(hero => (
            <HeroCard key={hero.id} {...hero}/>
          ))
        }

        </div>
    
      </div>
    </>
  );
};
