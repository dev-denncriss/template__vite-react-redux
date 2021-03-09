import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllQuotes } from "../redux/actions/TodosActions";

const Todos = () => {
  const { quotes } = useSelector((store) => store.quoteWally);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunkGetAllQuotes());
  }, []);

  return (
    <div>
      <h2>quotes:</h2>
      <ul>
        {quotes?.map((todo) => (
          <li key={todo._id}>{todo.quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
