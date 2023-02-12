import { useState, useRef } from "react";
import List from "./List";

function Createlist() {
  const [list, setList] = useState([]);
  const listText = useRef("");

  const handleSubmit = () => {
    if(listText.current.value==null || listText.current.value === "" || listText.current.value == undefined ){
        alert("Please enter the item");
    }
    else{
    setList([...list, listText.current.value]);
    listText.current.value = "";
    }
  };

  return (
    <div>
      <div className="outer-div">
        <section className="inputSection">
          <input
            type="text"
            placeholder="What's your task today!"
            ref={listText}
            onChange={(e) => (listText.current.value = e.target.value)}
          ></input>
          <button className="btn-main" onClick={handleSubmit}>Add to List</button>
        </section>
      </div>

      <section className="listSection">
        <List list={list} setList={setList} />
      </section>
    </div>
  );
}

export default Createlist;
