import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useCreateItemMutation, useGetItemsQuery } from "./redux/slices/api";
import { decrement, increment } from "./redux/slices/counter";

function App() {
  const state = useAppSelector((s) => s.counter);
  const dispatch = useAppDispatch();
  const [createItem] = useCreateItemMutation();
  const { data, error, isLoading } = useGetItemsQuery();
  if (error) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello from Arpit Blagan.</h1>
      <h4>Counter state: {state}</h4>
      <h4>Post length: {data.length}</h4>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(increment());
        }}
      >
        Increase count
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(decrement());
        }}
      >
        Decrease count
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          createItem({ cool: "okok" });
        }}
      >
        Create a new item
      </button>
    </div>
  );
}

export default App;
