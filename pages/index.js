import Item from '../components/Item';
import Header from '../components/Header';
import Menu from '../components/Menu';

import image1 from '../public/img/Digitalization.jpg';
import image2 from '../public/img/IOT.jpg';
import image3 from '../public/img/BusinessPlatform.jpg';
import image4 from '../public/img/SecurityService.jpg';
import { useEffect, useState } from 'react';

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const size = useWindowSize();
  const { height, width } = size;
  const valueSize = height < width ? height : width;
  // console.log(`height: ${height}, width: ${width}, value: ${valueSize}`);
  return (
    <div style={{ position: 'relative' }}>
      {/* <Head>
        <title>Create Next Boss</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      {/* <Route path="/">
            <UnderMaintenance />
          </Route> */}

      {/* <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        backColor={true}
        valueSize={value}
      />
      {isMenuOpen && <Menu valueSize={value} />} */}

      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        valueSize={valueSize}
      />
      {isMenuOpen && <Menu valueSize={valueSize} />}
      <div
        style={{
          height: '100vh',
          scrollSnapType: 'y mandatory',
          overflow: 'auto',
        }}
      >
        <Item
          // title="DIGITALISASI"
          // desc="Transformasi menuju era digital adalah  keniscayaan. Ubah model bisnis Anda, dan temukan peluang baru untuk mendapatkan value lebih dengan bantuan kami."
          title="Digitalization"
          desc="Transform your business with us."
          descLink=""
          backgroundImg={image1}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          // rightBtnTxt="Lihat apa yang kami lakukan"
          rightBtnTxt="See what we do"
          rightBtnLink="/digitalization"
          itemPosition="item__right"
          valueSize={valueSize}
        />
        <Item
          // title="IOT PLATFORM"
          // desc="Kami akan memberikan Anda kemudahan dalam pemanfaatan ”Internet of Things” agar terintegrasi, dan memberikan keleluasaan dalam pengelolaannya."
          title="IoT Platform"
          desc="Whatever it is, let us handle it"
          descLink=""
          backgroundImg={image2}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="See what we do"
          rightBtnLink="/iot"
          itemPosition="item__right"
          valueSize={valueSize}
        />

        <Item
          // title="PLATFORM BISNIS"
          // desc="Kami menciptakan produk untuk melayani dan memungkinkan bisnis Anda dikembangkan, dikolaborasikan, dan diperluas dengan cepat dan efisien."
          title="Business Platform"
          desc="Maximize your business value with our platform."
          descLink=""
          backgroundImg={image3}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="See what we do"
          rightBtnLink="/business-platform"
          itemPosition="item__center"
          valueSize={valueSize}
        />
        <Item
          // title="LAYANAN PROFESIONAL"
          // desc="Kami percaya dalam bertransformasi membutuhkan dukungan tim yang solid dan berpengalaman, kami siap membantu Anda."
          title="Professional Service"
          desc="We'll take care of it."
          descLink=""
          backgroundImg={image4}
          leftBtnTxt="SHOP NOW"
          leftBtnLink=""
          rightBtnTxt="See what we do"
          rightBtnLink="/support-service"
          itemPosition="item__left"
          valueSize={valueSize}
        />
      </div>
    </div>
  );
}