import { useEffect, useState } from "react";
import { CardPokemon } from "./cardPokemon";
import { TypePokemon } from "./typePokemon";

import axios from "axios";
import Image from "next/image";
import { ModalPokemon } from "../modalPokemon";


export function ListCardPokemon() {

  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [pokemonById, setPokemonById] = useState("");
  const [typesPokemons, setTypesPokemons] = useState("");
  const [countPokemon, setCountPokemon] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pokemon) => {

    setPokemonById(pokemon)
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  const primeiraLetraMaiuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };



  useEffect(() => {
    async function listingPokemons() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0"
      );
      const results = response.data.results;
      console.log(results);
      const detailedPokemonInfo = await Promise.all(
        results.map(async (pokemon) => {
          const detailedResponse = await axios.get(pokemon.url);
          console.log(detailedResponse.data);
          return detailedResponse.data;
        })
      );
      setPokemonInfo(detailedPokemonInfo);
      setCountPokemon(response.data.count);
    }
    listingPokemons();
  }, []);

  useEffect(() => {
    async function listingTypesPokes() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/type"
      );
      const results = response.data.results;
      // console.log(results)
      setTypesPokemons(results);
    }
    listingTypesPokes();
  }, [])


  return (
    <section className="s-all-info-pokemons">
      <div className="container">
        <div className="top">
          <h2>Select your Pokémon</h2>
          <div className="search">
            <input type="text" placeholder="Search name or code" />
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
              {
                typesPokemons &&
                typesPokemons.map((poketypes, index) => {
                  const getImageByType = () => {
                    const type = poketypes.name;
                    return `./assets/icon-types/${type}.svg`;
                  };
                  if (index < 18) {
                    return (
                      <TypePokemon
                        key={index}
                        typePoke={poketypes.name}
                        imageSrc={getImageByType()}
                        nameType={primeiraLetraMaiuscula(poketypes.name)}
                      />)
                  }
                })
              }
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
                <span>
                  <strong className="countPokemons">{countPokemon} </strong>{" "}
                  Pokémons
                </span>
              </div>
            </div>
            <div className="all">
              {pokemonInfo &&
                pokemonInfo.map((pokemon, index) => {
                  const getIconByType = () => {
                    const type = pokemon.types[0].type.name;
                    return `assets/icon-types/${type}.svg`;
                  };
                  return (
                    <CardPokemon
                      key={index}
                      type={pokemon.types[0].type.name}
                      image={pokemon.sprites.other.dream_world.front_default}
                      id={pokemon.id}
                      name={primeiraLetraMaiuscula(pokemon.name)}
                      icon={getIconByType()}
                      fnOnClick={() => openModal(pokemon)}
                    />
                  );
                })}

              {
                isModalOpen && 
                <ModalPokemon
                  imagePoke={pokemonById.sprites.other.dream_world.front_default}
                  namePoke={primeiraLetraMaiuscula(pokemonById.name)}
                  id={pokemonById.id}
                  typePoke={pokemonById.types[0].type.name}
                  typePoke2={pokemonById.types[1].type.name}
                  abilities={primeiraLetraMaiuscula(pokemonById.abilities[0].ability.name)}
                  weight={pokemonById.weight}
                  height={pokemonById.height}
                  onClose={closeModal} />
              }
            </div>
            <button className="btnLoadMore">Load more Pokémons</button>
          </div>
        </div>
      </div>
    </section>
  );
}
