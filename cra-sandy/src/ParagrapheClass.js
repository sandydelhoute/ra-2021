import { Component } from "react"

export class ParagrapheClass extends Component {

    constructor() {
        super();
        console.log("constructor");
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    render(props) {
        console.log("render");

        return <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, obcaecati perspiciatis saepe aut reiciendis nulla esse ullam vero recusandae quibusdam cupiditate sunt ea. Laboriosam tenetur id ab nam sint corrupti!
        </p>
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
}

