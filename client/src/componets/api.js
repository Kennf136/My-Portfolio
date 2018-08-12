import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom'
import QAH from './QAH';
import QBH from './QBH';
import QCH from './QCH';
import QDH from './QDH';
import QEH from './QEH';
import QFH from './QFH';

const Container= styled.div`
display:flex;
flex-direction:row;
align-items:center;
height:100vh;
background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVWmXTaGW32U92fj9xlpfjaCfgZuRu5qwIajzVkKZYJxbOhLUg');
background-size:cover;
`
const Back=styled.div`
background-color:blue;
display:flex;
flex-direction:row;
align-items:center;
height:80vh;
width:100vw;
`
const Alignment= styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
width: 30rem;
height: 90vh;
justify-content:center;
`
const Score= styled.div`
display:flex;
border:solid;
justify-content:center;
height:11.6rem;
align-items:center;
`
const Cat= styled.div`
height:8rem;
border:solid;
align-items:center;
justify-content:center;
display:flex;
`
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

        const Amep = this.state.easyA.map((who, i) => {
            let show = true
            return (
                <div>


                    {show ? <Score onClick={() => { show = false }} > $ {(i + 1) * 200} </Score>

                        :

                        <div onClick={() => { show = false }}>
                            <h3> {who.question}  </h3>
                            <div>{who.correct_answer}{who.incorrect_answers}  </div>
                        </div>
                    }
                </div>

            )
        })
        const Abeep = this.state.mediumA.map((who, i) => {
            let show = true
            return (
                <div>
                    {show ?
                        <Score onClick={() => { show = false }} > $ {(i + 3) * 200} </Score>
                        :

                        <div onClick={() => { show=false }}>
                            <h3> {who.question}  </h3>
                            <div>{who.incorrect_answers}{who.correct_answer} </div></div>

                    }
                </div>

            )
        })
        // const Aceeep = this.state.hardA.map((who, i) => {
        //     let show = true
        //     return (
        //         <Score>
                  
        //             <QAH QAH={who.question} AAH={who.correct_answer} IAH={who.incorrect_answers} value={i}></QAH>

        //         </Score>

        //     )
        // })
        const Bmep = this.state.easyB.map((who, i) => {
            let show = true
            return (
                <div>
                    {show ?
                        <Score onClick={() => this.setState({ show: false })}> $ {(i + 1) * 200} </Score>
                        :
                        <div onClick={() => { show = true }}>
                            <h3> {who.question}  </h3>
                            <div>{who.correct_answer}{who.incorrect_answers} </div>
                        </div>
                    }

                </div>

            )
        })
        const Bbeep = this.state.mediumB.map((who, i) => {
            let show = true
            return (
                <div>
                    {show ?
                        <Score onClick={show= false }> $ {(i + 3) * 200} </Score>
                        :
                        <div onClick={() => { show = true }}>
                            <h3> {who.question}  </h3>
                            <div>{who.incorrect_answers}{who.correct_answer} </div>
                        </div>
                    }

                </div>

            )
        })
        const Bceeep = this.state.hardB.map((who, i) => {
            let show = true
            return (
                <Score>
                    <QBH QAH={who.question} ABH={who.correct_answer} IBH={who.incorrect_answers} value={i}></QBH>
                </Score>

            )
        })
        const Cmep = this.state.easyC.map((who, i) => {
            let show = true
            return (
                <div>
                    {show ?
                        <Score onClick={() => this.setState({ show: false })}> $ {(i + 1) * 200} </Score>
                        :
                        <div onClick={() => { show = true }}>
                            <h3> {who.question}  </h3>
                            <div>{who.correct_answer}{who.incorrect_answers} </div>
                        </div>
                    }

                </div>


            )
        })
        const Cbeep = this.state.mediumC.map((who, i) => {
           let show= true
            return (
                <div>
                    {show ?
                        <Score onClick={() => this.setState({ show: false })}> $ {(i + 3) * 200} </Score>
                        :
                        <div onClick={() => { show = true }}>
                            <h3> {who.question}  </h3>
                            <div>{who.incorrect_answers}{who.correct_answer} </div>
                        </div>

                    }
                </div>

            )
        })
        const Cceeep = this.state.hardC.map((who, i) => {

            let show = true
            return (
                <div>

                    <Score>  <QCH QCH={who.question} ACH={who.correct_answer} ICH={who.incorrect_answers} value={i}></QCH> </Score>
                   

                </div>

            )
        })
        const Dmep = this.state.easyD.map((who, i) => {
            let show = true
            return (
                <div>
                    {show ?
                        <Score onClick={() => this.setState({ show: false })}> $ {(i + 1) * 200} </Score>
                        :
                        <div onClick={() => this.setState({ show: true })}>
                            <h3> {who.question}  </h3>
                            <div>{who.correct_answer}{who.incorrect_answers} </div>
                        </div>
                    }

                </div>

            )
        })
        const Dbeep = this.state.mediumD.map((who, i) => {
            let show = true
            return (
                <div>
                    {show ?
                        <Score onClick={() => this.setState({ show: false })}> $ {(i + 3) * 200} </Score>
                        :
                        <div onClick={() => this.setState({ show: true })}>
                            <h3> {who.question}  </h3>
                            <div>{who.incorrect_answers}{who.correct_answer} </div>
                        </div>
                    }

                </div>
            )
        })
        const Dceeep = this.state.hardD.map((who, i) => {
            let show = true
            return (
                <div>

<Score>  <QDH QDH={who.question} ADH={who.correct_answer} IDH={who.incorrect_answers} value={i}></QDH> </Score>
                  
                </div>

            )
        })
        const Emep = this.state.easyE.map((who, i) => {
            let show = true
            return (
                <div>
                    {show ?
                        <Score onClick={() => this.setState({ show: false })}> $ {(i + 1) * 200} </Score>
                        :
                        <div onClick={() => this.setState({ show: true })}>
                            <h3> {who.question}  </h3>
                            <div>{who.correct_answer}{who.incorrect_answers} </div>
                        </div>
                    }

                </div>

            )
        })
        const Ebeep = this.state.mediumE.map((who, i) => {
            let show = true
            return (
                <div>
                    {show ?
                        <Score onClick={() => this.setState({ show: false })}> $ {(i + 3) * 200} </Score>
                        :
                        <div onClick={() => this.setState({ show: true })}> 
                            <h3> {who.question}  </h3>
                            <div>{who.incorrect_answers}{who.correct_answer} </div>
                        </div>
                    }

                </div>
            )
        })
        const Eceeep = this.state.hardE.map((who, i) => {
            let show = true
            return (
                <div>
                    <Score>  <QEH QAH={who.question} AEH={who.correct_answer} IEH={who.incorrect_answers} value={i}></QEH> </Score>
                   

                </div>

            )
        })
        const Fmep = this.state.easyF.map((who, i) => {
            let show = true
            return (
                <div>
                    {show ?
                        <Score onClick={() => this.setState({ show: false })}> $ {(i + 1) * 200} </Score>
                        :
                        <div onClick={() => this.setState({ show: true })}>
                            <h3> {who.question}  </h3>
                            <div>{who.correct_answer}{who.incorrect_answers} </div>
                        </div>
                    }

                </div>


            )
        })
        const Fbeep = this.state.mediumF.map((who, i) => {
            let show = true
            return (
                <div>
                    {show ?
                        <Score onClick={() => this.setState({ show: false })}> $ {(i + 3) * 200} </Score>
                        :
                        <div onClick={() => this.setState({ show: true })}>
                            <h3> {who.question}  </h3>
                            <div>{who.incorrect_answers}{who.correct_answer} </div>
                        </div>
                    }

                </div>

            )
        })
        const Fceeep = this.state.hardF.map((who, i) => {
            let show = true
            return (
                <div>
 
               <Score>  <QFH QAH={who.question} AFH={who.correct_answer} IFH={who.incorrect_answers} value={i}></QFH> </Score>     

                </div>


            )
        })


        return (
            <Container>
<Back> 
                <Alignment>
                    <Cat> {cata} </Cat>
                    <div>  {Amep} {Abeep}<Score> <QAH/> </Score> </div>

                </Alignment>
                <Alignment>
                    <Cat> {catb} </Cat>
                    <div>  {Bmep} {Bbeep}{Bceeep} </div>

                </Alignment>
                <Alignment>
                    <Cat> {catc} </Cat>
                    <div>   {Cmep} {Cbeep}{Cceeep} </div>

                </Alignment>
                <Alignment>
                    <Cat> {catd} </Cat>
                    <div>   {Dmep} {Dbeep}{Dceeep}</div>

                </Alignment>
                <Alignment>
                    <Cat> {cate} </Cat>
                    <div>    {Emep} {Ebeep}{Eceeep} </div>

                </Alignment>
                <Alignment>
                    <Cat> {catf} </Cat>
                    <div>   {Fmep} {Fbeep}{Fceeep}</div>


                </Alignment>
                </Back>
            </Container>

        );
    }
}

export default Api;