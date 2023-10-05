import { SlideArea } from "@/components/Slide";
import { CardPokemon } from "@/components/pageCardsListPokemon/cardPokemon";
import { ListCardPokemon } from "@/components/pageCardsListPokemon";
import { Footer } from "@/components/footer";
import { ModalPokemon } from "@/components/modalPokemon";
import Image from "next/image";


export default function Home() {
  return (
    <>
  
{/* 
    <CardPokemon />

    <Footer /> */}

    <ModalPokemon />

    <SlideArea />
    <ListCardPokemon />

    </>


   
  )
}
