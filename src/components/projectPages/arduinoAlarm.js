import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default class Builder extends Component {
    state={
        tags:['react','javaScript','Node js','CSS']
    }
    render() {
        return (
            <div className='projCont'>
                <h3>Arduino Remote Alarm System</h3>
                <div className='projPageContainer'>
                    
                    
                   
                    <p>The arduino remote alarm system combines web development and mechatronics. The arduino is equipped
                        with an accelerometer which triggers when the Z-axis accelerates faster than a specific value set 
                        by the user.
                    </p>
                        <br></br>
                        <br></br>
                        <p>Upon being triggered, the arduino sends an http request to an express server and triggers a call from
                        a node js emailer library. Upon successfully completing the request, I'm able to receive an email telling
                        me that the alarm has been triggered and that I should check it out.
                        </p>
                        <br></br>
                        <br></br>
                       <b> Ardunio Alarm Key Features</b>:
                        <ul>
                            <li>Automatically connects to WiFi</li>
                            <li>Battery powered</li>
                            <li>attaches to any door without setup</li>
                            <li>can be run on localhost or on a specific host</li>

                        </ul>
                    <div className='projPageContainer'>
                        <p>This app uses:</p>
                        {this.state.tags.map((index, i)=>{
                            return(
                            <span className='projTags' key={i}> {index} </span>
                            )
                        })
                    }
                    </div>
                </div>

                <div>
                <Carousel className='carBackground'>
  <Carousel.Item>
    <img
      className="d-block w-50 Carosel"
      src={require("../../images/arduino/arduino_1.jpg")}
      alt="builder"
      width='200px'
      height='450px'
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 Carosel"
      src={require("../../images/arduino/arduino_2.jpg")}
      alt="initial app view"
      width='200px'
      height='450px'
    />

  </Carousel.Item>
</Carousel>
<div className='footer'></div>
                </div>
            </div>
        )
    }
}
