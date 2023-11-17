import './App.css';
import ExampleLink from './components/Link';
import FilterableProductTable from './components/ThinkInReact/FilterableProductTable';
import Scientists from './components/PropsExample/Profile';
import Profile from './components/PropsExample/Children';
import Todo from './components/HookExample/Todo';
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
      </Routes>
    </>
  )
}