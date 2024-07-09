import React from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import Footer from '../components/common/Footer';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
