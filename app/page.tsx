import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex justify-center mt-24 px-2 ">
        <Link
          href="/todo"
          type="submit"
          className="bg-blue-700 text-white rounded-md bg-opacity-85 py-2 px-5"
        >
          Go Todo App
        </Link>
      </div>
    </>
  );
}
