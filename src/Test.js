import React from 'react';

const TestEnv = () => {
    console.log(process.env.REACT_APP_TEST_VAR);
  return (
    <div>
      <h1>Browser is: {process.env.BROWSER}</h1>
      <h1>Test Env Variable: {process.env.REACT_APP_TEST_VAR}</h1>
    </div>
  );
};

export default TestEnv;