import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, ChatButton } from '../components/common';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default MainLayout; 