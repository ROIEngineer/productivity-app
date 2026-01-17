import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from "./components/TodoList";
import PomodoroTimer from "./components/PomodoroTimer";

function App() {

  return (
    <main>
      <PomodoroTimer />
      <TodoList />
    </main>
  );
}

export default App;
