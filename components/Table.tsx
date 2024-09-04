'use client';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { app } from '@/app/firebase/config'; // Import your Firebase config
import Emptydatabase from './EmptyDatabase';


interface ComputerData {
    id: string;
    customerName: string;
    firstName: string;
    lastName: string;
    date: string;
    acknowledgedBy: string;
    computerIssue: string;
    issueDescription: string;
}

export default function Table() {
    const [data, setData] = useState<ComputerData[]>([]);

    useEffect(() => {
        const db = getDatabase(app);
        const dataRef = ref(db, 'computers'); // Adjust the path to match your database structure
        onValue(dataRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const parsedData: ComputerData[] = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key]
                }));
                setData(parsedData);
            }
        });
    }, []);

    const renderedData = data.map((item) => {
        return (
            <tr key={item.id}>
                <td className="py-2 border border-gray-400 text-left pl-2 bg-gray-100">{`${item.firstName} ${item.lastName}`}</td>
                <td className="py-2 border border-gray-400 text-left pl-2 bg-gray-100">{item.date}</td>
                <td className="py-2 border border-gray-400 text-left pl-2">{item.acknowledgedBy}</td>
                <td className="py-2 border border-gray-400 text-left pl-2 bg-gray-100">{item.computerIssue}</td>
                <td className="py-2 border border-gray-400 text-left pl-2">{item.issueDescription}</td>
            </tr>
        )
    });

    return (
        <div className="hero min-h-48 rounded-lg w-full overflow-auto">
        {data[0] ? 
            <table className="w-full rounded-lg border">
                <thead className="sticky top-[-1px]">
                    <tr>
                        <td className="bg-primary py-2 text-white text-left pl-2">Customer&apos;s Name</td>
                        <td className="bg-primary py-2 text-white text-left pl-2">Date Brought In</td>
                        <td className="bg-primary py-2 text-white text-left pl-2">Acknowledged By</td>
                        <td className="bg-primary py-2 text-white text-left pl-2">Computer Issue</td>
                        <td className="bg-primary py-2 text-white text-left pl-2">Issue Description</td>
                    </tr>
                </thead>
                <tbody>
                    {renderedData}
                </tbody>
            </table>
        : <Emptydatabase />}
        </div>
    )
}
