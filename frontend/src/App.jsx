import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from "./components/TodoList";
import PomodoroTimer from "./components/PomodoroTimer";
import NotesList from "./components/NotesList";

function App() {

  return (
    <main>
      <PomodoroTimer />
      <TodoList />
      <NotesList />
    </main>
  );
}

export default App;
