import Link from "next/link";

export default function Home() {
    return (
      <nav>
        <Link href = "/">Home </Link>
        <Link href = "/appetizer">Apps </Link>
        <Link href = "/entree">Entree </Link>
      </nav>
    );
  }