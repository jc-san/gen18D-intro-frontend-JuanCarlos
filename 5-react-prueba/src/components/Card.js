function Card({ trainer }) {
  return (
    <>
      <div className="card">
        <div className="image-container"></div>
        <div className="card-content">
          <div className="stats">
            <p className="region-tag">{trainer.region}</p>
            <div className="rank">
              <p className="rank-label">rango</p>
              <p className="rank-tag">{trainer.rank}</p>
            </div>
          </div>
          <h2 className="trainer-name">{trainer.name}</h2>
          <div className="team">
            <h3 className="team-label">Equipo</h3>
            <div className="team-members">
              {trainer.team.map((team, i) => (
                <div key={i} className="pokemon-tag">
                  <p className="pokemon-tag--name">{team.name}</p>
                  <p className="pokemon-tag--level">{team.level}</p>
                </div>
              ))}
            </div>
          </div>
          <a href="#" className="more-info">
            más información
          </a>
        </div>
      </div>
    </>
  )
}

export default Card
