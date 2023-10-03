import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import 'swiper/swiper-bundle.css'; 
import '@/styles/main.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </>

  )



}
