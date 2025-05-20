import Layout from '../../components/layout/Layout';
import { Hero, Background, Content, Title, SubTitle, ScrollIcon } from '@/components/common/Hero/Hero';
import Logos from './components/Logos';
import TailorMadeFeatures from './components/TailorMadeFeatures';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import AppPromotion from './components/AppPromotion';

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Hero>
        <Background type="img" src="https://picsum.photos/id/1/1920/600" srcMobile="/images/hero-mobile.png" />
        <Content className="items-center text-center">
          <Title className="leading-18 m-5  text-white">Organise projects. Get more done.</Title>
          <SubTitle className="m-5 text-white max-w-[900px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae laborum eum minima itaque
            praesentium.
          </SubTitle>
        </Content>
        <ScrollIcon align="center" />
      </Hero>

      <Logos />
      <TailorMadeFeatures />
      <Testimonials />
      <Achievements />
      <AppPromotion />
    </Layout>
  );
};

export default Home;
