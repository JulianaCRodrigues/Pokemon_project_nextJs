import { useEffect, useState } from "react";
import { CardPokemon } from "../cardPokemon";
import { TypePokemon } from "../typePokemon";
import { ModalPokemon } from "../modalPokemon";
import axios from "axios";
import Image from "next/image";

export function ListCardPokemon() {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [pokemonById, setPokemonById] = useState("");
  const [filteredPokemon, setFiltredPokemons] = useState([]);
  const [typesPokemons, setTypesPokemons] = useState([]);
  const [countPokemon, setCountPokemon] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pageList, setPageList] = useState(9)
  const [countPages, setCountPages] = useState(0);
  const [countType, setCountType] = useState(0);
  const [isActive, setIsActive] = useState('all')

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
    async function listingTypesPokes() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/type"
      );
      const results = response.data.results;
      const typeDetailsPoke = await Promise.all(
        results.map(async (pokemon) => {
          const typeDetailsResponse = await axios.get(pokemon.url);
          return {
            name: typeDetailsResponse.data.name,
            length: typeDetailsResponse.data.pokemon.length,
            id: typeDetailsResponse.data.id
          }
        })
      );
      setTypesPokemons(typeDetailsPoke);
    }
    listingTypesPokes();
  }, [])

  useEffect(() => {
    async function ListingAllPokemon() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${pageList}`
      );
      const results = response.data.results;
      const detailedPokemonInfo = await Promise.all(
        results.map(async (pokemon) => {
          const detailedResponse = await axios.get(pokemon.url);
          return detailedResponse.data;
        })
      );
      setPokemonInfo(detailedPokemonInfo);
      setCountPokemon(response.data.count);
    }
    ListingAllPokemon();
  }, [pageList]);

  async function filterTypePokemon(typePoke) {
    const type = typesPokemons.find((type) => type.name === typePoke);
    if (type) {
      const idPoke = type.name;
      const response = await axios.get(`https://pokeapi.co/api/v2/type/${idPoke}`);
      const pokemonData = response.data.pokemon;
      const detailedPokemonInfo = await Promise.all(
        pokemonData.map(async (pokemon) => {
          const detailedResponse = await axios.get(pokemon.pokemon.url);
          return detailedResponse.data;
        })
      );
      setFiltredPokemons(detailedPokemonInfo);
      setCountType(detailedPokemonInfo.length);
      setIsActive(typePoke);
    } else {
      setFiltredPokemons([]);
      setIsActive('all');
    }
  }

  const pokemonsNewList = isActive === 'all' ? pokemonInfo : (filteredPokemon.length > 0 ? filteredPokemon : []);

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
              <li>
                <button className={`type-filter all ${isActive === "all" ? "active" : ""}`} onClick={() => filterTypePokemon("all")}>
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
                        idType={poketypes.id}
                        imageSrc={getImageByType()}
                        nameType={primeiraLetraMaiuscula(poketypes.name)}
                        fnOnClick={() => filterTypePokemon(poketypes.name)}
                        activeType={isActive}
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
                  <strong className="countPokemons">{isActive === "all" ? countPokemon : countType} </strong>{" "}
                  Pokémons
                </span>
              </div>
            </div>
            <div className="all">
              {pokemonsNewList
                .filter((pokemon) => {
                  if (pokemon && pokemon.types && pokemon.sprites && pokemon.sprites.other) {
                    const dreamWorld = pokemon.sprites.other.dream_world;
                    return dreamWorld && dreamWorld.front_default !== null;
                  }
                  return false;
                })
                .map((pokemon, index) => {
                  const getIconByType = () => {
                    const type = pokemon.types[0].type.name;
                    return `assets/icon-types/${type}.svg`;
                  };
                  return (
                    <CardPokemon
                      key={index}
                      type={pokemon.type}
                      image={pokemon.sprites.other.dream_world.front_default}
                      id={pokemon.id}
                      name={primeiraLetraMaiuscula(pokemon.name)}
                      icon={getIconByType()}
                      fnOnClick={() => openModal(pokemon)}
                    />
                  );
                })}
              {isModalOpen && <ModalPokemon onClose={closeModal} pokemonData={pokemonById} />}
            </div>
            {!(filteredPokemon.length > 0) && pageList !== countPages && (
              <button className="btnLoadMore" onClick={() => setPageList(pageList + 9)}>
                Load more Pokémons
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}




