import React, { useEffect, useState } from 'react';
import '../styles/StadiumMap.css';

export default function StadiumMap({ matchId, onZoneSelect }) {
    const [zones, setZones] = useState([]);
    const [hoveredZone, setHoveredZone] = useState(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        fetch(`http://localhost:8080/zones/${matchId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Zonas:", data);
                setZones(data);
            })
            .catch((err) => {
                console.error("Error al cargar zonas:", err);
            });
    }, [matchId]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltipPos({
            x: e.clientX - rect.left + 10,
            y: e.clientY - rect.top + 10,
        });
    };

    return (
        <div className="stadium-map">
            <svg
                viewBox="0 0 300 200"
                className="stadium-svg"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setHoveredZone(null)}
            >
                {/* Borde ovalado del estadio */}
                <ellipse
                    cx="150" cy="100"
                    rx="120"
                    ry="95"
                    fill="rgb(165, 0, 68)"
                    stroke="white"
                    strokeWidth="3"
                />

                {/* Campo de fútbol */}
                <rect x="90" y="60" width="120" height="80" fill="#228B22" stroke="white" strokeWidth="2" />

                {/* Zonas del estadio */}
                {zones.map((zone) => (
                    <g
                        key={zone.id}
                        onClick={() => onZoneSelect(zone)}
                        onMouseEnter={() => setHoveredZone(zone)}
                        onMouseLeave={() => setHoveredZone(null)}
                    >
                        <rect
                            x={zone.x}
                            y={zone.y}
                            width={zone.ancho}
                            height={zone.alto}
                            fill={zone.disponible ? 'green' : 'gray'}
                            stroke="white"
                            strokeWidth="2"
                            rx="6"
                            ry="6"
                            className="stadium-zone"
                        />
                    </g>
                ))}
            </svg>

            {hoveredZone && (
                <div
                    className="tooltip"
                    style={{ left: tooltipPos.x, top: tooltipPos.y }}
                >
                    <strong>{hoveredZone.name}</strong><br />
                    {hoveredZone.precio}€
                </div>
            )}
        </div>
    );
}

