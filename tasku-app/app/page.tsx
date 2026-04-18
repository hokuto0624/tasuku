"use client";
import style from "./page.module.css";
import { Analytics } from "@vercel/analytics/next"
import { useState, useEffect } from "react";
import Pjname from "@/components/pj_name";
import Progress from "@/components/progress"

export default function Top(){
  const [projectName, setProjectName] = useState("");
  const [taskName, setTaskName] = useState("");


  const [tasks, setTasks] = useState([
    { id: 1, text: "タスクA", status: "todo" },
    { id: 2, text: "タスクB", status: "todo" }
  ]);

  // 未完了 → 実行中
  const startTask = (id) => {
    setTasks(prev =>
  prev.map(task =>
    task.id === id ? { ...task, status: "running" } : task
  )
);
  };
  // 実行中 → 完了
  const completeTask = (id) => {
  setTasks(prev =>
    prev.map(task =>
      task.id === id ? { ...task, status: "done" } : task
    )
  );
};

  const todoTasks = tasks.filter(t => t.status === "todo");
  const runningTasks = tasks.filter(t => t.status === "running");
  const doneTasks = tasks.filter(t => t.status === "done");


  const addTask = () => {
  if (!taskName) return;

  setTasks(prev => [
    ...prev,
    { id: Date.now(), text: taskName, status: "todo" }
  ]);

  setTaskName("");
};





const totalTasks = tasks.length;
const doneTasksCount = tasks.filter(t => t.status === "done").length;
const progress = totalTasks === 0
  ? 0
  : Math.floor((doneTasksCount / totalTasks) * 100);
  // const[progress, setProgress]=useState(0);


  return<div>

    <h1>タスク管理</h1>



    <div>
     {/* プロジェクト名入力*/}
      <Pjname name={projectName} />
      <input 
      type="text" 
      placeholder="pj名の変更" 
      value={projectName} 
      onChange={(e)=> setProjectName(e.target.value)}
      />
      
      {/*進捗率 */}
      <Progress progress={progress}/>
      {progress ===100 ? "全て完了": ""}

    </div>



       <main className="tasks">

      <div className="comp_task">
        <h2>完了したタスク</h2>
        {doneTasks.map(task => (
          <div key={task.id}>{task.text}</div>
        ))}
      </div>




      <div className="run_task">
        <h2>実行中のタスク</h2>
        {runningTasks.map(task => (
          <div key={task.id}>
            {task.text}
            <button onClick={() => completeTask(task.id)}>
              完了
            </button>
          </div>
        ))}
      </div>




      <div className="lncomp_task">
        <h2>未完了のタスク</h2>
        {todoTasks.map(task => (
          <div key={task.id}>
            {task.text}
            <button onClick={() => startTask(task.id)}>
              開始
            </button>
          </div>
        ))}
      </div>


      <input
  type="text"
  placeholder="タスクを入力"
  value={taskName}
  onChange={(e) => setTaskName(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && addTask()}
/>

<button onClick={addTask}>タスク追加</button>

    </main>

      </div>
}