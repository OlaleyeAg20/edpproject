'use client';
import { ChangeEvent, useState } from 'react';
import { Button } from "@/components/ui/button";
import { getDatabase, ref, set } from 'firebase/database';

export default function AddItem() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        computerName: '',
        computerIssue: '',
        issueDescription: '',
        date: '' // Add date to form data state
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Get the current date and format it as needed (e.g., YYYY-MM-DD)
        const currentDate = new Date().toISOString().split('T')[0];

        // Add the date to form data before saving
        const dataToSave = {
            ...formData,
            date: currentDate,
        };

        // Reference to the database
        const db = getDatabase();
        const itemRef = ref(db, 'computers/' + Date.now()); // Create a unique ID using timestamp

        set(itemRef, dataToSave)
            .then(() => {
                alert('Computer data has been saved successfully.');
                // Reset form or navigate to another page
            })
            .catch((error) => {
                console.error('Error saving data:', error);
                alert('Failed to save data. Please try again.');
            });
    };

    return (
        <div className="py-12 px-8 bg-gray-100 flex-1 overflow-auto">
            <h1 className="font-semibold text-3xl">Add a Computer to the database</h1>
            <p>Please provide accurate data; the data provided is used during the troubleshooting and repair of the PC.</p>
            <div className="mt-6">
                <h2 className="font-bold">Basic Information.</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[820px] mt-8">
                    <div className="flex gap-4 items-start justify-between flex-wrap flex-1 sm:flex-nowrap">
                        <label className="sm:w-[30%]" htmlFor="firstName">Enter owner&apos;s first name</label>
                        <input 
                            type="text" 
                            className="py-[10px] px-[14px] border rounded w-full sm:w-[70%]" 
                            placeholder="Enter first name" 
                            id="firstName" 
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex gap-4 items-start justify-between flex-wrap sm:flex-nowrap">
                        <label className="sm:w-[30%]" htmlFor="lastName">Enter owner&apos;s last name</label>
                        <input 
                            type="text" 
                            className="py-[10px] px-[14px] border rounded w-full sm:w-[70%]" 
                            placeholder="Enter last name" 
                            id="lastName" 
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex gap-4 items-start justify-between flex-wrap sm:flex-nowrap">
                        <label className="sm:w-[30%]" htmlFor="email">Enter owner&apos;s email</label>
                        <input 
                            type="email" 
                            className="py-[10px] px-[14px] border rounded w-full sm:w-[70%]" 
                            placeholder="Enter email" 
                            id="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex gap-4 items-start justify-between flex-wrap sm:flex-nowrap">
                        <label className="sm:w-[30%]" htmlFor="phoneNumber">Enter owner&apos;s phone number</label>
                        <input 
                            type="tel" 
                            className="py-[10px] px-[14px] border rounded w-full sm:w-[70%]" 
                            placeholder="Enter owner&apos;s phone number" 
                            id="phoneNumber" 
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex gap-4 items-start justify-between flex-wrap sm:flex-nowrap">
                        <label className="sm:w-[30%]" htmlFor="computerName">Enter Computer&apos;s name or brand</label>
                        <input 
                            type="text" 
                            className="py-[10px] px-[14px] border rounded w-full sm:w-[70%]" 
                            placeholder="Enter computer&apos;s name or brand" 
                            id="computerName" 
                            value={formData.computerName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex gap-4 items-start justify-between flex-wrap sm:flex-nowrap">
                        <label className="sm:w-[30%]" htmlFor="computerIssue">Enter Issue</label>
                        <input 
                            type="text" 
                            className="py-[10px] px-[14px] border rounded w-full sm:w-[70%]" 
                            placeholder="Enter the issue of the computer" 
                            id="computerIssue" 
                            value={formData.computerIssue}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex gap-4 items-start justify-between flex-wrap sm:flex-nowrap">
                        <label className="sm:w-[30%]" htmlFor="issueDescription">Briefly describe the issue with the computer</label>
                        <textarea 
                            className="py-[10px] px-[14px] border rounded w-full sm:w-[70%] h-40" 
                            placeholder="Briefly describe the issue with the computer" 
                            id="issueDescription" 
                            value={formData.issueDescription}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Button type="submit" className="self-center min-w-48 max-sm:w-full">SUBMIT</Button>
                </form>
            </div>
        </div>
    );
}
