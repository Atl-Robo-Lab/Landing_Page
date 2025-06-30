import React from 'react';
import {
  HeroSection,
  WhoWeAreSection,
  OfferingsSection,
  StatisticsSection,
  SolutionSection,
  CultureSection,
  VideoSection
} from '../components/common';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhoWeAreSection />
      <OfferingsSection />
      <StatisticsSection />
      <SolutionSection />
      {/* <CultureSection /> */}
      <VideoSection />
    </div>
  );
};

export default Home; 