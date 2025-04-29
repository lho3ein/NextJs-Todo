// import TodoItem from "@/Components/Todo/TodoItem";
import FormAddTodo from "@/Components/Todo/FormAddTodo";
import dynamic from "next/dynamic";
const TodoItem = dynamic(() => import("@/Components/Todo/TodoItem"), {
  ssr: false,
});
export default function Todo() {
  return (
    <>
      <FormAddTodo />

      <div className="relative container mx-auto overflow-x-auto mt-16">
        <table className="w-[70%] mx-auto text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="pl-6 pr-2 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-3 py-3">
                Status
              </th>
              <th scope="col" className="pr-6 pl-14 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <TodoItem />
          </tbody>
        </table>
      </div>
    </>
  );
}
