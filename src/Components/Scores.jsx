const Scores = (props) => {
  return ( 
    <>
      <h3>Scores</h3>
        {props.scores.map(score =>
          // what should we be using for a key here?
          <div id="scores" key={score.date}>
            <p><b>Date:</b> {score.date}</p>
            <p><b>Score:</b> {score.score}</p>
          </div>
        )}
    </>
  );
}

export default Scores;