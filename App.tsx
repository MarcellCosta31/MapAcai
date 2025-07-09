import React, { useEffect, useState } from 'react';
import  SplashScreen from './src/Screens/SplashScreen';
import Cliente_Vendedor from './src/Screens/Cliente_Vendedor';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // após 2 segundos, mostra a outra tela
    }, 2000);

    return () => clearTimeout(timer); // limpa o timer se o componente desmontar
  }, []);

  return showSplash ? <SplashScreen /> : <Cliente_Vendedor />;
}
