import React from "react";
import "./SequenceInput.scss";

class SequenceInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value.toUpperCase().replace(/[^gpavlimcfywhkrqnedst+]+/gi, "")
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render () {
        return (
            <form className="sequence-input" onSubmit={this.handleSubmit}>
                <
                    input
                    name="sequence"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}

export default SequenceInput;