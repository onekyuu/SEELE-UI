import "./App.css";
import { Button } from "seele-ui";

function App() {
  return (
    <>
      <Button>Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="text">Text Button</Button>
      <Button variant="danger">Danger Button</Button>
      <div
        style={{
          display: "flex",
          gap: "10px",
          backgroundColor: "#f0f0f0",
          padding: "10px",
        }}
      >
        <Button variant="ghost">Ghost Button</Button>
      </div>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
      <Button rounded="sm">Rounded Small Button</Button>
      <Button rounded="md">Rounded Medium Button</Button>
      <Button rounded="lg">Rounded Large Button</Button>
      <Button loading>Loading Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button icon={<span>🔍</span>}>Button with Icon</Button>
    </>
  );
}

export default App;
