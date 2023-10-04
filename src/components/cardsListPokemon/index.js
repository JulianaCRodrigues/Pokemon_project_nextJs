import { useEffect, useState } from "react";
import { CardPokemon } from "../cardPokemon";
import axios from "axios";
import Image from "next/image";


export function ListCardPokemon() {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  const primeiraLetraMaiuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    async function listingPokemons() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0');
      const results = response.data.results;
      const detailedPokemonInfo = await Promise.all(
        results.map(async (pokemon) => {
          const detailedResponse = await axios.get(pokemon.url);
          console.log(detailedResponse.data.types)
          return detailedResponse.data;
      
        })
      );
      setPokemonInfo(detailedPokemonInfo);
    }
    listingPokemons();
  }, []);

  return (
    <section className="s-all-info-pokemons">
      <div className="container">
        <div className="top">
          <h2>Select your Pokémon</h2>
          <div className="search">
            <input type="text" placeholder="Search name or code" id="js-input-search" />
            <button type="button">
              <Image
                src="assets/icon-search.svg"
                alt=""
                width={29}
                height={39}
              />

            </button>
          </div>
        </div>

        <div className="area-all">
          <div className="left-container">
            <ul>
              <li>
                <button className="typeFilter all active">
                  <div className="icon">
                    <Image
                      src="assets/icon-all.svg"
                      alt=""
                      width={26}
                      height={26}
                    />

                  </div>
                  <span>All</span>
                </button>
              </li>
              <li>
                <button className="typeFilter fire">
                  <div className="icon">
                    <Image
                      src="assets/icon-types/fire.svg"
                      alt=""
                      width={26}
                      height={26}
                    />

                  </div>
                  <span>Fire</span>
                </button>
              </li>
            </ul>

          </div>
          <div className="right-container">
            <div className="top-container">
              <div>
                <Image
                  src="assets/icon-pokeball.svg"
                  alt=""
                  width={32}
                  height={32}
                />
                <span><strong className="countPokemons">150 </strong> Pokémons</span>
              </div>

            </div>
            <div className="all">
              {
                pokemonInfo && (
                  pokemonInfo.map((pokemon, index) => {
                    const getIconByType = (types) => {
                      const type = pokemon.types[0].type.name;
                      return `./assets/icon-types/${type}.svg`
                    }
                    return (
                      <CardPokemon
                      key={index}
                      type={pokemon.types[0].type.name}
                      image={pokemon.sprites.other.dream_world.front_default}
                      id={pokemon.id}
                      name={primeiraLetraMaiuscula(pokemon.name)}
                      icon={getIconByType()} 
                      />
                    )
                  }
                  ))}
            </div>
            <button className="btnLoadMore">Load more Pokémons</button>
          </div>
        </div>
      </div>
    </section>
  )
}