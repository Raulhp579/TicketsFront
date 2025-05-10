import MatchCard from '../components/MatchCard';
import Madrid from '../assets/escudos/real_madrid.png';

import Betis from  '../assets/escudos/real_betis.png';

import AtMadrid from  '../assets/escudos/atletico_madrid.png';
import Liverpool from  '../assets/escudos/liverpool.png';



const matches = [
    {
        id: 1,
        rival: 'Real Madrid',
        date: '11 mayo',
        hour: '16:15',
        competition: 'LaLiga',
        logo: Madrid,
    },
    {
        id: 2,
        rival: 'Real Betis',
        date: '5 abril',
        hour: '18:30',
        competition: 'LaLiga',
        logo: Betis,
    },
    {
        id: 3,
        rival: 'Atletico Madrid',
        date: '20 mayo',
        hour: '21:30',
        competition: 'Copa del Rey',
        logo: AtMadrid,
    },
    {
        id: 4,
        rival: 'Liverpool',
        date: '31 mayo',
        hour: '21:00',
        competition: 'Champions',
        logo: Liverpool,
    },

];

export default function Home() {
    return (
        <div className='home' style={{ background: '#001E3C', color: 'white', padding: '1rem', marginTop:'8lh'}}>
            <h1>Próximos Partidos</h1>
            {matches.map((match) => (
                <MatchCard key={match.id} match={match} />
            ))}
        </div>
    );
}
