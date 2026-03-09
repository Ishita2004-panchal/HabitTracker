import React, { useState } from 'react'

function HabitTrack() {
    const [habitInput, setHabitInput] = useState("");
    const [habit, setHabit] = useState([]);

    const days = Array.from({ length: 30 }, (_, i) => i + 1);

    const addHabit = (e) => {
        e.preventDefault();

        if (!habitInput) return;

        const newHabit = {
            id: Date.now(),
            name: habitInput,
            days: {}
        };

        setHabit([...habit, newHabit]);
        setHabitInput('');
    }
    const toggleDay = (habitId, day) => {
        setHabit(habit.map((h) =>
            h.id === habitId ? { ...h, days: { ...h.days, [day]: !h.days[day] } } : h));
    };

    return (
        <div>
            <h1 className='text-6xl text-center p-5'>HABIT TRACKER</h1>

            <div className='w-90% h-[100vh] bg-white mx-3 rounded-md p-4'>
                <form onSubmit={addHabit}>
                    <div>
                        <input type='text' placeholder='enter your habit..' className='bg-purple-50 rounded-md w-full p-4' value={habitInput} onChange={(e) => setHabitInput(e.target.value)} />
                    </div>
                </form>
                <table className='w-full mt-10 border'>
                    <thead>
                        <tr>
                            <th className='border p-2 text-purple-900'>Habit</th>

                            {days.map((day) => (
                                <th key={day} className='border p-2 text-purple-900'>{day}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {habit.map((h) => (
                            <tr key={h.id}>
                                <td className='border p-2 bg-purple-100'>{h.name}</td>

                                {days.map((day) => (
                                    <td key={day} className={`border text-center cursor-pointer ${h.days[day] ? "bg-green-200" : ""}`} onClick={() => toggleDay(h.id, day)}>✓</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default HabitTrack