"use client";
import { Analytics } from "@vercel/analytics/next"
import { useState } from "react";


export default function Top(){
  const[progress, setProgress]=useState(0);
  const [taskName, setTaskName] = useState("");


  return<div>

    <h1>タスク管理</h1>



    <div>
      <h2>タスク名：{taskName||"タスク名が入力されてません。"}</h2>
      <input 
      type="text" 
      placeholder="タスク名を入力してください。" 
      value={taskName} 
      onChange={(i)=> setTaskName(i.target.value)} 
      />

      <p>タスク進捗度：{progress}%</p>
    </div>


     <div style={{ marginTop: "10px" }}>
          <button onClick={() => setProgress(progress + 10)}>
            +10%
          </button>
          <button onClick={() => setProgress(progress - 10)}>
            -10%
          </button>
        </div>


      </div>
}