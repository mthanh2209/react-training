import './App.css';
import './components/style.css'
import ExampleLink from './components/Link';
import FilterableProductTable from './components/ThinkInReact/FilterableProductTable';
import Scientists from './components/PropsExample/Profile';
import Profile from './components/PropsExample/Children';
import Counter from './components/HookExample/UseReducer';
import Todo from './components/HookExample/Todo';
import TodoList from './components/HookExample/TodoList/TodoList';
import UseContext from './components/HookExample/UseContext';
import PlayVideo from './components/HookExample/UseRef';
import AddList from './components/ArrayExample/AddArray';
import DeleteList from './components/ArrayExample/DeleteArray';
import ShapeEditor from './components/ArrayExample/TransformArray';
import CounterList from './components/ArrayExample/ReplaceArray';
import InsertList from './components/ArrayExample/InsertArray';
import BucketList from './components/ArrayExample/ObjsInArray';
import { Gallery, Form, FeedbackForm } from './components/HookExample/UseState';
import { PoemList, RecipeList, ScientistsList } from './components/RenderExample/RederingList';

import { Routes, Route } from "react-router-dom";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ExampleLink />} />

        <Route path="/thinkInReact" element={<FilterableProductTable products={PRODUCTS} />} />

        <Route path="/hookExample" element={
          <>
            <u><h1>USE STATE</h1></u>
            <h1>Challenge 1: </h1>
            <Gallery />
            <br></br>
            <h1>Challenge 2: </h1>
            <Form />
            <br></br>
            <h1>Challenge 3: </h1>
            <FeedbackForm />
            <br></br>
            <h1>Challenge 4: </h1>
            <Todo />
            <br></br>

            <u><h1>USE REDUCER</h1></u>
            <h1>Challenge 1: </h1>
            <Counter />
            <br></br>
            <h1>Challenge 2: </h1>
            <TodoList />

            <u><h1>USE CONTEXT</h1></u>
            <h1>Example 1: </h1>
            <UseContext />

            <u><h1>USE REF</h1></u>
            <h1>Example 1: </h1>
            <PlayVideo />
          </>
        } />

        <Route path="/propsExample" element={
          <>
            <br></br>
            <h1>Challenge 1: </h1>
            <Scientists />
            <br></br>
            <h1>Challenge 2: </h1>
            <Profile />
          </>
        } />

        <Route path="/renderingLists" element={
          <>
            <h1>Challenge 1: </h1>
            <ScientistsList />
            <br></br>
            <h1>Challenge 2: </h1>
            <RecipeList />
            <br></br>
            <h1>Challenge 3: </h1>
            <PoemList />
          </>
        } />

        <Route path="/arrayExample" element={
          <>
            <AddList />
            <DeleteList />
            <ShapeEditor />
            <CounterList />
            <InsertList />
            <BucketList />
          </>
        } />
      </Routes>
    </>
  )
}