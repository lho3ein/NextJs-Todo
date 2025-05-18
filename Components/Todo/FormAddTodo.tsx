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
  const [statusWarning, setStatusWarning] = useState(false);

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
    if ((title && body).length > 0) {
      await mutateAsync();
      setBody("");
      setTitle("");
    } else {
      setStatusWarning(true);
    }
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
        onChange={(e) => (setStatusWarning(false), setTitle(e.target.value))}
        placeholder="Enter title :"
        className="border-2 w-full px-3 py-2 rounded-md"
      />
      <textarea
        name="description"
        placeholder="Enter description :"
        value={body}
        onChange={(e) => (setStatusWarning(false), setBody(e.target.value))}
        className="border-2 w-full px-3 py-2 rounded-md resize-none"
      ></textarea>
      <p
        className={`${
          statusWarning ? "block" : "hidden"
        } text-gray-500 text-sm self-center`}
      >
        Title and Body should not be empty
      </p>
      <button
        type="submit"
        disabled={statusWarning}
        className={`disabled:opacity-40 bg-indigo-600 hover:bg-indigo-700 text-white self-center rounded-md bg-opacity-85 py-2 px-5`}
      >
        Add Post
      </button>
    </form>
  );
}
