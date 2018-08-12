import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

class ABH extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state
console.log("props B", (this.props))
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
          <p>That's everything!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}
// console.log(this.state.open)


const QBH = () => (
  <Modal trigger={<Button> ${ 5 * 200}  </Button>}>
    <Modal.Header>Modal #1</Modal.Header>
    <Modal.Content image>
      <div className='image'>
        <Icon name='right arrow' />
      </div>
      <Modal.Description>
        <p>We have more to share with you. Follow us along to modal 2</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <ABH />
    </Modal.Actions>
  </Modal>
)

export default QBH