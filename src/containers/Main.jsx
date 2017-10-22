import React, {Component} from "react";
import {connect} from "react-redux";

import App from "../components/App";
import { testAction } from "../actions";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <App />
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Main);