import React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Header style={{ background: '#1890ff', color: '#fff', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', margin: 0 }}>LernHub</h1>
      </Header>

      {/* Hauptinhalt */}
      <Content style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Willkommen bei LernHub</h2>
        <p>Hier kannst du deine Lernkurse verwalten.</p>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: 'center' }}>
        LernHub ©2023
      </Footer>
    </Layout>
  );
};

export default App;
