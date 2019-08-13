import React, { Component } from 'react'
import './card.css'
import { database } from 'firebase';
export default class card extends Component {
    render() {
        console.log(this.props.imgSrc.Name)
        return (

            <div className="card-container">
                <div className="card-body">
                    <div className="img">
                        <img src={this.props.imgSrc.Image}></img>
                    </div>
                </div>

                <div className="hover-top">
                    <h1>{this.props.imgSrc.Name}</h1>
                </div>
                {/* <div className="hover-middle">
                   <h1>hi</h1>
                   </div> */}
                <div className="hover-bottom">
                    <div className="hover-bottom-div">
                        <div className="hover-bottom-div-1">
                            <span className="hover-bottom-div-span">Year:</span>
                            <span>{this.props.imgSrc.ReleaseYear}</span>
                        </div>
                        <div>
                            <span className="hover-bottom-div-span">Minutes:</span>
                            <span>{this.props.imgSrc.RunningTime}</span>
                        </div>
                    </div>

                    <div className="hover-bottom-div-2">
                        <span className="hover-bottom-div-span"> Rating:</span>
                        <span>0/10</span>
                    </div>
                </div>

            </div>

        )
    }
}
