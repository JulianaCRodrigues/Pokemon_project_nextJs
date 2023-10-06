import Image from "next/image";
import Link from "next/link";


export function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='text'>
          <h3 className="h3">Modulo NextJs</h3>
          <p>Consumindo e exibindo dados de uma API</p>
        </div>
        <Link href="" target="_blank">
          <Image src="assets/codeboost.svg" width={171} height={42} alt=""/>
        </Link>
      </div>
    </footer>

  )
}