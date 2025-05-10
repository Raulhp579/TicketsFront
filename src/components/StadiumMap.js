import React, { useEffect, useState } from 'react';
import '../styles/StadiumMap.css';

export default function StadiumMap({ matchId, onZoneSelect }) {
    const [zones, setZones] = useState([]);

    useEffect(() => {
        // Llama al backend para obtener zonas
        fetch(`http://localhost:8080/api/zones/${matchId}`)
            .then((res) => res.json())
            .then((data) => setZones(data));
    }, [matchId]);

    return (
        <div className="stadium-map">
            <svg viewBox="0 0 300 200" className="stadium-svg">
                {zones.map((zone) => (
                    <rect
                        key={zone.id}
                        x={zone.x}
                        y={zone.y}
                        width={zone.width}
                        height={zone.height}
                        fill={zone.available ? 'green' : 'gray'}
                        stroke="white"
                        strokeWidth="2"
                        className="stadium-zone"
                        onClick={() => onZoneSelect(zone)}
                    />
                ))}
            </svg>
        </div>
    );
}
