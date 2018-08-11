import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Questions from './Question';

class Api extends Component {

    state = {
  

        easyA: [{}],
        mediumA: [{}],
        hardA: [{}],
        easyB: [{}],
        mediumB: [{}],
        hardB: [{}],
        easyC: [{}],
        mediumC: [{}],
        hardC: [{}],
        easyD: [{}],
        mediumD: [{}],
        hardD: [{}],
        easyE: [{}],
        mediumE: [{}],
        hardE: [{}],
        easyF: [{}],
        mediumF: [{}],
        hardF: [{}],
        

    }
        ;
    componentDidMount() {
        this.getQuestions();
    }

    getQuestions = async () => {
        try {
            const easyQuestionAReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=29&difficulty=easy&type=multiple`)
            const mediumQuestionAReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=29&difficulty=medium&type=multiple`)
            const HardQuestionAReponse = await axios.get(`https://opentdb.com/api.php?amount=1&category=29&difficulty=hard&type=multiple`)

            const easyQuestionBReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=31&difficulty=easy&type=multiple`)
            const mediumQuestionBReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=31&difficulty=medium&type=multiple`)
            const HardQuestionBReponse = await axios.get(`https://opentdb.com/api.php?amount=1&category=31&difficulty=hard&type=multiple`)

            const easyQuestionCReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=32&difficulty=easy&type=multiple`)
            const mediumQuestionCReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=32&difficulty=medium&type=multiple`)
            const HardQuestionCReponse = await axios.get(`https://opentdb.com/api.php?amount=1&category=32&difficulty=hard&type=multiple`)

            const easyQuestionDReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=18&difficulty=easy&type=multiple`)
            const mediumQuestionDReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=18&difficulty=medium&type=multiple`)
            const HardQuestionDReponse = await axios.get(`https://opentdb.com/api.php?amount=1&category=18&difficulty=hard&type=multiple`)

            const easyQuestionEReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=15&difficulty=easy&type=multiple`)
            const mediumQuestionEReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=15&difficulty=medium&type=multiple`)
            const HardQuestionEReponse = await axios.get(`https://opentdb.com/api.php?amount=1&category=15&difficulty=hard&type=multiple`)

            const easyQuestionFReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=12&difficulty=easy&type=multiple`)
            const mediumQuestionFReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=12&difficulty=medium&type=multiple`)
            const HardQuestionFReponse = await axios.get(`https://opentdb.com/api.php?amount=1&category=12&difficulty=hard&type=multiple`)
          
            this.setState({
                // category:[{
                easyA: easyQuestionAReponse.data.results,
                mediumA: mediumQuestionAReponse.data.results,
                hardA: HardQuestionAReponse.data.results,
                easyB: easyQuestionBReponse.data.results,
                mediumB: mediumQuestionBReponse.data.results,
                hardB: HardQuestionBReponse.data.results,
                easyC: easyQuestionCReponse.data.results,
                mediumC: mediumQuestionCReponse.data.results,
                hardC: HardQuestionCReponse.data.results,
                easyD: easyQuestionDReponse.data.results,
                mediumD: mediumQuestionDReponse.data.results,
                hardD: HardQuestionDReponse.data.results,
                easyE: easyQuestionEReponse.data.results,
                mediumE: mediumQuestionEReponse.data.results,
                hardE: HardQuestionEReponse.data.results,
                easyF: easyQuestionFReponse.data.results,
                mediumF: mediumQuestionFReponse.data.results,
                hardF: HardQuestionFReponse.data.results,
            });
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {

const cata= this.state.hardA.map((cat)=>{
    return(
        <div>
          <h1>  {cat.category} </h1> 
        </div>
    )
})
const catb= this.state.hardB.map((cat)=>{
    return(
        <div>
          <h1>  {cat.category} </h1> 
        </div>
    )
})
const catc= this.state.hardC.map((cat)=>{
    return(
        <div>
          <h1>  {cat.category} </h1> 
        </div>
    )
})
const catd= this.state.hardD.map((cat)=>{
    return(
        <div>
          <h1>  {cat.category} </h1> 
        </div>
    )
})
const cate= this.state.hardE.map((cat)=>{
    return(
        <div>
          <h1>  {cat.category} </h1> 
        </div>
    )
})
const catf= this.state.hardF.map((cat)=>{
    return(
        <div>
          <h1>  {cat.category} </h1> 
        </div>
    )
})
const tea= ()=>{ 
        const Amep = this.state.easyA.map((who, ) => {
            return (
                <div>

                   {/* <Questions QAE={who.question} AAE={who.correct_answer} IAE={who.incorrect_answers}></Questions> */}
                </div>

            )
        })
        const Abeep = this.state.mediumA.map((who, ) => {
            return (
                <div>

                    //   <Questions QAM={who.question} ABM={who.correct_answer} IBM={who.incorrect_answers}></Questions>
                </div>

            )
        })
        const Aceeep = this.state.hardA.map((who, ) => {
            return (
                <div>

                      {/* <Questions QAH={who.question} AAH={who.correct_answer} IAH={who.incorrect_answers} CA={who.category}></Questions> */}
                </div>

            )
        })
        const Bmep = this.state.easyB.map((who, ) => {
            return (
                <div>

                       {/* <Questions QBE={who.question} ABE={who.correct_answer} IBE={who.incorrect_answers}></Questions> */}
                </div>

            )
        })
        const Bbeep = this.state.mediumB.map((who, ) => {
            return (
                <div>

                   {/* <Questions QBM={who.question} ABM={who.correct_answer} IBM={who.incorrect_answers}></Questions> */}
                </div>

            )
        })
        const Bceeep = this.state.hardB.map((who, ) => {
            return (
                <div>

                     {/* <Questions QBH={who.question} ABH={who.correct_answer} IBH={who.incorrect_answers} CB={who.category}></Questions> */}
                </div>

            )
        })
        const Cmep = this.state.easyC.map((who, ) => {
            return (
                <div>

                      {/* <Questions QCE={who.question} ACE={who.correct_answer} ICE={who.incorrect_answers} CC={who.category}></Questions> */}
                </div>

            )
        })
        const Cbeep = this.state.mediumC.map((who, ) => {
            return (
                <div>

                      {/* <Questions QCM={who.question} ACM={who.correct_answer} ICM={who.incorrect_answers}></Questions> */}
                </div>

            )
        })
        const Cceeep = this.state.hardC.map((who, ) => {
            return (
                <div>

                    {/* <Questions QCH={who.question} ACH={who.correct_answer} ICH={who.incorrect_answers} CC={who.category}></Questions> */}
                </div>

            )
        })
        const Dmep = this.state.easyD.map((who, ) => {
            return (
                <div>

                    {/* <Questions QDE={who.question} ADE={who.correct_answer} IDE={who.incorrect_answers}></Questions> */}
                </div>

            )
        })
        const Dbeep = this.state.mediumD.map((who, ) => {
            return (
                <div>

                    {/* <Questions QDM={who.question} ADM={who.correct_answer} IDM={who.incorrect_answers}></Questions> */}
                </div>

            )
        })
        const Dceeep = this.state.hardD.map((who, ) => {
            return (
                <div>

                      {/* <Questions QDH={who.question} ADH={who.correct_answer} IDH={who.incorrect_answers} CD={who.category}></Questions> */}
                </div>

            )
        })
        const Emep = this.state.easyE.map((who, ) => {
            return (
                <div>

                     {/* <Questions QEE={who.question} AEE={who.correct_answer} IEE={who.incorrect_answers}></Questions> */}
                </div>

            )
        })
        const Ebeep = this.state.mediumE.map((who, ) => {
            return (
                <div>

                     {/* <Questions QEM={who.question} AEM={who.correct_answer} IEM={who.incorrect_answers}></Questions> */}
                </div>

            )
        })
        const Eceeep = this.state.hardE.map((who, ) => {
            return (
                <div>

                    {/* <Questions QEH={who.question} AEH={who.correct_answer} IEH={who.incorrect_answers} CE={who.category}></Questions> */}
                </div>

            )
        })
        const Fmep = this.state.easyF.map((who, ) => {
            return (
                <div>

                     {/* <Questions QFE={who.question} AFE={who.correct_answer} IFE={who.incorrect_answers}></Questions> */}
                </div>

            )
        })
        const Fbeep = this.state.mediumF.map((who, ) => {
            return (
                <div>

                       {/* <Questions QFM={who.question} AFM={who.correct_answer} IFM={who.incorrect_answers}></Questions> */}
                </div>

            )
        })
        const Fceeep = this.state.hardF.map((who, ) => {
            return (
                <div>

                      {/* <Questions QFH={who.question} AFH={who.correct_answer} IFH={who.incorrect_answers} CF={who.category}></Questions> */}
                </div>

            )
        })

        const copy=[Fceeep,Fbeep,Fmep,Eceeep,Ebeep,Emep,Dceeep,Dbeep,Dmep,Cceeep,Cbeep,Cmep,Bceeep,Bbeep,Bmep,Aceeep,Abeep,Amep]
        return(
            <Questions copy={copy}  />
        )
    }

        return (
            <div>

           
                    
                 {tea}
               
                
            </div>

        );
    }
}

export default Api;