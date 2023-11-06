import React, { Suspense } from 'react';
const Intro = React.lazy(() => import('../components/Intro'));
const Slider = React.lazy(() => import('../components/Slider'));
const CardHome = React.lazy(() => import('../components/CardHome'));

function Home() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Slider/> 
        <Intro />
        <CardHome />
      </Suspense>
    </div>
  );
}

export default Home;
