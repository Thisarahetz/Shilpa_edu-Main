import React, {Component} from 'react'
import QrReader from 'react-qr-scanner'
import './component.styles.css'

export default class QR extends Component {

    constructor(props){
        super(props)
        this.state = {
          delay: 100,
          result: 'No result',
          nonVolatile: null
        }
     
        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data){
        this.setState({
            result: data,
            })
    }

    handleError(err){
        console.error(err)
    }

    render() {
        const previewStyle = {
            // height: 240,
            width: 380,
        }

        if(this.state.result != null){
            // eslint-disable-next-line
            this.state.nonVolatile = this.state.result
        }

        return(
            <div>
                <div className="card w-0 bg-light">
                    <div className="qr-frame-control mt-2 mx-auto border">
                        <QrReader
                        delay={this.state.delay}
                        style={previewStyle}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        className="center"
                        />
                    </div>
                    <div className="card-body">
                        <p className="card-text">{this.state.nonVolatile}</p>
                        <a href={this.state.nonVolatile} class="btn btn-primary">Open</a>
                    </div>
                </div>
            </div>
            
        );
    }
}