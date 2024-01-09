import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { InputState } from "./useState/inputState";
import { FilterableList } from "./useState/sharingState/filteringList";
import { SyncedInputs } from "./useState/sharingState/syncedInputs";
import { MailStar } from "./useState/stateStructure/duplicationState";
import { MailClient } from "./useState/stateStructure/multipleSelection";
import { TravelPlan } from "./useState/stateStructure/redundantState";

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
      </Routes>
    </Router>
  );
};

export default App;
