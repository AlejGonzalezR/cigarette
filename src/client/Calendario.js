import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Calendario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrival_date: "",
            depurate_date: "",
        };
        this.handleChangeArrival = this.handleChangeArrival.bind(this);
        this.handleChangeDepurate = this.handleChangeDepurate.bind(this);


    }

    handleChangeArrival(date) {
        if (date > this.state.depurate_date) {
            this.setState({ depurate_date: date });
        }
        this.setState({ arrival_date: date });
    }
    handleChangeDepurate(date) {
        this.setState({ depurate_date: date });
    }



    render() {
        console.log(this.state)
        return (
            <div>

                <DatePicker
                    id={"arrival_date"}
                    name={"arrival_date"}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    placeholderText="Click to select a arrival date"
                    selected={this.state.arrival_date}
                    selectsStart
                    startDate={this.state.arrival_date}
                    endDate={this.state.depurate_date}
                    onChange={this.handleChangeArrival}
                    minDate={new Date()}
                />

                <DatePicker
                    id={"depurate_date"}
                    name={"depurate_date"}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    placeholderText="Click to select a depurate date"
                    selected={this.state.depurate_date}
                    selectsEnd
                    startDate={this.state.arrival_date}
                    endDate={this.state.depurate_date}
                    onChange={this.handleChangeDepurate}
                    minDate={this.state.arrival_date}
                />
            </div>
        )
    }
}
