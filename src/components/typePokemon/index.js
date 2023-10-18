import Image from "next/image";

export function TypePokemon({ typePoke, nameType, imageSrc, fnOnClick, activeType, idType }) {
  const isActive = typePoke === activeType;

  const handleClick = () => {
    fnOnClick(typePoke)
  }
  
  return (
    <li>
      <button className={`type-filter ${typePoke} ${isActive ? "active" : ""} `} onClick={handleClick} id={idType}>
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