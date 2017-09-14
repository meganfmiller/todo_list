import React, {Component} from 'react';

class Todo extends Component {
    constructor() {
        super();

        this.state = {
            input: ''
        }
    }
    render() {
        return (
            <div className='Todo'>
                <h1>Todo</h1>
                <ol className='todo_list'>
                {
                    this.props.list.map((item, i, arr) => {
                        return (
                            <li key={i} onClick={() => this.props.completeItem(i, item)}>{item}</li>
                        )
                    })
                }
                </ol>
                <div className='input_container'>
                    <input type='text' value={this.state.input} onChange={(e) => {
                        this.setState({
                            input: e.target.value
                        })
                    }}/>
                    <button onClick={() => this.props.addItem(this.state.input)}>Add Item</button>
                </div>
            </div>
        )
    }
}

export default Todo