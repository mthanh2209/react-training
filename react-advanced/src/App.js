import "./App.css";
import InputState from "./useState/inputState";
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
    </>
  )
}

export default App;
