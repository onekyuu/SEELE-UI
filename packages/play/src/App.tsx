import "./App.css";
import { Button } from "seele-ui";

function App() {
  return (
    <>
      <Button
        variant="primary"
        size="lg"
        onClick={() => alert("Button Clicked!")}
      >
        Click Me
      </Button>
    </>
  );
}

export default App;
