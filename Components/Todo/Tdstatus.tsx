"use client";

import { postt } from "../Context/TodoContext";

export default function TdStatus({ Todo }: { Todo: postt }) {
  return <td className="pr-1 pl-5 py-4">{Todo.status ? "✅" : "❌"}</td>;
}
