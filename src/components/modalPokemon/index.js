import Image from "next/image";


export function ModalPokemon({index,onClose =() => {},id, imagePoke, namePoke, typePoke, typePoke2, abilities, height,weight}) {

  const handleOutsideClick = (event) => {
    //TODO:  console.log('Clicked on', event.target.id);
    if (event.target.id === index) {
      onClose();
    }
  }

  const primeiraLetraMaiuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div id={index} className="modal" typePokemonModal ={typePoke} onClick={handleOutsideClick}>
      <div className="overlay"></div>
      <div className="box">
        <button className="close" onClick={onClose}>
          <div>
               <Image 
             src="/assets/close.svg"
             width={36}
             height={36}
             alt="imagem x"
        /> 
          </div>
     
        </button>
      

      <div className="leftContainer">

      <div className="icon">
        <Image 
        src={`/assets/icon-types/${typePoke}.svg`}
        alt=""
        width={20}
        height={20}
        />
      </div>
      <div className="image">
        <Image 
        src={imagePoke}
        alt=""
        width={202}
        height={202}
        />
      </div>
      </div>

      <div className="rightContainer">
        <div className="name">
          <h2>{namePoke}</h2>
          <span>  {(id < 10) ? `#00${id}` : (id < 100) ? `#0${id}` : `#00${id}`}</span>
        </div>
        <ul className="type">
          <li>
            <span className={`tagType ${typePoke}`}>
          {primeiraLetraMaiuscula(typePoke)}
           </span>
          </li>
          <li>
            <span className={`tagType ${typePoke2}`}>
            {primeiraLetraMaiuscula(typePoke2)}
            </span>
          </li>
        </ul>
        <ul className="info">
          <li>
            <span>Height</span>
            <strong>{`${height/10}m`}</strong>
          </li>
          <li>
            <span>Weight</span>
            <strong>{`${weight/10}kg`}</strong>
          </li>
          <li>
            <span>Abilities</span>
            <strong>{abilities}</strong>
          </li>
        </ul>

        <div className="weak">
          <h4>Weaknesses</h4>
          <ul>
            <li>
              <span className="tagType fire">Fire</span>
            </li>
            <li>
               <span className="tagType psychic">Psychic</span>
            </li>
            <li>
                <span className="tagType flying">Flying</span>
            </li>
            <li>
                  <span className="tagType ice">Ice</span>
            </li>
          </ul>

        </div>

        <div className="stats">
          <h5>Stats</h5>
          <div className="allStats">
            <div className="item">
              <span>HP</span>
              <div className="barStatus">
                <div className="bar"></div>
                <ul className="separator">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
              </div>
            </div>

            <div className="item">
              <span>Attack</span>
              <div className="barStatus">
                <div className="bar"></div>
                <ul className="separator">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
              </div>
            </div>

            <div className="item">
              <span>Defense</span>
              <div className="barStatus">
                <div className="bar"></div>
                <ul className="separator">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
              </div>
            </div>

            <div className="item">
              <span>Sp. attack</span>
              <div className="barStatus">
                <div className="bar"></div>
                <ul className="separator">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
              </div>
            </div>

            <div className="item">
              <span>Sp. defense</span>
              <div className="barStatus">
                <div className="bar"></div>
                <ul className="separator">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
              </div>
            </div>

            <div className="item">
              <span>Speed</span>
              <div className="barStatus">
                <div className="bar"></div>
                <ul className="separator">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
              </div>
            </div>
          </div>
          

        </div>

      </div>

      </div>

    </div>
  )
}