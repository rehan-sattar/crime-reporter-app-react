import React from "react";
import firebase from "firebase";
class GetWeather extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentWillMount() {
        console.log('Component Will Mount!');

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    users: data
                })
            })
    }
    render() {
        return (
            <div>
                You are in Weather App.
                <ul>
                    {this.state.users.map((singleUser) => <li> {singleUser.name} </li>)}
                </ul>
            </div>
        );
    }
}


class RenderFirebase extends React.Component {
    constructor() {
        super();
        this.state = {
            crimeArray: undefined
        }
    }

    componentWillMount() {
        const refNode = firebase.database().ref('reports').child('crime');
        refNode.once('value').then((res) => {
            this.setState({
                crimeArray: res.val()
            })
        })
    }
    render() {
        return (
            <div>
                You are in Firebase App
                <ul>
                    {this.state.crimeArray === undefined ? <p>Loading... </p> : <p>Got the data </p> }
                </ul>
            </div>
        )
    }
}
export default class AppTest extends React.Component {
    render() {
        return (
            <div>

                <GetWeather />

                <RenderFirebase />
            </div>
        );
    };
};