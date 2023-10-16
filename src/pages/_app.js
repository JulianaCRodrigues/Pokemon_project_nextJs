import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
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
