import Image from "next/image";

export function SelectCustom({ typePoke, nameType, fnOnClick, activeType, idType, imageSrc }) {
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
            width={26}
            height={26}
            alt=""
          />
        </div>
        <span>{nameType}</span>
      </button>
    </li>
  )
}