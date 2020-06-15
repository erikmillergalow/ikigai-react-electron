import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import './Journal.css'
import ikigaiDiagram from './ikigai.png';

function Journal(props) {
    const [state , setState] = useState({
        text: "",
        mood: (0,0)
    })
    const handleTextChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
        console.log(state.text)
    }
    const handleEntrySubmit = (e) => {
        const selectedDate = state.date
        console.log(state.text)
        console.log(state.mood)
        redirectToCalendar();
        props.showError(null);
    }
    const redirectToCalendar = () => {
        props.updateTitle("Calendar");
        props.history.push('/calendar')
    }
    return(
        <div className="card col-12 col-lg-10 login-card mt-2 hv-center">
            <img src={ikigaiDiagram} alt="venn diagram" />
            <textarea 
                id="text"
                className="form-control"
                value={state.text}
                onChange={handleTextChange}
            ></textarea>
            <button
                type="submit"
                className="btn btn-primary"
                onClick={handleEntrySubmit}
            >Complete Entry</button>
        </div>
    )
}

export default withRouter(Journal);