import logo from "./logo.svg";
import "./App.css";

const title = "React";
//const welcome = { title: "React", greeting: "Hey" };

//function getTitle(title) {
//  return title;
//}

function App() {
  return (
    <div>
      <h1>Hello {title}</h1>
      {/*<h1>{welcome.greeting}, {welcome.title}</h1>*/}
      {/*<h1>Hello {getTitle("React")}</h1>*/}
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
