import React, { Component } from 'react'; 
import NameLocation from '../NameLocation/NameLocation'; 
import Size from '../Size/Size';
import Type from '../Type/Type'; 
import FarmBio from '../FarmBio/FarmBio'; 
import FarmFormReview from '../FarmFormReview/FarmFormReview';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Button } from '@material-ui/core';

export class FarmForm extends Component {
    state = {
        farmFormCounter: 0,
        generalFarmInfo: []
    }

    //changes this.state.farmFormCounter so that the correct part of the form is rendered to the page
    changeFarmFormCounter = (event, property) => {
        if(property === 'add') {
            this.setState({
                ...this.state,
                farmFormCounter: this.state.farmFormCounter + 1
            })
            console.log(this.state.farmFormCounter)
        } else {
            this.setState({
                ...this.state,
                farmFormCounter: this.state.farmFormCounter - 1
            })
            console.log(this.state.farmFormCounter)
        }
    }

    render() {
        let farmFormToShow = <span> </span>
        if (this.state.farmFormCounter === 0) {
            farmFormToShow = <NameLocation />
        } else if (this.state.farmFormCounter === 1) {
            farmFormToShow = <Size />
        } else if (this.state.farmFormCounter === 2) {
            farmFormToShow = <Type />
        } else if (this.state.farmFormCounter === 3) {
            farmFormToShow = <FarmBio />
        } else if (this.state.farmFormCounter === 4) {
            farmFormToShow = <FarmFormReview />
        }
        return (
            <div>
               <h1> Farm Form </h1> 
        
            {farmFormToShow}

            <Button variant="outlined" onClick={(event) => this.changeFarmFormCounter(event, 'subtract')}> Back </Button> 
            <Button variant="outlined" onClick={(event) => this.changeFarmFormCounter(event, 'add')}> Next </Button>
            </div>
        )
    }
}

export default FarmForm; 
