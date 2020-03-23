import React, { Component } from 'react'

export default class Builder extends Component {
    state={
        tags:['react','javaScript','Node js','CSS']
    }
    render() {
        return (
            <div>
                <div className='projPageContainer'>
                    <img></img>
                    <p>MTG builder is a magic the gathering card game application built in react
                        it aims to assist new and veteran players of the game the chance to build
                        comprehensive decks based on returned stats run by the app during an analysis of each deck.
                        <br></br>
                        <br></br>
                        Using the Magic the gathering API to query the library of available cards, players can search
                        for any card in the app as well as use a list of advanced search features and filters.
                        <br></br>
                        <br></br>
                       <b> MTG-Builder provides</b>:
                        <ul>
                            <li>Randomly generated hands</li>
                            <li>Ability to generate your own stats</li>
                            <li>Deck by deck comparisons of strengths and weaknesses</li>
                            <li>deck color and type composition %</li>

                        </ul>
                    </p>
                    <div className='projPageContainer'>
                        <p>This app was built using</p>
                        {this.state.tags.map((index, i)=>{
                            return(
                            <span className='projTags' key={i}> {index} </span>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}
