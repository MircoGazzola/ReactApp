import './App.css';
import Subtitle from './components/SubTitle';
import Tasklist from './components/TaskList';
import Welcome from './components/Welcome';

function App() {
  const user = {
    name: "Roberto",
    surname: "Prampolini"
  }

  const list1 = [
    {title: "Task",
    completed: true},

    {title: "Task2",
    completed: true},

    {title: "Task3",
    completed: false},

    {title: "Task4",
    completed: false},
  ]
  if (list1 === undefined || list1.length === 0) {
    return  (
      <div className="App">
        <p>Non ci sono attività</p>
      </div>
    )
  }else{
    return (
      <div className="App">
        <Welcome user={user}/>
        <Subtitle/>
        <Tasklist tasks={list1}/>
      </div>
    );
  }
}

export default App;
