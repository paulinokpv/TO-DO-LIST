import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
interface Task {
    id: number;
    text: string;
    completed: boolean;
}
function Task(){
    const [task, setTask] = useState<Task[]>([]);
    const addTask = (taskText: string) =>{
        const newTask: Task = {
            id: Date.now(),      // Gera um ID com base no timestamp atual
            text: taskText,      // O texto da nova tarefa
            completed: false     // Marca como não concluída
        };
       setTask([...task, newTask])
    };
    const DeleteTask = (TaskId: number) =>{
        setTask(task.filter(task => task.id !== TaskId))
    }
    return (
        <div className="flex flex-col w-2/5">
            <h1 className="mt-40 text-5xl text-white w-full font-bold">Lista de Tarefas</h1>
            <TaskInput onAddTask={addTask}/>
            <TaskList onDeleteTask={DeleteTask} tasks={task}/>
        </div>
    );
};
export default Task;