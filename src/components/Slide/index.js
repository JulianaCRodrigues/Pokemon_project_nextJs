import Image from "next/image";
import 'swiper/react';
import 'swiper/css/effect-fade';
import "swiper/css/pagination";

export function SlideArea() {
  return (
    <section className="s-area-slide-hero">
      <div className="slide-hero">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="main-area">
              <div className="container">
                <div className="text">
                  <div className="tag">
                    <div className="icon">
                      <Image
                        src="assets/bag-red.svg"
                        alt=""
                        width="1440"
                        height="706"
                      />
                    </div>
                    <span>pokedex</span>
                  </div>
                  <h1>Who is that Pokémon?</h1>
                  <p>
                    The perfect guide for those who want to hunt Pokémons around the world
                  </p>
                  <div className="image">
                    <Image src="/assets/lighting.svg" className="lights" alt="Luzes" title="Luzes" width="170" height="58" />
                    <Image src="/assets/pokeball-red.png" className="pokeball" alt="Pokeball" title="Pokeball" width={798} height={514} />
                  </div>
                </div>
                <div className="area-explore">
                  <div className="txt">
                    <div className="icon">
                      <Image src="/assets/arrow-down-white.svg" alt="" width="9" height="16" />
                    </div>
                    <span>explore</span>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}







