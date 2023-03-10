import React from 'react';
import './App.css';
import Button from "./components/Button";

function logClick() {
    console.log('You clicked!');
}
function App() {
  return (
      <>
          <nav>
        <h1>Handbags & Purses</h1>
              <Button
                  buttonType="button"
                  isDisabled={false}
                  value="to the collection"
                  isClicked={logClick}
              >

              </Button>
              <Button
                  buttonType="button"
                  isDisabled={false}
                  value="shop all bags"
                  isClicked={logClick}
              >

              </Button>
              <Button
                  buttonType="button"
                  isDisabled={true}
                  value="pre-orders"
                  isClicked={logClick}
              >

              </Button>
          </nav>
        </>
  );
}

export default App;



