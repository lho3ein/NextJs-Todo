import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex py-3 justify-around">
      <h1 className="md:text-lg font-bold">Todo App</h1>
      <ul className="flex md:gap-10 gap-4 text-sm md:text-base md:font-semibold">
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <Link href="#"> Products </Link>
        </li>
        <li>
          <Link href="#"> About </Link>
        </li>
        <li>
          <Link href="#"> Contact </Link>
        </li>
      </ul>
    </nav>
  );
}
