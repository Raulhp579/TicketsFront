import { useParams } from 'react-router-dom';
import { useState } from 'react';

import SeatGrid from '../components/SeatGrid.js';


import '../styles/SeatSelection.css';
import StadiumMap from '../components/StadiumMap';

export default function SeatSelection() {
    const { matchId } = useParams();
    const [selectedZone, setSelectedZone] = useState(null);

    return (
        <div className="selection-container">
            <h2 style={{marginTop:'6lh'}}>Selecciona una zona del estadio</h2>
            <StadiumMap matchId={matchId} onZoneSelect={setSelectedZone} />

            {selectedZone && (
                <div>
                    <h3>Zona: {selectedZone.name}</h3>
                    <p>Precio: {selectedZone.price}€</p>
                    <SeatGrid zoneId={selectedZone.id} />

                </div>
            )}
        </div>
    );
}