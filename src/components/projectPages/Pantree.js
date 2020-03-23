import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default class Builder extends Component {
    state={
        tags:['react','javaScript','Express js','Node js','CSS']
    }
    render() {
        return (
            <div className='projCont'>
                <h3>Pantree</h3>
                <div className='projPageContainer'>
                    
                    
                   
                    <p>Pantree is a mobile wrapper for google spreadsheet data. Using oAuth2 and the googlesheets API v4
                      Pantree projects your sheet data into a scrollable mobile setting. This application is still a work in progress.
                      In the future the application will allow real time gps updates and expiration dates for items stored.
                        <br></br>
                        <br></br>
                        While Pantree is designed for organizations that share google sheets among many members and a single google account,
                        it also works pretty well for people at home who want to do food prepping for events and or potential stocking for
                        a natural disaster.
                        <br></br>
                        <br></br>
                       <b> MTG-Builder provides</b>:
                        <ul>
                            <li>Read a summary of your sheet</li>
                            <li>Write to your sheet</li>
                            <li>get gps updates when your items expire</li>
                            <li>share your inventory with anyone using your account</li>

                        </ul>
                    </p>
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
      src={require("../../images/pantree/pantree_1.png")}
      alt="builder"
      width='250px'
      height='450px'
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-60 Carosel"
      src={require("../../images/pantree/pantree_2.png")}
      alt="initial app view"
      width='300px'
      height='450px'
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
       className="d-block w-50 Carosel"
       src={require("../../images/pantree/pantree_3.png")}
       alt="builder"
       width='250px'
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
