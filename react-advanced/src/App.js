import "./App.css";
import { InputState } from "./useState/inputState";
import { FilterableList } from "./useState/sharingState/filteringList";
import { SyncedInputs } from "./useState/sharingState/syncedInputs";
import { MailStar } from "./useState/stateStructure/duplicationState";
import { MailClient } from "./useState/stateStructure/multipleSelection";
import { TravelPlan } from './useState/stateStructure/redundantState';

function App() {
  return (
    <>
      <InputState/>
      <TravelPlan/>
      <MailStar/>
      <MailClient/>
      <SyncedInputs/>
      <FilterableList/>
    </>
  )
}

export default App;
