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
                <button class="typeFilter active all">
                  <div class="icon">
                    <img src="assets/icon-all.svg" alt=""/>
                  </div>
                  <span>All</span>
                </button>
              </li>
            </ul>

          </div>
          <div className="right-container">
            <div className="top-container">
                <div>
                  <img src="assets/icon-pokeball.svg"></img>
                </div>
                <span><strong className="countPokemons">150 </strong> Pokémons</span>
            </div>
            <div className="all">
              <CardPokemon />
            </div>
            <button class="btnLoadMore">Load more Pokémons</button>
          </div>

        </div>

      </div>

    </section>
  )
}