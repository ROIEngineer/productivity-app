import { useState } from 'react'
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
