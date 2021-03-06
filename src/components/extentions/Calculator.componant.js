import React, {Component} from 'react'
import './extention.styles.css'

export default class Calculator extends Component {
    constructor(props){
        super(props)
        
        this.state({
            answer: 2955
        })
    }

    render() {

        function reset(){
            this.setState({
                answer: 0
            })
        }

        return(
            <div>
            <div class="calc-body">
              <div class="calc-screen">
                <div class="calc-operation">2536 + 419 + </div>
                <div class="calc-typed">{this.state.answer}<span class="blink-me">_</span></div>
              </div>
              <div class="calc-button-row">
                <div class="button c" onclick={reset.bind(this)}>C</div>
                <div class="button l">≠</div>
                <div class="button l">%</div>
                <div class="button l">/</div>
              </div>
              <div class="calc-button-row">
                <div class="button">7</div>
                <div class="button">8</div>
                <div class="button">9</div>
                <div class="button l">x</div>
              </div>
              <div class="calc-button-row">
                <div class="button">4</div>
                <div class="button">5</div>
                <div class="button">6</div>
                <div class="button l">−</div>
              </div>
              <div class="calc-button-row">
                <div class="button">1</div>
                <div class="button">2</div>
                <div class="button">3</div>
                <div class="button l">+</div>
              </div>
              <div class="calc-button-row">
                <div class="button">.</div>
                <div class="button">0</div>
                <div class="button">&lt;</div>
                <div class="button l">=</div></div>
              </div>
              </div>
        )
    }
}