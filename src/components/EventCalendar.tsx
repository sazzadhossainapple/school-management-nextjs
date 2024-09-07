'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: '1',
        title: 'lorem ipsum dolor',
        time: '12:00 PM - 2:00 PM',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
    {
        id: '2',
        title: 'lorem ipsum dolor',
        time: '12:00 PM - 2:00 PM',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
    {
        id: '3',
        title: 'lorem ipsum dolor',
        time: '12:00 PM - 2:00 PM',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className="bg-white p-4 rounded-md">
            <Calendar onChange={onChange} value={value} />

            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <div className="flex flex-col gap-4">
                {events.map((event) => (
                    <div
                        className="p-5 rounded-md border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
                        key={event.id}
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold text-gray-500">
                                {event.title}
                            </h2>
                            <span className="text-gray-300 text-xs">
                                {event.time}
                            </span>
                        </div>
                        <p className="mt-2 text-gray-400 text-sm">
                            {event.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventCalendar;
