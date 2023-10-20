import { useEffect, useState } from "react";
import { CardPokemon } from "../cardPokemon";
import { TypePokemon } from "../typePokemon";
import { ModalPokemon } from "../modalPokemon";
import { InputSearch } from "../input";
import { SelectCustom } from "../selectCustom";
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
  const [isActive, setIsActive] = useState("all")
  const [inputValue, setInputValue] = useState("")
  const [searchResults, setSearchResults] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const openModal = (pokemon) => {
    setPokemonById(pokemon)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
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

  const searchPokemon = async () => {
    setIsActive('search');
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
    setSearchResults(response.data)
    setCountPokemon(1)
    setCountType(1)
    setInputValue('');
  }

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchPokemon()
    }
  }

  const handleButtonClick = () => {
    setInputValue('')
    searchPokemon()
  }

  const pokemonsNewList = isActive === 'search' ? [] : (isActive === 'all' ? pokemonInfo : (filteredPokemon.length > 0 ? filteredPokemon : []));

  return (
    
    <section className="s-all-info-pokemons">
      <div className="container">
        <div className="top">
          <h2>Select your Pokémon</h2>
          <div className="search">
            <InputSearch
              type="text"
              value={inputValue}
              fnOnChange={(e) => setInputValue(e.target.value.toLowerCase())}
              fnOnKeyUp={handleInputKeyPress}
            />
            <button type="button"
              onClick={handleButtonClick}
            >
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
                <button className={`type-filter all ${isActive === "all" ? "active" : ""}`} onClick={() => { filterTypePokemon("all"); setCountPokemon(1292) }}>
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
            <div className="select-custom ">
              <button className="item-selected" onClick={toggleDropdown}>
                <span>Show:</span>
                <strong>All</strong>
              </button>
              <ul className={`dropdown-select ${isDropdownOpen ? "open" : ""}`}>
              <li>
                <button className={`type-filter ${isActive === "all" ? "active" : ""}`} onClick={() => { filterTypePokemon("all"); setCountPokemon(1292) }}>
                  <div className="icon">
                    <Image
                      src="assets/icon-all.svg"
                      alt=""
                      width={26}
                      height={26}
                    />
                  </div>
                  <span style={{color: '#3F5DB3'}}>All</span>
                </button>
              </li>
                {isDropdownOpen && (
                  typesPokemons &&
                  typesPokemons.map((poketypes, index) => {
                    const getImageByType = () => {
                      const type = poketypes.name;
                      return `./assets/icon-types/${type}.svg`;
                    };
                    if (index < 18) {
                      return (
                        <SelectCustom
                          key={index}
                          imageSrc={getImageByType()}
                          typePoke={poketypes.name}
                          nameType={primeiraLetraMaiuscula(poketypes.name)}
                          fnOnClick={() => filterTypePokemon(poketypes.name)}
                          activeType={isActive}
                          idType={poketypes.id}
                        />
                      )
                    }
                  })
                )}
              </ul>
            </div>

            {isModalOpen && <ModalPokemon onClose={closeModal} pokemonData={pokemonById} />}
            <div className="all">
              {isActive === 'search' ? (
                searchResults && searchResults.types && (
                  <CardPokemon
                    key={searchResults.id}
                    type={searchResults.types[0]?.type.name}
                    image={searchResults.sprites?.other?.dream_world?.front_default}
                    id={searchResults.id}
                    name={primeiraLetraMaiuscula(searchResults.name)}
                    icon={`assets/icon-types/${searchResults.types[0]?.type.name}.svg`}
                    fnOnClick={() => openModal(searchResults)}
                  />
                )
              ) : (
                pokemonsNewList
                  .filter((pokemon) => {
                    if (pokemon && pokemon.types && pokemon.sprites && pokemon.sprites.other) {
                      const dreamWorld = pokemon.sprites.other.dream_world;
                      return dreamWorld && dreamWorld.front_default !== null;
                    }
                    return false;
                  })
                  .map((pokemon, index) => {
                    const getIconByType = () => {
                      const type = pokemon.types[0]?.type.name;
                      return `assets/icon-types/${type}.svg`;
                    };
                    return (
                      <CardPokemon
                        key={index}
                        type={pokemon.types[0]?.type.name}
                        image={pokemon.sprites?.other?.dream_world?.front_default}
                        id={pokemon.id}
                        name={primeiraLetraMaiuscula(pokemon.name)}
                        icon={getIconByType()}
                        fnOnClick={() => openModal(pokemon)}
                      />
                    );
                  })
              )}
            </div>
            {!(filteredPokemon.length > 0) && pageList !== countPages && !searchResults && (
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




