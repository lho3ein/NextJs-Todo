"use client";
export type newpostt = {
  title: string;
  body: string;
  status: boolean;
};
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

export default function FormAddTodo() {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const newItem: newpostt = {
    title: title,
    body: body,
    status: false,
  };
  const postData = async () =>
    await fetch(`https://6624413d04457d4aaf9bf32a.mockapi.io/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
  const { mutateAsync } = useMutation({
    mutationFn: postData,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutateAsync();
    setBody("");
    setTitle("");
  };
  return (
    <form
      className="flex flex-col items-start gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title :"
        className="border-2 w-full px-3 py-2 rounded-md"
      />
      <textarea
        name="description"
        placeholder="Enter description :"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="border-2 w-full px-3 py-2 rounded-md resize-none"
      ></textarea>
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white self-center rounded-md bg-opacity-85 py-2 px-5"
      >
        Add Post
      </button>
    </form>
  );
}
