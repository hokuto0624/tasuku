"use client";
import { Analytics } from "@vercel/analytics/next"
import { useState } from "react";
import Pjname from "@/components/pj_name";

export default function Top(){
  const[progress, setProgress]=useState(0);
  const [taskName, setTaskName] = useState("");


  return<div>

    <h1>タスク管理</h1>



    <div>
      <Pjname name={taskName} />
      <input 
      type="text" 
      placeholder="pj名の変更" 
      value={taskName} 
      onChange={(i)=> setTaskName(i.target.value)} 
      />
      

      <p>タスク進捗度：{progress}%</p>
      {progress ===100 ? "全て完了": ""}

    </div>
     <div style={{ marginTop: "10px" }}>
          <button onClick={() => setProgress(progress + 10)}>
            +10%
          </button>
          <button onClick={() => setProgress(progress - 10)}>
            -10%
          </button>
      </div>

      <main className="tasks">
      <div className="comp_task">
        <h2>完了したタスク</h2>
      </div>


      <div className="run_task">
        <h2>実行中のタスク</h2>
      </div>


      <div className="lncomp_task">
        <h2>未完了のタスク</h2>
      </div>
      </main>

      </div>
}