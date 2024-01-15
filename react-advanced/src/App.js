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

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/inputState">Input State</Link>
          </li>
          <li>
            <Link to="/structureState">Structure State</Link>
          </li>
          <li>
            <Link to="/sharingState">Sharing State</Link>
          </li>
          <li>
            <Link to="/preservingAndResettingState">
              Preserving And Resetting State
            </Link>
          </li>
          <li>
            <Link to="/passingDataWithContext">Passing Data With Context</Link>
          </li>
          <li>
            <Link to="/extractingLogicState">Extracting Logic State</Link>
          </li>
          <li>
            <Link to="/combiningReducerWithContext">
              Combining Reducer with Context
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/inputState" element={<InputState />} />
        <Route
          path="/structureState"
          element={
            <>
              <TravelPlan />
              <MailStar />
              <MailClient />
            </>
          }
        />
        <Route
          path="/sharingState"
          element={
            <>
              <SyncedInputs />
              <br></br>
              <FilterableList />
            </>
          }
        />
        <Route
          path="/preservingAndResettingState"
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
        <Route path="/extractingLogicState" element={<Messenger />} />
        <Route path="/passingDataWithContext" element={<ImageList />} />
        <Route path="/combiningReducerWithContext" element={<TaskApp />} />
      </Routes>
    </Router>
  );
};

export default App;
