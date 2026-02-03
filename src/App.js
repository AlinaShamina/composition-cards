import React from 'react';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-6">
          <Card
            title="Card title"
            image="https://github.com/netology-code/ra16-homeworks/blob/ra-new/composition/cards/assets/card1.png?raw=true"
          >
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
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

        <div className="col-6">
          <Card title="Special title treatment">
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
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
      </div>
    </div>
  );
}

export default App;
