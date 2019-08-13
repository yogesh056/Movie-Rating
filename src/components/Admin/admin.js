import React, { Component } from 'react';
//const jwt = require('jsonwebtoken')
import { storage } from '../../firebase';
import Axios from 'axios';
class Admin extends Component {
    constructor() {
        super()
        this.state = {

            movieName: "",
            releaseYear: 2012,
            description: '',
            imgurl: '',
            horror:false,
            comedy:false,
            drama:false,
            thriller:false,
            action:false,
            genreArray:[],
            runningTime:'',
        }
    }

    uploadImage = (e) => {

        const img = e.target.files[0];

        
        console.log()
        const uploadTask = storage.ref(`images/${img.name}`).put(img);
        uploadTask.on('state_changed', (snapshot) => { },
          (error) => { console.log(error) },
          () => {
            storage.ref('images').child(img.name).getDownloadURL().then(url => {
              console.log(url)
              this.setState({ imgurl: url }, () => {
                console.log(this.state.imgurl)
              })
    
            })
          })
        this.setState({ imgurl: img })

    }
    onChangeCheck=(e)=> {
        this.setState({ [e.target.name]: e.target.checked });
        console.log(e.target.name+"-"+e.target.checked)
        const genre=
        {
         [e.target.name]: e.target.checked
         }
        
        this.state.genreArray.push(genre)
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name + "-" + e.target.value)
        
    }

    onSubmit = (e) => {
        var obj = {
            name : this.state.movieName,
            genre:JSON.stringify(this.state.genreArray),    
            review:[],
            likes:0,
            desc: this.state.description,
            releaseYear:parseInt(this.state.releaseYear),
            image:this.state.imgurl,
            runningTime:parseInt(this.state.runningTime)
                
            
        }
        console.log(typeof obj)
        var json=JSON.stringify(obj)
        console.log(json)
        e.preventDefault()
        var link = "http://localhost:8123/addMovie"
        Axios.post(link,json).then(res => {
            console.log(res)
        })

    }

    render() {
        return (
            <div className="container-form">
                <form noValidate onSubmit={this.onSubmit} action="post">
                    <div className="row">
                        <div className="col-25">
                            <label className="label-1" for="fname">Movie Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="movieName" placeholder="movie name" value={this.state.movieName}
                                onChange={this.onChange} />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-25">
                            <label className="label-1" for="lname">runningTime</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="runningTime" placeholder="runningTime" value={this.state.runningTime}
                                onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label className="label-1" for="lname">runningTime</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="releaseYear" placeholder="releaseYear" value={this.state.releaseYear}
                                onChange={this.onChange} />
                        </div>
                    </div>

                    <input style={{ paddigRight: "10px" }} onChange={this.uploadImage} id="file-upload" type="file" />

                    <div className="row">
                        <div className="col-25">
                            <label className="label-1" for="subject">Description</label>
                        </div>
                        <div className="col-75">
                            <textarea id="subject" name="description" placeholder="Write something.." value={this.state.description}
                                onChange={this.onChange}></textarea>
                        </div>
                    </div>
                    <label class="container" >Comedy
  <input type="checkbox" name="comedy" value={this.state.comedy}
                            onChange={this.onChangeCheck} />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">Drama
  <input type="checkbox" name="drama" value={this.state.drama}
                            onChange={this.onChangeCheck} />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">Action
  <input type="checkbox" name="action" value={this.state.action}
                            onChange={this.onChangeCheck} />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">Horror
  <input type="checkbox" name="horror" value={this.state.horror}
                            onChange={this.onChangeCheck} />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">Thriller
  <input type="checkbox" name="thriller" value={this.state.thriller}
                            onChange={this.onChangeCheck} />
                        <span class="checkmark"></span>
                    </label>



                    <div className="row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Admin;
