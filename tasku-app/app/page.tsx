"use client";
import { Analytics } from "@vercel/analytics/next"
import { useState } from "react";


export default function Top(){
  const[progress, setProgress]=useState(0);
  const [taskName, setTaskName] = useState("");


  return<div>

    <h1>タスク管理</h1>



    <div>
      <h2>プロジェクト名：{taskName||"プロジェクト名が入力されてません。"}</h2>
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


      </div>
}