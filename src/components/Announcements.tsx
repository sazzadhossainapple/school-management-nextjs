import React from 'react';

const announcements = [
    {
        id: '1',
        title: 'Lorem ipsum dolor',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting and typesetting and typesetting and typesetting',
        date: '25-01-01',
    },
    {
        id: '2',
        title: 'Lorem ipsum dolor',
        desc: 'Lorem Ipsum is simply dummy text of the printing  and typesetting and typesetting and typesetting',
        date: '25-01-01',
    },
];

const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-xs text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                {announcements.map((data) => (
                    <div
                        key={data.id}
                        className="odd:bg-lamaSkyLight even:bg-lamaPurpleLight rounded-md p-4"
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="font-medium">{data.title}</h2>
                            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                                {data.date}
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">
                            {data.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;
