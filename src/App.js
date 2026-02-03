import React from 'react';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col">
          <Card
            title="Card title"
            image="https://github.com/netology-code/ra16-homeworks/blob/ra-new/composition/cards/assets/card1.png?raw=true"
          >
            <p>Some quick example text to build on the card title.</p>
            <a
              href="https://example.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Go somewhere
            </a>
          </Card>
        </div>

        <div className="col">
          <Card
            image="https://github.com/netology-code/ra16-homeworks/raw/ra-new/composition/cards/assets/card2.png"
          >
            <p>Another example text without title.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
