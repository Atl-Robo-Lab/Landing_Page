import React from 'react';
import {
  HeroSection,
  WhoWeAreSection,
  OfferingsSection,
  StatisticsSection,
  SolutionSection,
  CultureSection
} from '../components/common';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhoWeAreSection />
      <OfferingsSection />
      <StatisticsSection />
      <SolutionSection />
      <CultureSection />
    </div>
  );
};

export default Home; 