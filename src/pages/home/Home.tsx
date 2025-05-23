import Layout from '../../components/layout/Layout';
import { Hero, Background, Content, Title, ScrollIcon } from '@/components/common/Hero/Hero';
import Logos from './components/Logos';
import TailorMadeFeatures from './components/TailorMadeFeatures';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import AppPromotion from './components/AppPromotion';
import { s3 } from '@/utils/s3';

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Hero>
        <Background type="img" src={s3('hero.png')} srcMobile="/images/hero-mobile.png" hideTransparentLayer />
        <Content>
          <Title>
            Organise projects. <br />
            Get more done.
          </Title>
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
