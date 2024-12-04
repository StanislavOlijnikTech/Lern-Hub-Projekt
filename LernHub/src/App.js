import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const App = () => {
  const menuItems = [
    { key: '1', label: <a href="#profil">Profil</a> },
    { key: '2', label: <a href="#projekte">Projekte</a> },
    { key: '3', label: <a href="#kontakt">Kontakt</a> },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Header mit Navigation */}
      <Header style={{ background: '#1890ff', padding: '0 20px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h1 style={{ color: '#fff', margin: 0 }}>LernHub</h1>
          <Menu
            theme="dark"
            mode="horizontal"
            items={menuItems}
            style={{ background: '#1890ff', borderBottom: 'none' }}
          />
        </div>
      </Header>

      {/* Hauptinhalt */}
      <Content style={{ padding: '20px', textAlign: 'center' }}>
        <section id="profil" style={{ marginTop: '20px' }}>
          <h2>Willkommen bei LernHub</h2>
          <p>Hier kannst du deine Lernkurse verwalten.</p>
        </section>
        <section id="projekte" style={{ marginTop: '40px' }}>
          <h2>Projekte</h2>
          <p>Eine Liste deiner Projekte wird hier angezeigt.</p>
        </section>
        <section id="kontakt" style={{ marginTop: '40px' }}>
          <h2>Kontakt</h2>
          <p>Hier kannst du uns kontaktieren.</p>
        </section>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: 'center' }}>LernHub ©2023</Footer>
    </Layout>
  );
};

export default App;
