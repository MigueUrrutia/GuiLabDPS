import React from 'react';
import ReactDOM from 'react-dom';
import { VoteList } from "./components/VoteList";

function App() {
  return (
    <div className="App">
      <VoteList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));