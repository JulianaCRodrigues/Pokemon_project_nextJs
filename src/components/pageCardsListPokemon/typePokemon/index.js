import Image from "next/image";

export function TypePokemon({ typePoke, nameType, imageSrc }) {
  return (

      <li>
        <button className={`typeFilter ${typePoke}`}>
          <div className="icon">
            <Image
              src={imageSrc}
              alt=""
              width={26}
              height={26}
            />
          </div>
          <span>{nameType}</span>
        </button>
      </li>


  )
}