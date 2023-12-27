import React, { useState } from 'react';

const BookingForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [roomType, setRoomType] = useState('');

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // your submit logic here
    };

    return (
        <div>
            <button className="booking-button" onClick={toggleForm}>
                Book a room
            </button>
            {showForm && (
                <div className="booking-form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />

                        <label htmlFor="roomType">Room Type:</label>
                        <select
                            id="roomType"
                            value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}
                        >
                            <option value="">--Please choose an option--</option>
                            <option value="single">Single</option>
                            <option value="double">Double</option>
                            <option value="suite">Suite</option>
                        </select>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default BookingForm;