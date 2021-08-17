import React, { Component } from "react";

class Sample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.preLoad();
    }
    preLoad() {
        var url = 'https://jsonplaceholder.typicode.com/photos';
        axios.get(url).then(res => { this.setState({ data: res.data }); });
        console.log(this.state.data);

    }
    render() {
        return <h1>Hello, world</h1>;
    }
}

export default Sample;