import React, { useEffect, useState } from 'react';
import '../styles/SeatGrid.css';

export default function SeatGrid({ zoneId }) {
    const [seats, setSeats] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8080/api/seats/zone/${zoneId}`)
            .then(res => res.json())
            .then(data => setSeats(data))
            .catch(err => console.error('Error al cargar asientos:', err));
    }, [zoneId]);

    const handleReserve = () => {
        if (!selectedSeat || !email) return;
        fetch('http://localhost:8080/api/seats/reserve', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                seatId: selectedSeat.id,
                userEmail: email
            })
        })
            .then(res => res.text())
            .then(msg => alert(msg))
            .catch(err => alert("Error al reservar: " + err));
    };

    return (
        <div>
            <h4>Selecciona un asiento</h4>
            <div className="seat-grid">
                {seats.map(seat => (
                    <div
                        key={seat.id}
                        className={`seat ${seat.reserved ? 'taken' : ''} ${selectedSeat?.id === seat.id ? 'selected' : ''}`}
                        onClick={() => !seat.reserved && setSelectedSeat(seat)}
                    />
                ))}
            </div>

            <input
                type="email"
                placeholder="Tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
            />
            <button onClick={handleReserve}>Reservar Asiento</button>
        </div>
    );
}
