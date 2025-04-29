import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex py-3 justify-around">
      <h1 className="text-lg font-bold">Todo APP</h1>
      <ul className="flex gap-10 font-semibold">
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
