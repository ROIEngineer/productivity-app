import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Open database
const db = await open({
  filename: "./db/todos.db",
  driver: sqlite3.Database,
});

// Create Todos table if it doesn’t exist
await db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed INTEGER NOT NULL DEFAULT 0
  )
`);

// Create Notes table if it doesn't exist
await db.exec(`
  CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    updated_at TEXT NOT NULL
  )
`);


export default db;
