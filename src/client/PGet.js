import React, { Component } from 'react';

export default class PGet extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }

    componentDidMount(){
        fetch('http://dev.clever-api-agency.local/agencydirectreservations/elementbyid/'+this.props.match.params.config, {
            headers: new Headers({
                'Authorization': 'Bearer ' + localStorage.getItem('jwttoken'),
                'Content-Type': 'application/json; charset=utf-8'
            }),
            method: 'GET'
        })
            .then(res => res.json())
            .then(json => {
                if (!json.error) {
                    console.log("si");
                    
                } else {
                    console.log("nel");
                }
                
            }).catch(error => {
                console.log("error");
            })
    
    }
    render() {
        
        return (
            <div>
                <h3>fecha inicio:{this.props.match.params.fechainicio} </h3>
                <h3>fecha fin:{this.props.match.params.fechafin} </h3>
                <h3>Adultos:{this.props.match.params.adultos} </h3>
                <h3>niños:{this.props.match.params.ninos} </h3>
                <h3>hotel:{this.props.match.params.hotel} </h3>
                <h3>configuracion: {this.props.match.params.config} </h3>
            </div>
        );
    }
}
