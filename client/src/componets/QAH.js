import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import axios from 'axios';



class AAH extends Component {
  state = { open: false ,  hardA: [{}] }


  componentDidMount() {
    this.getQuestions();
}


getQuestions = async () => {
  try {
    const HardQuestionAReponse = await axios.get(`https://opentdb.com/api.php?amount=1&category=29&difficulty=hard&type=multiple`)
  this.setState({
      hardA: HardQuestionAReponse.data.results,
    });
  }
  catch (err) {
      console.log(err)
  }
}


  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state
console.log("state A", this.state.hardA)

const Aceeep = this.state.hardA.map((who, i) => {
      let show = true
      return (
          <div>
            {who.question}
              
          </div>

      )
  })


    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
          <Button primary icon>
            Proceed <Icon name='right chevron' />
          </Button>
        }
      >
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <p> <Aceeep/>!</p> 
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}



const QAH = () => (
  <Modal trigger={<Button> ${ 5 * 200}  </Button>}>
    <Modal.Header>Modal #1</Modal.Header>
    <Modal.Content image>
      <div className='image'>
        <Icon name='right arrow' />
      </div>
      <Modal.Description>
        <p>   </p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <AAH />
    </Modal.Actions>
  </Modal>
)

export default QAH
