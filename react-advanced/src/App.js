import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { InputState } from "./useState/inputState";
import { FilterableList } from "./useState/sharingState/filteringList";
import { SyncedInputs } from "./useState/sharingState/syncedInputs";
import { MailStar } from "./useState/stateStructure/duplicationState";
import { MailClient } from "./useState/stateStructure/multipleSelection";
import { TravelPlan } from "./useState/stateStructure/redundantState";
import { InputText } from "./useState/preserving-resetting/inputText";
import { SwapField } from "./useState/preserving-resetting/swapField";
import { ContactManager } from "./useState/preserving-resetting/detailForm";
import { ContactList } from "./useState/preserving-resetting/contactList";
import { Messenger } from "./useReducer/messenger";
import { ImageList } from "./useContext/imageList";
import { TaskApp } from "./TaskApp";
import { Stopwatch } from "./useRef/stopwatch";
import { Chat } from "./useRef/inputChat";
import { CatFriends } from "./useRef/dom-with-ref/scrollImg";
import { SearchPage } from "./useRef/dom-with-ref/focusInput";
import { MyForm } from "./useEffect/input";
import { FormCounter } from "./useEffect/counter";
import { TodoList } from "./useEffect/notUseEffect/todoList";
import { Contact } from "./useEffect/notUseEffect/contact";
import { Position } from "./useEffect/lifecycleOfEffect/position";
import { OptionPage } from "./useEffect/lifecycleOfEffect/selectBoxes/index";
import { Counter } from "./customHooks/counter";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/input-state">Input State</Link>
          </li>
          <li>
            <Link to="/structure-state">Structure State</Link>
          </li>
          <li>
            <Link to="/sharing-state">Sharing State</Link>
          </li>
          <li>
            <Link to="/preserving-resetting-state">
              Preserving And Resetting State
            </Link>
          </li>
          <li>
            <Link to="/passing-data-with-context">
              Passing Data With Context
            </Link>
          </li>
          <li>
            <Link to="/extracting-logic-state">Extracting Logic State</Link>
          </li>
          <li>
            <Link to="/combining-reducer-with-context">
              Combining Reducer with Context
            </Link>
          </li>
          <li>
            <Link to="/referencing-values-with-refs">
              Referencing Values with Refs
            </Link>
          </li>
          <li>
            <Link to="/manipulating-DOM-with-refs">
              Manipulating the DOM with Refs
            </Link>
          </li>
          <li>
            <Link to="/synchronizing-with-effects">
              Synchronizing with Effects
            </Link>
          </li>
          <li>
            <Link to="/not-need-effect">You might not need an Effect</Link>
          </li>
          <li>
            <Link to="/lifecycle-of-effect">Lifecycle of Reactive Effects</Link>
          </li>
          <li>
            <Link to="/reusing-logic-with-custom-hooks">
              Reusing Logic with Custom Hooks
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/input-state" element={<InputState />} />
        <Route
          path="/structure-state"
          element={
            <>
              <TravelPlan />
              <MailStar />
              <MailClient />
            </>
          }
        />
        <Route
          path="/sharing-state"
          element={
            <>
              <SyncedInputs />
              <br></br>
              <FilterableList />
            </>
          }
        />
        <Route
          path="/preserving-resetting-state"
          element={
            <>
              <InputText />
              <br></br>
              <SwapField />
              <ContactManager />
              <ContactList />
            </>
          }
        />
        <Route path="/extracting-logic-state" element={<Messenger />} />
        <Route path="/passing-data-with-context" element={<ImageList />} />
        <Route path="/combining-reducer-with-context" element={<TaskApp />} />
        <Route
          path="/referencing-values-with-refs"
          element={
            <>
              <Stopwatch />
              <Chat />
            </>
          }
        />
        <Route
          path="/manipulating-DOM-with-refs"
          element={
            <>
              <CatFriends />
              <SearchPage />
            </>
          }
        />
        <Route
          path="/synchronizing-with-effects"
          element={
            <>
              <MyForm />
              <FormCounter />
            </>
          }
        />
        <Route
          path="/not-need-effect"
          element={
            <>
              <TodoList />
              <Contact />
            </>
          }
        />
        <Route
          path="/lifecycle-of-effect"
          element={
            <>
              <Position />
              <OptionPage />
            </>
          }
        />
        <Route
          path="/reusing-logic-with-custom-hooks"
          element={
            <>
              <Counter />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
