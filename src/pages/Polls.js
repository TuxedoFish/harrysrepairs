// React Imports
import React from 'react'
import axios from 'axios'

// Canvas JS
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// React select
import ReactSelect from 'react-select'

// Components
import Footer from '../components/Footer.jsx'

export default class Polls extends React.Component {

  constructor(props) {
    super(props)

    // Interesting votes
    // Windrush release of documents 896218
    // Investigatory powers 523300

    this.getVote("896218")

    this.state = {
      voteName: "",
      voteResults: {},
      description: "That an humble Address be presented to Her Majesty, that she will be graciously pleased to give directions that the following papers be provided to the Home Affairs Committee: all papers, correspondence and advice including emails and text messages, from 11 May 2010 up to and including 1 May 2018, to and between Ministers, senior officials and Special Advisers relating to policy decisions including on the Immigration Acts 2014 and 2016 with regard the Windrush generation cases, including deportations, detentions and refusal of re-entry, the setting of deportation and removal targets and their effect on the Windrush generation, and action taken within Government following the concerns raised by Caribbean Governments with the Foreign and Commonwealth Office including the original decision by the Prime Minister not to meet Caribbean Heads of Government and officials, and all copies of minutes and papers relating to the Cabinet’s Immigration Implementation Taskforce.",
      selected: "Conservative"
    }
  }

  getVote = (voteID) => {
    axios.get(`http://lda.data.parliament.uk/commonsdivisions/id/${voteID}.json`)
      .then((response) => {
        console.log(response.data);

        var voteResults = this.getResultsByParty(response.data)

        this.setState({
          voteName: response.data.result.primaryTopic.title,
          voteResults: voteResults
        })
      });
  }

  getResultsByParty = (result) => {
    console.log(result)
    console.log(result.result.primaryTopic.vote)
    var vote = result.result.primaryTopic.vote

    var parties = {}

    // Different types of vote
    const noVote = "http://data.parliament.uk/schema/parl#NoVote"
    const yesVote = "http://data.parliament.uk/schema/parl#AyeVote"

    vote.forEach( (member) => { 
      var party = member.memberParty
      var type = member.type
      
      if(!(party in parties)) {
        parties[party] = {"yes": 0, "no": 0}
      }

      switch(type) {
        case yesVote:
          parties[party]["yes"] = parties[party]["yes"] + 1
          break;
        
        case noVote:
          parties[party]["no"] = parties[party]["no"] + 1
          break;
      }

    })

    return parties
  }

  change = (event) => {
    console.log(event)
    this.setState({selected: event.value})
  }

  render() {

    console.log(this.state);

    const { voteName, voteResults, selected, description } = this.state

    const test = "Conservative"
    const hasLoaded = test in voteResults

    if(hasLoaded) {
      
      var keys = Object.keys(voteResults);

      const selectOptions = []
      
      keys.forEach( key => selectOptions.push({ value: key, label: key}))

      const Ayes = voteResults[selected]["yes"]
      const Noes = voteResults[selected]["no"]
      const Total = Ayes + Noes;

      const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
          text: selected
        },
        data: [{
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            { y: Ayes/Total*100, label: "Yes" },
            { y: Noes/Total*100, label: "No" },
          ]
        }]
      }

      return ( 
        <>
          <div className="navbar">
            <div className="container">
              <h4 className="navbar-title">Harry's Repairs</h4>
            </div>
          </div>
  
          <div className="section parallax polls">
            <div className="container landing-container">
              <h2 className="landing-heading">{voteName}</h2>
              <p className="poll-description">{description}</p>
              <h4 className="poll-description">Tl;dr Should the goverment release internal documents concerning their handling of the Windrush scandal?</h4>
              <h4 className="landing-heading">How each party voted:</h4>
              <ReactSelect options={selectOptions} onChange={this.change} value={{value: selected, label: selected}}/>
              <CanvasJSChart options={options}/>
            </div>
          </div>
  
          <Footer />
        </>
      )
    } else {
      return ( 
        <>
          <div className="navbar">
            <div className="container">
              <h4 className="navbar-title">Harry's Repairs</h4>
            </div>
          </div>

          <div className="section parallax polls">
            <div className="container landing-container">
              <h2 className="landing-heading">Loading...</h2>
            </div>
          </div>

          <Footer />
        </>
      )
    }
  }
  
}
