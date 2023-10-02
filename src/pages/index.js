import { SlideArea } from "@/components/Slide";
import { CardPokemon } from "@/components/cardPokemon";
import { ListCardPokemon } from "@/components/cardsListPokemon";
import { Footer } from "@/components/footer";
import { ModalPokemon } from "@/components/modalPokemon";
import Image from "next/image";


export default function Home() {
  return (
    <>
  
{/* 
    <CardPokemon />

    <Footer /> */}

    {/* <ModalPokemon /> */}

    <SlideArea />
    <ListCardPokemon />

    </>


   
  )
}
