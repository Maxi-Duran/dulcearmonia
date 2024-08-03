import List from "./components/List.tsx";
import Intro from "./components/Intro.tsx";

import Contact from "./components/Contact.tsx";

function App() {
  return (
    <div className=" min-h-screen ">
      <Intro />
      <List />
      <Contact />
    </div>
  );
}

export default App;
