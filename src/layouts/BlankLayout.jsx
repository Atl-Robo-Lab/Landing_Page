import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/common';

const BlankLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BlankLayout; 