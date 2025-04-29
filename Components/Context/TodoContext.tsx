"use client";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect } from "react";
export type postt = {
  id: number;
  title: string;
  body: string;
  status: boolean;
};
type cntxt = {
  Todos: postt[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

export const TodoContext = createContext<cntxt>({
  Todos: [],
  isLoading: false || true,
  isError: false || true,
});

export function TodoContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, isLoading, isError, isRefetching, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch(
        "https://6624413d04457d4aaf9bf32a.mockapi.io/todos"
      );
      const data = await res.json();
      if (res.ok) return data as postt[];
    },
    staleTime: Infinity,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <TodoContext.Provider
      value={{
        Todos: data,
        isLoading: isLoading || isRefetching,
        isError,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// Custom Hook for easy use
export function useTodoContext() {
  return useContext(TodoContext);
}
