import React, { useState } from 'react';
import { VoteOption } from './VoteOption';

export const VoteList = () => {
  const [votes, setVotes] = useState({
    React: 0,
    Vue: 0,
    Angular: 0,
  });

  const totalVotes = Object.values(votes).reduce((acc, curr) => acc + curr, 0);

  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  const handleReset = () => {
    setVotes({
      React: 0,
      Vue: 0,
      Angular: 0,
    });
  };

  return (
    <div className="vote-list">
      <h1>Vota por tu framework favorito</h1>
      {Object.entries(votes).map(([option, voteCount]) => (
        <VoteOption
          key={option}
          option={option}
          votes={voteCount}
          totalVotes={totalVotes}
          onVote={() => handleVote(option)}
        />
      ))}
      <button onClick={handleReset}>Reiniciar votos</button>
      <p>Total de votos: {totalVotes}</p>
    </div>
  );
};