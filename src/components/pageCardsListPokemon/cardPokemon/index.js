import { ModalPokemon } from "@/components/modalPokemon";
import Image from "next/image";
import { useState } from "react";


export function CardPokemon({ image, id, name, icon, type }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={`cardPokemon  ${type}`} onClick={openModal}>
        <div className="image">
          <Image src={image} width={142} height={200} alt="Imagem Pokemon" />
        </div>
        <div className="info">
          <div className="text">
            <span>
              {(id < 10) ? `#00${id}` : (id < 100) ? `#0${id}` : `#00${id}`}
            </span>
            <h3 className="h3">{name}</h3>
          </div>
          <div className="icon">
            <Image src={icon} width={28} height={28} alt="type pokemon" />
          </div>
        </div>
      </button>

      {isModalOpen && <ModalPokemon onClose={closeModal} />}
    </>
  );
}


