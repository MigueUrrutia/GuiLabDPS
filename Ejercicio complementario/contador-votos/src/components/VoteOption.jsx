import React from 'react';

const VoteOption = ({ option, votes, totalVotes, onVote }) => {
  const percentage = totalVotes === 0 ? 0 : ((votes / totalVotes) * 100).toFixed(2);

  return (
    <div className="vote-option">
      <span>{option}: {percentage}%</span>
      <button onClick={onVote}>Votar</button>
    </div>
  );
};

export default VoteOption;