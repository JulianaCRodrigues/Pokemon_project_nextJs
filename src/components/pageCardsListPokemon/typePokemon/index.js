import Image from "next/image";

export function TypePokemon({ typePoke, nameType, imageSrc, fnOnClick, idType }) {
  return (

      <li>
        <button className={`typeFilter ${typePoke} `} datatype={idType} onClick={fnOnClick}>
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