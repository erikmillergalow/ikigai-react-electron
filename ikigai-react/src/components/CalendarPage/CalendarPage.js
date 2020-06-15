import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { withRouter } from "react-router-dom";

function CalendarPage(props) {
    const [state , setState] = useState({
        date: new Date(),
    })
    const handleChange = (newDate) => {
        setState({ date: newDate})
        console.log(state.date)
       //console.log(date)
    }
    const handleDateSubmit = (e) => {
        const selectedDate = state.date
        console.log(selectedDate)
        redirectToJournal();
        props.showError(null);
    }
    const redirectToJournal = () => {
        props.updateTitle("Journal");
        props.history.push('/journal')
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <div className="mt-2">
                <Calendar onChange={handleChange} value={state.date} />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                onClick={handleDateSubmit}
            >Create Entry</button>
        </div>
    )
}

export default withRouter(CalendarPage);