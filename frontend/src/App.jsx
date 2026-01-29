import './styles.css';
import TodoList from "./components/TodoList";
import PomodoroTimer from "./components/PomodoroTimer";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className="app">
      <main>
        <div className="card pomodoro">
          <PomodoroTimer />
        </div>
        <div className="card">
          <TodoList />
        </div>
        <div className="card">
          <NotesList />
        </div>
      </main>
    </div>
  );
}

export default App;
