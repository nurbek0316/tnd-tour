

export default function NavTool(){

    return(
        <div className="container">
            <div className="nav_tool">
                <div className="nav_tabs">
                    <ul className="tab_list">
                        <li className="tab">Flights</li>
                        <li className="tab active">My Booking</li>
                        <li className="tab">Check-in</li>
                        <li className="tab">Flight Status</li>
                    </ul>
                </div>
                <div className="tab_content">
                    <div className="tab_pane" id="flights">
                        <div className="tab_container">
                            Flights tab is active
                            Book flight please. WE ARE BROKE AS FUCK!
                        </div>
                    </div>
                    <div className="tab_pane active" id="myBooking">
                        <div className="tab_container">
                            Booking tab is active
                        </div>
                    </div>
                    <div className="tab_pane" id="checkIn">
                        <div className="tab_container">
                            CheckIn tab is active
                        </div>
                    </div>
                    <div className="tab_pane" id="flightStatus">
                        <div className="tab_container">
                            FlightStatus tab is active
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}