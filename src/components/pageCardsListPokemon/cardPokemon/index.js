import Image from "next/image";



export function CardPokemon({ image, id, name, icon, type }) {
  return (
    <>
      <button className={`cardPokemon  ${type}`}>

        <div className="image ">
          <Image
            src={image}
            width={142}
            height={200}
            alt="Imagem Pokemon"
          />
        </div>
        <div className="info">
          <div className="text">
            <span>
              {(id < 10) ? `#00${id}` : (id < 100) ? `#0${id}` : `#00${id}`}
            </span>
            <h3 className="h3">{name}</h3>
          </div>
          <div className="icon">
            <Image
              src={icon}
              width={28}
              height={28}
              alt="type pokemon"
            />
          </div>
        </div>
      </button>

    </>
  )
}

