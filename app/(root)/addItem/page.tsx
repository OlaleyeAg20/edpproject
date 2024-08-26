import { Button } from "@/components/ui/button";

export default function Additem(){
    return (
        <div className="py-12 px-8 bg-gray-100 flex-1 overflow-auto">
            <h1 className="font-semibold text-3xl">Add a Computer to the database</h1>
            <p>Please provide accurate data, the data provided are been used during the troubleshooting and repair of the PC.</p>
            <div className="mt-6">
                <h2 className="font-bold">Basic Information.</h2>
                <form action="" className="flex flex-col gap-4 max-w-[820px] mt-8">
                    <div className="flex gap-4 items-start justify-between flex-wrap flex-1 sm:flex-nowrap">
                        <label className="sm:w-[30%]" htmlFor="firatNameInput">Enter owner&apos;s first name</label>
                        <input type="text" className="py-[10px] px-[14px] border rounded w-full sm:w-[70%]" placeholder="Enter first name" id="firatNameInput" required/>
                    </div>
                    <div className="flex gap-4 items-start justify-between flex-wrap sm:flex-nowrap">
                        <label className="sm:w-[30%]" htmlFor="lastNameInput">Enter owner&apos;s last name</label>
                        <input type="text" className="py-[10px] px-[14px] border rounded w-full sm:w-[70%]" placeholder="Enter last name" id="lastNameInput"/>
                    </div>
                    <div className="flex gap-4 items-start justify-between flex-wrap sm:flex-nowrap">
                        <label className="sm:w-[30%]" htmlFor="emailInput">Enter owner&apos;s email</label>
                        <input type="email" className="py-[10px] px-[14px] border rounded w-full sm:w-[70%]" placeholder="Enter email" id="emailInput"/>
                    </div>
                    <div className="flex gap-4 items-start justify-between flex-wrap sm:flex-nowrap">
                        <label className="sm:w-[30%]" htmlFor="phoneNumberInput">Enter owner&apos;s phone number</label>
                        <input type="tel" className="py-[10px] px-[14px] border rounded w-full sm:w-[70%]" placeholder="Enter owner&apos;s phone number" id="phoneNumberInput" required/>
                    </div>
                    <div className="flex gap-4 items-start justify-between flex-wrap sm:flex-nowrap">
                        <label className="sm:w-[30%]" htmlFor="computerNameInput">Enter Computer&apos;s name or brand</label>
                        <input type="text" className="py-[10px] px-[14px] border rounded w-full sm:w-[70%]" placeholder="Enter computer&apos;s name or brand" id="computerNameInput" required/>
                    </div>
                    <div className="flex gap-4 items-start justify-between flex-wrap sm:flex-nowrap">
                        <label className="sm:w-[30%]" htmlFor="computerIssueInput">Enter Issue</label>
                        <input type="text" className="py-[10px] px-[14px] border rounded w-full sm:w-[70%]" placeholder="Enter the issue of the computer" id="computerIssueInput" required/>
                    </div>
                    <div className="flex gap-4 items-start justify-between flex-wrap sm:flex-nowrap">
                        <label className="sm:w-[30%]" htmlFor="issueDescription">Briefly descripe the issue with the computer</label>
                        <textarea className="py-[10px] px-[14px] border rounded w-full sm:w-[70%] h-40" placeholder="Briefly descripe the issue with the computer" id="issueDescription" required>
                        </textarea>
                    </div>
                    <Button className="self-center min-w-48 max-sm:w-full">SUBMIT</Button>
                </form>
            </div>
        </div>
    )
}