import { Section } from '@/components/layout/Section/Section';
import Stats from './Stats';
import Headline from './Headline';
import Trends from './Trends';

const Achievements = () => {
  return (
    <Section>
      <Stats />
      <Headline />
      <Trends />
    </Section>
  );
};

export default Achievements;
