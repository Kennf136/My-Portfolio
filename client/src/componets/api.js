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

        const cata = this.state.hardA.map((cat) => {
            return (
                <div>
                    <h1>  {cat.category} </h1>
                </div>
            )
        })
        const catb = this.state.hardB.map((cat) => {
            return (
                <div>
                    <h1>  {cat.category} </h1>
                </div>
            )
        })
        const catc = this.state.hardC.map((cat) => {
            return (
                <div>
                    <h1>  {cat.category} </h1>
                </div>
            )
        })
        const catd = this.state.hardD.map((cat) => {
            return (
                <div>
                    <h1>  {cat.category} </h1>
                </div>
            )
        })
        const cate = this.state.hardE.map((cat) => {
            return (
                <div>
                    <h1>  {cat.category} </h1>
                </div>
            )
        })
        const catf = this.state.hardF.map((cat) => {
            return (
                <div>
                    <h1>  {cat.category} </h1>
                </div>
            )
        })

        const Amep = this.state.easyB.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.correct_answer}{who.incorrect_answers} </div>
                </div>

            )
        })
        const Abeep = this.state.mediumB.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Aceeep = this.state.hardB.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Bmep = this.state.easyC.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.correct_answer}{who.incorrect_answers} </div>
                </div>

            )
        })
        const Bbeep = this.state.mediumC.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Bceeep = this.state.hardC.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Cmep = this.state.easyD.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.correct_answer}{who.incorrect_answers} </div>
                </div>

            )
        })
        const Cbeep = this.state.mediumD.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Cceeep = this.state.hardD.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Dmep = this.state.easyE.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.correct_answer}{who.incorrect_answers} </div>
                </div>

            )
        })
        const Dbeep = this.state.mediumE.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Dceeep = this.state.hardE.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Emep = this.state.easyE.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.correct_answer}{who.incorrect_answers} </div>
                </div>

            )
        })
        const Ebeep = this.state.mediumE.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Eceeep = this.state.hardE.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Fmep = this.state.easyF.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.correct_answer}{who.incorrect_answers} </div>
                </div>

            )
        })
        const Fbeep = this.state.mediumF.map((who, ) => {
            return (
                <div>

                    <div> {who.question}  </div>
                    <div>{who.incorrect_answers}{who.correct_answer} </div>
                </div>

            )
        })
        const Fceeep = this.state.hardF.map((who, ) => {
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
                    <div> {cata} </div>
                    <div>  {Amep} {Abeep}{Aceeep} </div>

                </div>
                <div>
                    <div> {catb} </div>
                    <div>  {Bmep} {Bbeep}{Bceeep} </div>

                </div>
                <div>
                    <div> {catc} </div>
                    <div>   {Cmep} {Cbeep}{Cceeep} </div>

                </div>
                <div>
                    <div> {catd} </div>
                    <div>   {Dmep} {Dbeep}{Dceeep}</div>

                </div>
                <div>
                    <div> {cate} </div>
                    <div>    {Emep} {Ebeep}{Eceeep} </div>

                </div>
                <div>
                    <div> {catf} </div>
                    <div>   {Fmep} {Fbeep}{Fceeep}</div>


                </div>
            </div>

        );
    }
}

export default Api;