import React, { Component } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import LoadingButton from '../../commons/LoadingButton';
import {showMainDialog} from '../../commons/state/action/dialogAction'
import {store} from '../state/AgentAction'
import {connect} from 'react-redux'
import { API_URL } from '../../../constants/constants';
import { STORE_CARD_PRICE } from '../state/AgentConstant';
import { Typography } from '@material-ui/core';
 class SetCardPrice extends Component {
     constructor(props) {
         super(props);
         this.state ={
             formData:{
                percentage:''
             },
             submitted: false,
            loading: false,
            finished: false,
            errorMessage: ''
         }
     }

     handleChange = (e)=>{
        const {formData} = this.state
        formData[e.target.name] = e.target.value
        this.setState(formData)
     }

     handleSubmit =()=>{
        this.setState({
            submitted: true,
            loading: true
        })

        const {formData} = this.state
        this.props.store(`${API_URL}card_price`,formData,STORE_CARD_PRICE)
     }

     componentWillReceiveProps(nextProps, nextContext){
        if(nextProps.response.status){
            this.setState({
                submitted:false,
                loading:false
            })
            setTimeout(()=>{
                this.props.showMainDialog({'show':false,'page':null,'title':'',actions:{on:false,path:'',id:''}})
            },2000)
        }
    }
     
    render() {
        const {formData} = this.state
        const {loading} = this.state;
        const {finished} = this.state
        const setLoading = !finished && loading;
        const isEnabled = formData.percentage.length > 0
        return (
            <ValidatorForm onSubmit={this.handleSubmit} style={{display:"flex",flexDirection:'column',alignItems:'center'}}>
                <Typography>
                    {this.props.response.message}
                </Typography>
                <TextValidator
                    style={{width:'80%'}}
                    label={'Enter your card price percentage E.g 86,90'}
                    onChange={this.handleChange}
                    name="percentage"
                    type='text'
                    value={this.state.formData.percentage}
                    validators={['required']}
                    errorMessages={['Enter your card price percetage']}
                />

                <LoadingButton
                    style={{width:'80%',marginTop:20}}
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={!isEnabled || this.state.submitted}
                    loading={setLoading}
                    text={'Set price'}
                    done={finished}
                >
                    {
                        'Set price'
                    }
                </LoadingButton>
            </ValidatorForm>
        )
    }
}

const mapStateToProps=state=>({
    response:state.authReducer.agentReducer.cardPriceReducer.response
})

export default connect(mapStateToProps,{store,showMainDialog})(SetCardPrice)
