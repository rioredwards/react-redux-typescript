import "./RepositoriesList.css";
import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Repository from "./Repository";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    searchRepositories(term);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data && (
        <ul>
          {data.map((repo, idx) => (
            <Repository
              key={idx}
              name={repo.name}
              link={repo.link}
              description={repo.description}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepositoriesList;
