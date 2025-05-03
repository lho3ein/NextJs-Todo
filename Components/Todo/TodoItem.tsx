"use client";

import { useTodoContext } from "../Context/TodoContext";
import DeleteBtn from "./DeleteBtn";
import DoneButton from "./Donebutton";
import TdStatus from "./Tdstatus";

export default function TodoItem() {
  const { Todos, isLoading } = useTodoContext();

  return (
    <>
      {isLoading ? (
        <tr>
          <td>Loading...</td>
        </tr>
      ) : (
        Todos?.map((item) => (
          <tr
            key={item.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              className="md:px-6 px-4 py-3 md:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.id}
            </th>
            <td className="md:px-6 px-4 py-3 md:py-4">{item.title}</td>
            <td className="md:px-6 pr-2 py-3 md:py-4 text-center">
              {item.body}
            </td>
            <TdStatus Todo={item} />
            <td className="md:px-6 px-4 py-3 md:py-4 text-sm flex md:flex-row flex-col gap-1 text-white">
              <DeleteBtn Todo={item} />
              <DoneButton Todo={item} />
            </td>
          </tr>
        ))
      )}
    </>
  );
}
