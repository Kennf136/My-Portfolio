import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom'

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
            const easyQuestionBReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=29&difficulty=easy&type=multiple`)
            const mediumQuestionBReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=29&difficulty=medium&type=multiple`)
            const HardQuestionBReponse = await axios.get(`https://opentdb.com/api.php?amount=1&category=29&difficulty=hard&type=multiple`)
            const easyQuestionCReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=29&difficulty=easy&type=multiple`)
            const mediumQuestionCReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=29&difficulty=medium&type=multiple`)
            const HardQuestionCReponse = await axios.get(`https://opentdb.com/api.php?amount=1&category=29&difficulty=hard&type=multiple`)
            const easyQuestionDReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=29&difficulty=easy&type=multiple`)
            const mediumQuestionDReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=29&difficulty=medium&type=multiple`)
            const HardQuestionDReponse = await axios.get(`https://opentdb.com/api.php?amount=1&category=29&difficulty=hard&type=multiple`)
            const easyQuestionEReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=29&difficulty=easy&type=multiple`)
            const mediumQuestionEReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=29&difficulty=medium&type=multiple`)
            const HardQuestionEReponse = await axios.get(`https://opentdb.com/api.php?amount=1&category=29&difficulty=hard&type=multiple`)
            const easyQuestionFReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=29&difficulty=easy&type=multiple`)
            const mediumQuestionFReponse = await axios.get(`https://opentdb.com/api.php?amount=2&category=29&difficulty=medium&type=multiple`)
            const HardQuestionFReponse = await axios.get(`https://opentdb.com/api.php?amount=1&category=29&difficulty=hard&type=multiple`)
          
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



        const Amep = this.state.easyA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.correct_answer}{who.incorrect_answers} </div>
                </div>

            )
        })
        const Abeep = this.state.mediumA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Aceeep = this.state.hardA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Bmep = this.state.easyA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.correct_answer}{who.incorrect_answers} </div>
                </div>

            )
        })
        const Bbeep = this.state.mediumA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Bceeep = this.state.hardA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Cmep = this.state.easyA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.correct_answer}{who.incorrect_answers} </div>
                </div>

            )
        })
        const Cbeep = this.state.mediumA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Cceeep = this.state.hardA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Dmep = this.state.easyA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.correct_answer}{who.incorrect_answers} </div>
                </div>

            )
        })
        const Dbeep = this.state.mediumA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Dceeep = this.state.hardA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Emep = this.state.easyA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.correct_answer}{who.incorrect_answers} </div>
                </div>

            )
        })
        const Ebeep = this.state.mediumA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Eceeep = this.state.hardA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Fmep = this.state.easyA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.correct_answer}{who.incorrect_answers} </div>
                </div>

            )
        })
        const Fbeep = this.state.mediumA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Fceeep = this.state.hardA.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        

        return (
            <div>

                <div>
                    
                    {Amep} {Abeep}{Aceeep}
                </div>
                <div>
                    {Bmep} {Bbeep}{Bceeep}
                </div>
                <div>
                    {Cmep} {Cbeep}{Cceeep}
                </div>
                <div>
                    {Dmep} {Dbeep}{Dceeep}
                </div>
                <div>
                    {Emep} {Ebeep}{Eceeep}
                </div>
                <div>
                    {Fmep} {Fbeep}{Fceeep}
                    
                </div>
            </div>

        );
    }
}

export default Api;