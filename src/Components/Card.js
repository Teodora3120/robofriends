import React from 'react';
import {Modal, Button, ModalHeader} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Card extends React.Component {
    constructor(){
        super();
        this.state = {
            modalToggler: false 
        }
    }
    
    toggler = () => {
        return this.setState({modalToggler: !this.state.modalToggler})
    }
   render() {
     return <div onClick = {() => this.setState({modalToggler: true})} className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
     
     <div>
        <Modal isOpen={this.state.modalToggler} toggle={this.toggler} style={{borderRadius: 48}}>
        <ModalHeader className={'bg-light-green'}>
            <Button onClick = {() => this.setState({modalToggler: false})} style = {{alignSelf: 'flex-start', width: '50px', background: 'none', border: 'none', outline: 'none', color: 'black'}}>X</Button>
        </ModalHeader>
           <div className="tc bg-light-green dib br3 bw2 shadow-5">
           <img alt='card person' src = {`https://robohash.org/${this.props.id}?200x200`} />
            <div>
                <h2>{this.props.name}</h2>
                <h3>{this.props.username}</h3>
                <p>{this.props.email}</p>
            </div>
            <div className = {'tc mb-3'}>
                <Button color="info" onClick = {()=> window.open(`https://robohash.org/${this.props.id}`, '_blank')}>
                    Visit me on the web
                </Button>
            </div>
           </div>
      </Modal>
        </div>
         
         <img alt='card person' src = {`https://robohash.org/${this.props.id}?200x200`} />
         <div>
             <h2>{this.props.name}</h2>
         </div>
     </div>
}
}

export default Card;