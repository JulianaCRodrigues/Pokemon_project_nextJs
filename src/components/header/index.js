import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="container">
        <Link href="" target="_blank">
          <Image 
          src="assets/logo.svg" alt="Logo do Pokemon" title="Logo do Pokemon" width={159} height={58}
          />
        </Link>
        <p>Case Study</p>
      </div>
    </header>
  )
}