import React, { useEffect } from "react";
import { useDataContext } from "./DataProvider";
import { ACTION } from "./reducer";
import { sampleData } from "./helperFunction";

function App() {
  const [{ items }, dispatch] = useDataContext();
  useEffect(() => {
    dispatch({
      type: ACTION.SET_ITEMS,
      items: sampleData,
    });
  }, [dispatch]);
  console.log(items);
  return (
    <div>
      {items.map(({ title, image, id }) => (
        <div key={id}>
          <img src={image} alt={title} />
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
