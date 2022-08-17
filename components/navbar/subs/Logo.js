import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"}>
      <p className="text-white text-2xl lg:text-3xl cursor-pointer">Nikhar</p>
    </Link>
  );
}
