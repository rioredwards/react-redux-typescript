import "./Repository.css";
import { Repo } from "../state/types/repositories.types";
import { useState } from "react";

const LONG_DESCRIPTION = 50;

function renderBody(
  description: string,
  expanded: boolean,
  descriptionIsLong: boolean
) {
  console.log("expanded", expanded);
  if (!descriptionIsLong || !expanded) {
    return (
      <p className="description">{description.slice(0, LONG_DESCRIPTION)}</p>
    );
  }
  if (expanded) {
    return <p className="description">{description}</p>;
  }
}

const Repository: React.FC<Repo> = ({ name, description, link }) => {
  const [expanded, setExpanded] = useState(false);
  const descriptionIsLong = description.length > LONG_DESCRIPTION;

  function handleToggleExpand() {
    setExpanded(!expanded);
    console.log(expanded);
  }

  const bodyContent = renderBody(description, expanded, descriptionIsLong);

  return (
    <li className="repository">
      <a href={link}>
        <h3 className="name">{name}</h3>
      </a>
      <span className="separator">-</span>
      {bodyContent}
      {descriptionIsLong && (
        <button
          className={`${"expand-btn"} ${expanded ? "expanded" : ""}`}
          onClick={handleToggleExpand}>
          {">"}
        </button>
      )}
    </li>
  );
};

export default Repository;
