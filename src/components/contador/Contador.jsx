import React, { Component } from 'react';
import './Contador.css'

export default class Contador extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         passo: props.passo,
    //         valor: 0
    //     }
    // }

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    render() {
        return (
            <div className="Contador"> 
                <h2>Contador</h2>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input
                        id="passoInput"
                        type="number"
                        value={this.state.passo}
                        onChange={e => this.setState({ passo: +e.target.value })}
                    />
                </div>
                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}