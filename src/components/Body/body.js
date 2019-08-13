import React, { Component } from 'react'
import './body.css'
import Card from '../Card/card'
import Axios from 'axios';
import Pagination from "react-js-pagination";
class body extends Component {
    constructor() {
        super()
        this.state = {
          card:[],
          activePage:1,
          limit:10
        }
    }
    // handlePageChange=(pageNumber) =>{
    //     console.log(`active page is ${pageNumber}`);
    //     this.setState({activePage: pageNumber});
    //   }

    cardClick=(index)=>
    {
        console.log("hh")
    }
componentDidMount=()=>
{
    var link = "http://localhost:8123/viewMovie"
    var obj={
        limit:10
    }
    Axios.post(link,obj).then(res => {
     
        this.setState({card:res.data},()=>
        {
            console.log(this.state.card)
        })
        console.log(res.data)
       
    })
    
   
}
    render() {
        return (
            <div className="body-container">
                {

                    this.state.card.length > 0 ? this.state.card.map((data, index) => {
                        
                          console.log(data)
                            return (
                                <div  key={index} onClick={this.cardClick}>
                                <Card imgSrc={data} ></Card>
                                </div>
                            )
                        }

                        ):<p>no data</p>
                
                }
                <div>
        {/* <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.state.card.length}
          pageRangeDisplayed={10}
          onChange={this.handlePageChange}
        /> */}
      </div>
            </div>
        )
    }
}
export default body;