"use client";

import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(e)
    setMainTask([...mainTask, { title, description }])
    setTitle("")
    setDescription("")
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task Available!!</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
          <div className="flex justify-between mb-5 w-2/3 ">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.description}</h6>
          </div>
          <button
            onClick={()=>{
              deleteHandler(i)
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold">
            Delete Task
          </button>
        </li>
      )
    });
  }

  return (
    <>
      <h1 className="bg-sky-500 p-10 text-5xl font-bold text-center">Anu's To-Do List</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-black border-zinc text-center border-4 m-8 px-2 py-2"
          placeholder="Enter task here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-black border-zinc text-center border-4 m-8 px-2 py-2"
          placeholder="Enter description here"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="bg-white text-black px-4 py-3 font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-purple-300">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
};

export default Page;
