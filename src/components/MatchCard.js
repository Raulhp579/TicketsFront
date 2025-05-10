import { useNavigate } from 'react-router-dom';

export default function MatchCard({ match }) {
    const navigate = useNavigate();
    return (
        <div style={{
            background: '#16213E',
            padding: '1rem',
            marginBottom: '1lh',
            borderRadius: '10px',
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2 style={{ marginRight: '0.2lh' }}>
                    FC Barcelona vs {match.rival}
                </h2>
                <img
                    src={match.logo}
                    alt={match.rival}
                    style={{
                        width: '40px',
                        height: '40px',
                        objectFit: 'contain',
                    }}
                />
            </div>

            <p>{match.date} | {match.hour} | {match.competition}</p>

            <button
                style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#A50044',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    marginTop: '0.5rem'
                }}
                onClick={() => navigate(`/asientos/${match.id}`)}
            >
                Seleccionar Asientos
            </button>
        </div>
    );
}
