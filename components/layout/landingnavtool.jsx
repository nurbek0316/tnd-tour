import { useState } from "react";

export default function Landingnavtool() {
    const [activeTab, setActiveTab] = useState('Flights');
    const [inputValue, setInputValue] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [results, setResults] = useState([]);
    const [place, setPlace] = useState('')
    const handleAdultsChange = (e) => {
        setAdults(e.target.value);
    };

    const handleChildrenChange = (e) => {
        setChildren(e.target.value);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/city/${inputValue}`);
            const data = await response.json();
            console.log(data); // Log the API response
        } catch (error) {
            console.error('Error:', error);
        }
    };



    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="container">
            <div className="nav_tool">
                <div className="nav_tabs">
                    <ul className="tab_list">
                        <li className={`tab ${activeTab === 'Flights' ? 'active' : ''}`} onClick={() => handleTabClick('Flights')}>Flights</li>
                        <li className={`tab ${activeTab === 'Stays' ? 'active' : ''}`} onClick={() => handleTabClick('Stays')}>Stays</li>
                        <li className={`tab ${activeTab === 'Check-in' ? 'active' : ''}`} onClick={() => handleTabClick('Check-in')}>Check-in</li>
                        <li className={`tab ${activeTab === 'Flight Status' ? 'active' : ''}`} onClick={() => handleTabClick('Flight Status')}>Flight Status</li>
                    </ul>
                </div>
                <div className="tab_content">



                    {/*FLIGHTS*/}


                    <div className={`tab_pane ${activeTab === 'Flights' ? 'active' : ''}`} id="flights">
                        <div className="tab_container">
                            <div className="flex justify-between mb-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                                    <input
                                        type="text"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Departure city"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                                    <input
                                        type="text"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Destination city"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between mb-4">
                                <div className="w-1/4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
                                    <input
                                        type="date"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className="w-1/4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
                                    <input
                                        type="date"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className="w-1/4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                                    <input
                                        type="number"
                                        min="1"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className='w-1/4'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
                                    <button className="flex bg-cyan-500 hover:bg-stone-600 text-white font-bold ml-auto justify-center w-[170px] py-2 px-4 rounded-md transition-[0.3s]">
                                    Continue
                                </button></div>
                            </div>

                        </div>
                    </div>



                    {/*STAYS*/}


                    <div className={`tab_pane ${activeTab === 'Stays' ? 'active' : ''}`} id="myStays">
                        <div className="tab_container">
                            <div className="flex justify-between mb-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                                    <input
                                        type="text"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Destination city"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <div className='flex'>
                                    <div className='w-1/2'><label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="adults">Adults:</label>
                                    <input
                                        type="number"
                                        id="adults"
                                        min="1"
                                        value={adults}
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"

                                        onChange={handleAdultsChange}
                                    />
                                    </div>
                                    <div className='w-1/2'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="children">Children:</label>
                                    <input
                                        type="number"
                                        id="children"
                                        min="0"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"

                                        value={children}
                                        onChange={handleChildrenChange}
                                    />
                                    </div>
                                </div>


                                </div>

                            </div>
                            <div className="flex  mb-4">
                                <div className="w-1/3">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
                                    <input
                                        type="date"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className="w-1/3">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
                                    <input
                                        type="date"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className='w-1/3'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
                                    <button className=" flex bg-cyan-500 hover:bg-stone-600 text-white font-bold ml-auto justify-center w-[170px] py-2 px-4 rounded-md transition-[0.3s]">
                                        Continue
                                    </button></div>
                            </div>

                        </div>
                    </div>

                    <div className={`tab_pane ${activeTab === 'Check-in' ? 'active' : ''}`} id="checkIn">
                        <div className="tab_container">
                            CheckIn tab is active
                        </div>
                    </div>
                    <div className={`tab_pane ${activeTab === 'Flight Status' ? 'active' : ''}`} id="flightStatus">
                        <div className="tab_container">
                            FlightStatus tab is active
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}