"use client";
import { postt } from "@/Components/Context/TodoContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const DoneButton = ({ Todo }: { Todo: postt }) => {
  const queryClient = useQueryClient();
  // const { Todos } = useTodoContext();

  // const newTodos = Todos?.map((item) => {
  //   if (item.id == Todo.id) {
  //     item.status = !item.status;
  //   }
  //   return item;
  // });
  // const itemChanged = newTodos?.find((item) => item.id == Todo.id);

  const putTodo = async () => {
    await fetch(
      `https://6624413d04457d4aaf9bf32a.mockapi.io/todos/${Todo.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: !Todo.status }),
      }
    );
  };
  const { mutate } = useMutation({
    mutationFn: putTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });
  const onClickHandler = () => {
    // try {
    //   await mutateAsync();
    // } catch (error) {
    //   console.log(error);
    // }
    mutate();
  };

  return (
    <button
      type="button"
      onClick={onClickHandler}
      className={`${
        Todo.status
          ? "bg-stone-500 hover:bg-stone-700"
          : "bg-green-500 hover:bg-green-700"
      } px-2 py-1 rounded-md`}
    >
      {Todo.status ? "undone" : "done"}
    </button>
  );
};
export default DoneButton;
