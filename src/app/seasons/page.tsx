export default function Seasons() {
    return (
      <>
      <h1>Seasons</h1>
      {[1,2,3,4,5,6,7].map(season=><a key={season} href={`seasons/${season}`}>{season}</a>)}
      </>
    );
  }