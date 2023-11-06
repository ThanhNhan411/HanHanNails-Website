import React, { Suspense } from 'react';


function Services() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Hello</h1>
      </Suspense>
    </div>
  );
}

export default Services;
