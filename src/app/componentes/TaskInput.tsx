import { useState } from "react"
function TaskInput({ onAddTask }: { onAddTask: (task: string) => void }){
    const [input, setInput] = useState('');
    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (input.trim()){
            onAddTask(input);
            setInput('');
          };
    };
    return (
       <form onSubmit={handlesubmit} className="w-full mt-10 flex">
        <input className="p-2 w-full grow" type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Adicione uma nova tarefa"/>
        <button className="w-32 ml-2 bg-white rounded-xl p-2 bg-green-700 hover:bg-green-300 hover:text-white transition-all duration-1000 font-bold" type="submit">ADICIONAR</button>
       </form>
    );
};
export default TaskInput;