import Image from "next/image";
import axios from "axios"
import { useEffect, useState } from "react";


export function ModalPokemon({

  onClose,
  pokemonData,

}) {
  const [weaksTypes, setWeaksTypes] = useState("");

  const { name, id, types, abilities, weight, height, sprites, stats } = pokemonData;

  const typeName = types[0].type.name;

  const statsTypes = stats

  useEffect(() => {
    async function TypesPokes() {
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      const result = response.data.results;
      const typeListsPoke = await Promise.all(
        result.map(async (type) => {
          const typeListResponse = await axios.get(type.url);
          return typeListResponse.data;
        })
      );
      setWeaksTypes(typeListsPoke);
    }

    TypesPokes();
  }, []);



  const primeiraLetraMaiuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="modal" typePokemonModal={typeName} >
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
              src={`/assets/icon-types/${typeName}.svg`}
              alt=""
              width={20}
              height={20}
            />
          </div>
          <div className="image">
            <Image
              src={sprites.other.dream_world.front_default}
              alt=""
              width={202}
              height={202}
            />
          </div>
        </div>

        <div className="rightContainer">
          <div className="name">
            <h2>{primeiraLetraMaiuscula(name)}</h2>
            <span>  {(id < 10) ? `#00${id}` : (id < 100) ? `#0${id}` : `#00${id}`}</span>
          </div>


          <ul className="type">
            {
              types &&
              types.map((type, index) => (
                <li key={index}>
                  <span className={`tagType ${type.type.name}`}>
                    {primeiraLetraMaiuscula(type.type.name)}
                  </span>
                </li>
              ))
            }
          </ul>


          <ul className="info">
            <li>
              <span>Height</span>
              <strong>{`${height / 10}m`}</strong>
            </li>
            <li>
              <span>Weight</span>
              <strong>{`${weight / 10}kg`}</strong>
            </li>

            {
              abilities &&
              abilities.map((ability, index) => (
                <li key={index}>
                  <span >Abilities</span>
                  <strong>{primeiraLetraMaiuscula(ability.ability.name)}</strong>
                </li>
              ))
            }


          </ul>
          <div className="weak">
            <h4>Weaknesses</h4>
            {weaksTypes &&
              weaksTypes
                .filter((type) => type.name === typeName)
                .map((typeData, index) => (
                  <ul key={index}>
                    {typeData.damage_relations.double_damage_from.map((weak, index) => (
                      <li key={index}>
                        <span className={`tagType ${weak.name}`}>{primeiraLetraMaiuscula(weak.name)}</span>
                      </li>
                    ))}
                  </ul>))
            }
          </div>

          <div className="stats">
            <h5>Stats</h5>
            <div className="allStats">


              {
                statsTypes &&
                statsTypes.map((typeInfo, index) => (

                    <div className="item" key={index}>
                     
                      <span>{primeiraLetraMaiuscula(typeInfo.stat.name) }</span>
                      <div className="barStatus">
                        <div className="bar" style={{ width: typeInfo.base_stat + '%' }} ></div>
                        <ul className="separator">
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  ))
              }
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}