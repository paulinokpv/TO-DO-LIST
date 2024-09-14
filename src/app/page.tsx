'use client'
import Task from "./componentes/Tasks";
export default function Home() {
  return (
    <div className="flex justify-around bg-header h-screen bg-no-repeat bg-top bg-background">
      <Task></Task>
    </div>
  );
}
