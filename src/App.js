import "./App.css";
import List from "./components/List";
import Search from "./components/Search";

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
      <Search />
      <hr />
      <List />
    </div>
  );
}

export default App;
