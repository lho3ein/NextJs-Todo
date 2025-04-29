"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postt } from "../Context/TodoContext";

export default function DeleteBtn({ Todo }: { Todo: postt }) {
  const queryClient = useQueryClient();

  const deletData = async () => {
    await fetch(
      `https://6624413d04457d4aaf9bf32a.mockapi.io/todos/${Todo.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: null,
      }
    );
  };

  const { mutateAsync } = useMutation({
    mutationFn: deletData,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  return (
    <button
      type="button"
      className="bg-red-500 hover:bg-red-700 px-2 py-1 rounded-md"
      onClick={async () => await mutateAsync()}
    >
      delete
    </button>
  );
}
