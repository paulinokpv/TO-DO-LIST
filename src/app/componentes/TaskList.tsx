interface Task {
    id: number;
    text: string;
    completed: boolean;
}
function TaskList({ tasks, onDeleteTask }: {tasks:Task[], onDeleteTask:(id:number) => void}){
    
    return (
        <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-2 bg-white mt-5"> {/* Flexbox para alinhar o texto e o botão */}
            <span>{task.text}</span> {/* O texto da tarefa */}
            <button 
              className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition-all duration-300"
              onClick={() => { onDeleteTask(task.id) }}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
      
    );
};
export default TaskList;