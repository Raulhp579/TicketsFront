import React, { useEffect, useState } from 'react';
import '../styles/StadiumMap.css';

export default function StadiumMap({ matchId, onZoneSelect }) {
    const [zones, setZones] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/zones/${matchId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Zonas:", data);
                setZones(data);
            })
            .catch((err) => console.error("Error al cargar zonas:", err));
    }, [matchId]);

    return (
        <div className="stadium-map">
            <svg viewBox="0 0 300 200" className="stadium-svg">
                {zones.map((zone) => (
                    <rect
                        key={zone.id}
                        x={zone.x}
                        y={zone.y}
                        width={zone.ancho}
                        height={zone.alto}
                        fill={zone.disponible ? 'green' : 'gray'}
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
