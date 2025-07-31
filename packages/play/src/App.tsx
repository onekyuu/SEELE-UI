import "./App.css";
import { Button, Icon } from "seele-ui";
import { faCoffee, faSpinner } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <Icon icon={faCoffee} type="success" size="3x" />
      <Icon icon={faSpinner} type="danger" size="3x" />
      <Icon icon={faSpinner} type="warning" size="3x" />
      <Icon icon={faSpinner} type="primary" size="3x" />
      <Icon icon={faSpinner} type="info" size="3x" />
    </>
  );
}

export default App;
