import Layout from '../../components/layout/Layout';
import { Hero, Background, Content, Title, ScrollIcon, SubTitle, ContentButton } from '@/components/common/Hero/Hero';
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
        <Background type="img" src={s3('hero.png')} hideTransparentLayer />
        <Content>
          <Title>Landing page UI kit</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
          </SubTitle>
          <ContentButton>Learn more</ContentButton>
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
