
export function ModalPokemon() {
  return (
    <div className="modal" typePokemonMOdal = "grass">
      <div className="overlay"></div>

      <div className="box">
        <button className="close">
           <img src="assets/close.svg"></img> 
        </button>
      

      <div className="leftContainer">
        <div className="icon">
          <img src="assets/icon-types/grass.svg"></img>
        </div>
        <div className="image">
          <img src="assets/bulbasaur.svg">
          </img>

        </div>
      </div>

      <div className="rightContainer">
        <div className="name">
          <h2>Bulbasaur</h2>
          <span>#001</span>
        </div>
        <ul className="type">
          <li>
            <span className="tagType grass">Grass</span>
          </li>
          <li>
            <span className="tagType poison">Poison</span>
          </li>
        </ul>
        <ul className="info">
          <li>
            <span>Height</span>
            <strong>0.7m</strong>
          </li>
          <li>
            <span>Weight</span>
            <strong>6.9kg</strong>
          </li>
          <li>
            <span>Abilities</span>
            <strong>Overgrow</strong>
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
          <div className="all">
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