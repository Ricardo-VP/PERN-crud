import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/tasks/new" element={<TaskForm />} />
        {/* Falta ruta editar */}
      </Routes>
    </BrowserRouter>
  );
}
