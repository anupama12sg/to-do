"use client";

import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <h1 className="bg-sky-500 p-10 text-5xl font-bold text-center">My To-Do List</h1>
      <form>
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
    </>
  );
};

export default Page;
