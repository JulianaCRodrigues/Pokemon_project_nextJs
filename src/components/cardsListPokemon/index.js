import { CardPokemon } from "../cardPokemon";

export function ListCardPokemon() {
  return (
    <section className="s-all-info-pokemons">
      <div className="container">
        <div className="top">
          <h2>Select your Pokémon</h2>
          <div className="search">
            <input type="text" placeholder="Search name or code" id="js-input-search" />
            <button type="button" id="js-btn-search">
              <img src="assets/icon-search.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="area-all">
          <div className="left-container">
            <ul>
              <li>
                <button className="typeFilter all active">
                  <div className="icon">
                    <img src="assets/icon-all.svg" alt=""/>
                  </div>
                  <span>All</span>
                </button>
              </li>
              <li>
                <button className="typeFilter fire">
                  <div className="icon">
                    <img src="assets/icon-types/fire.svg" alt=""/>
                  </div>
                  <span>Fire</span>
                </button>
              </li>
            </ul>

          </div>
          <div className="right-container">
            <div className="top-container">
                <div>
                  <img src="assets/icon-pokeball.svg"></img>
                  <span><strong className="countPokemons">150 </strong> Pokémons</span>
                </div>
       
            </div>
            <div className="all">
              <CardPokemon />
              <CardPokemon />
              <CardPokemon />
              <CardPokemon />
              <CardPokemon />
            </div>
            <button className="btnLoadMore">Load more Pokémons</button>
          </div>

        </div>

      </div>

    </section>
  )
}