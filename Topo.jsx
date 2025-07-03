import React from 'react';
import Logo from "./Logo";
import Navegação from "./Navegação";

const Topo = () => {
  return (
    <header className="topo">
        <Logo />
        <Navegação />
    </header>
  );
};

export default Topo;
