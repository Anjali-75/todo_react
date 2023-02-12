import { ImBin } from "react-icons/im";
function List({ list, setList }) {
  const handleRemove = (id) => {
    const newList = list.filter((item, idx) => idx !== id);
    setList(newList);
  };

  return (
    <ul className="list">
      {list.map((item, idx) => (
        <li key={idx}>
          <span>
            {idx + 1}. {item}
          </span>
          <button className="rem_btn" onClick={() => handleRemove(idx)}>
            <ImBin />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default List;
