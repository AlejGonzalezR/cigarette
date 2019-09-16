'use strict';

class LikeButton extends React.Component {

    
  constructor(props) {
    super(props);
    this.state = { liked: false, conf1:"orange", conf2:"red"};
    this.onChange =  this.onChange.bind(this)
    this.aver =  this.aver.bind(this)
   

}

aver(e){
    this.setState({hola:e})
}

 componentDidMount(){
    var valores = '';

    var onSuccess = location => {  
        this.aver(JSON.stringify(location, undefined, 4))  
         
    };

    var onError = error => { 
        this.aver(JSON.stringify(error, undefined, 4))
    };

    geoip2.city(onSuccess, onError);
    
    $( "#fechaInicio" ).datepicker({format: 'yyyy-mm-dd'});
    $( "#fechaFin" ).datepicker({format: 'yyyy-mm-dd'});

    
        fetch('http://dev.clever-api-agency.local/agencydirectreservations/elementbyid/'+document.getElementById("react").getAttribute("data-name"), {
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
                    this.setState({datos : json})
                    
                } else {
                    console.log("nel");
                }
                
            }).catch(error => {
                console.log("error");
            })
    
    }
onChange(e){
    this.setState({[e.target.name]: e.target.value});
}
onClick(e){
   var fechainicio = document.getElementById("fechaInicio").value;
   var fechafin = document.getElementById("fechaFin").value;
    var config = document.getElementById("react").getAttribute("data-name"); 

    var  json = "datos aleatorios";
    console.log(config, this.state.hotel, fechainicio )
    var win = window.open(`http://localhost:3000/pg/${this.state.hotel}/${fechainicio}/${fechafin}/${this.state.adultos}/${this.state.ninos}/${config}`, "_blank");
    win.datos = json;
}



  render() {
       console.log(this.state)
    var config = document.getElementById("react").getAttribute("data-name"); 
    let styles = {backgroundColor: "orange", padding: "1em .5em"};
    let styles2 = {backgroundColor: "red", padding: "1em .5em"};
    let css = {    padding: ".5em .8em",
        fontSize: "1em",
        background: "white",
        fontFamily: "sans-serif",
        color: "black",
        marginRight: ".5em"}

        return (
            <div>
                <div style={config == 350 ? styles : styles2}>
         
                    <select style={css} value={this.state.hotel} name="hotel" onChange={e => this.onChange(e)}>
                        <option value="">select</option>
                        <option value="hotel1">hotel 1</option>
                        <option value="hotel2">hotel 2</option>
                        <option value="hotel3">hotel 3</option>
                    </select>
                     <input style={css} data-provide="datepicker" type="text" name="fechaInicio" id="fechaInicio" className="" autoComplete="off" placeholder="MM/DD/YYYY" onBlur={e => this.onChange(e)} required />
                     <input style={css} data-provide="datepicker" type="text" name="fechaFin" id="fechaFin" className="" autoComplete="off" placeholder="MM/DD/YYYY" onBlur={e => this.onChange(e)} required />
                     
                     <select style={css} value={this.state.adultos} name="adultos" onChange={e => this.onChange(e)}>
                        <option value="">select</option>
                        <option value="1">adultos 1</option>
                        <option value="2">adultos 2</option>
                        <option value="3">adultos 3</option>
                    </select>
                    <select style={css} value={this.state.ninos} name="ninos" onChange={e => this.onChange(e)}>
                        <option value="">select</option>
                        <option value="1">niños 1</option>
                        <option value="2">niños 2</option>
                        <option value="3">niños 3</option>
                    </select>
                    <button style={css} type="button" onClick={e => this.onClick(e)}>Buscar</button>
                 </div>
                {this.state.datos ? <h3 style={{color:"white"}}>{this.state.datos.Hotel}</h3> : null}
                
            </div>

        );
    }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);