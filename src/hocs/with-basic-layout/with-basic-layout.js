import React from 'react';
import Header from "../../components/header";
import Content from "../../components/content";
import Footer from "../../components/footer";

function WithBasicLayout(Component) {
  return (
    <div className="App">
      <Header />
      <Content>
        <Component />
      </Content>

      <Footer />
    </div>
  );
}

export default WithBasicLayout;
