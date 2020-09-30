import React, {Component} from 'react'
import "../App.css"
import {Button} from "react-bootstrap"
import  axios from 'axios';
import MyBooks from './MyBooks.js'
import  useHistory  from 'react-router-dom'
import {Redirect} from "react-router-dom"

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            Book:'',
            Return: {

            }
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    changeHandler = (event) =>{
        this.setState({Book: event.target.value}); 
    }
    submitHandler = () =>{
        let Data = [];
        const Title ={
            book: this.state.Book
        };
        axios.post('/Find', {Title}).then(res => {
            for(let i = 0; i < res.data.length;i++){
                Data.push(res.data[i][0]) // data

            };
            this.props.update(Data);
            console.log(Data)
            {this.props.history.push('/MyBooks')}

        })
        .catch(err => console.log(err))
        
    }

    render(){
        return (
            <div className="HomePage">
                <div className="background"></div>
                <div className="MainPageContent">
                    <h1 id="title">OnTech InStock</h1> 
                    <div className=" searchBar active-cyan-3 active-cyan-4 mb-4">
                        <input onChange={this.changeHandler} className="form-control" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                    <Button onClick={this.submitHandler} variant="primary">Search</Button>

                </div>  
                
            </div>
        );
    }
    
}


export default Home;