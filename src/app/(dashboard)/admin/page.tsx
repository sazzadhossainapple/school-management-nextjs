import AttendanceChart from '@/components/AttendanceChart';
import CountChart from '@/components/CountChart';
import FinanceChart from '@/components/FinanceChart';
import UserCard from '@/components/UserCard';
import React from 'react';

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* left */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>
                {/* middle chart */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* count chart */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    {/* attendance chart */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendanceChart />
                    </div>
                </div>
                {/* bottom chart */}
                <div className="w-full h-[500px]">
                    <FinanceChart />
                </div>
            </div>
            {/* right */}
            <div className="w-full lg:w-1/3">r</div>
        </div>
    );
};

export default AdminPage;
