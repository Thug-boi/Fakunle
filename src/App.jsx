import NameForm from "./assets/components/SimpleForm";
import ToggleApp from "./assets/components/Toggle";
import Changecolor from "./assets/components/changecolor";
import CounterApp from "./assets/components/counter";

const App = () => {
  // let name = "Ana";
  // const amount = 1000;
  // let link = "https://www.Goggle.com";
  // console.log(name);//jay
  // let num1 = 24;
  // let num2 = 19;
  return (
    <div className="App">
      {/* <h1>Creating Simple Apps</h1>
      <h2>Welcome {name}</h2>
      <p>Num1 +Num2 = {num1 + num2}</p>
      <a href={link} target="_blank">buy now</a> */}

      <ToggleApp />
      <Changecolor />
      <CounterApp />
      <NameForm/>
    </div>
  );
};

export default App;
