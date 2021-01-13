import React, { Component } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import {index,store,show} from '../state/AgentAction'
import {connect} from 'react-redux'
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import LoadingButton from '../../commons/LoadingButton';
import withStyles from '@material-ui/core/styles/withStyles'
import PrintStyle from '../prints/style/PrintStyle'
import { API_URL } from '../../../constants/constants';
import { FETCH_BANKS, FETCH_BANK_ACCOUNTS, FETCH_CARD_PRICE, FETCH_CARD_TYPE, SEND_CARD_REQUEST } from '../state/AgentConstant';
import { Skeleton } from '@material-ui/lab';
import { grey } from '@material-ui/core/colors';
import RequestedCardPayment from './RequestedCardPayment';
class NewCardRequest extends Component {

    constructor(props) {
        super(props);
        this.state ={
            formData:{
                card_type_id:'',
                amount:'',
                payment_type_id:3
            },
            payment:false,
            isMediaSelected:false,
            mediaTypeValue: '',
            acceptMediaType: '',
            submitted: false,
            loading: false,
            finished: false,
        }
    }

    handleMediaSelect = () => {
        this.setState({
            isMediaSelected: false
        })
    }

    handleMediaSelectOpen = () => {
        this.setState({
            isMediaSelected: true
        })
    }

    handleMediaSelectChange = (event) => {
        this.setState({
            mediaTypeValue: event.target.value,
        })

        const {formData} = this.state
        formData[event.target.name] = event.target.value;
        this.setState(formData)
    }

    handleChange = event=>{
        const {formData} = this.state
        formData[event.target.name] = event.target.value
        this.setState(formData)
    }

    handleSubmit =()=>{
        const {formData} = this.state
        this.setState({
            submitted:true,
            loading:true
        })
        this.props.store(`${API_URL}card_request`,formData,SEND_CARD_REQUEST)
    }
    
    
    componentDidMount(){
        this.props.index(`${API_URL}card_type`,FETCH_CARD_TYPE)
        this.props.show(`${API_URL}card_price/1`,FETCH_CARD_PRICE)
        this.props.index(`${API_URL}bank_account`,FETCH_BANK_ACCOUNTS)
    }

    componentWillReceiveProps(nextProps, nextContext){
        if(nextProps.response.status){
            this.setState({
                submitted:false,
                loading:false
            })
            this.setState({
                payment:true
            })
        }
    }
    render() {
        const {classes} = this.props
        const {formData} = this.state
        const { loading } = this.state;
        const finished = false
        const setLoading = !finished && loading;
        const isEnabled = formData.amount.length>0
        return (
            <div>
                {
                    this.props.loading&&this.props.banksLoading&&this.props.cardPriceLoading
                    ?
                        (
                            <Skeleton
                             variant={'rect'}
                             width={'100%'}
                             height={150}
                             style={{backgroundColor:grey[500]}}
                            />
                        )
                    :
                        (
                            <div>
                                {
                                    this.state.payment
                                    ?
                                        (
                                            <RequestedCardPayment
                                            cardRequest={this.props.response.card_request}
                                            cardTypeId={this.state.formData.card_type_id}
                                            amount={this.state.formData.amount}
                                            cardPrice={this.props.cardPrice[0]}
                                            banks={this.props.banks.data}/>
                                        )
                                    :
                                        (

                                            <ValidatorForm onSubmit={this.handleSubmit} className={classes.form}>
                                                <Typography color={'primary'}>
                                                    Send your card request to your peers.
                                                </Typography>
                                                <FormControl className={classes.text_input}>
                                                            <InputLabel
                                                                htmlFor="demo-controlled-open-select">{'Select card type'}</InputLabel>
                                                                    <Select
                                                                        name='card_type_id'
                                                                        value={this.state.mediaTypeValue}
                                                                        open={this.state.isMediaSelected}
                                                                        onClose={this.handleMediaSelect}
                                                                        onOpen={this.handleMediaSelectOpen}
                                                                        onChange={this.handleMediaSelectChange}
                                                                    
                                                                        >
                                                                        {
                                                                        this.props.cardType.map(items => (
                                                                        <MenuItem key={items.name} value={items.id}
                                                                            name={items.name}>{`${items.value} Birr card`}</MenuItem>
                                                                            ))
                                                                        }
                                                                    </Select>                                          
                                            </FormControl>
            
                                            <TextValidator
                                                    onChange={this.handleChange}
                                                    label={`Enter amount`}
                                                    name={'amount'}
                                                    type={'text'}
                                                    className={classes.text_input}
                                                    value={this.state.formData.amount}
                                                    validators={['required']}
                                                    errorMessages={[`Please enter amount you want to print`]}       
                                                    />
            
                                            <LoadingButton
                                                        className={classes.text_input}
                                                        color="primary"
                                                        variant="contained"
                                                        type="submit"
                                                        loading={setLoading}
                                                        done={finished}
                                                        text={'Set my account'}
                                                        disabled={!isEnabled ||this.state.submitted}
                                                    >
                                                        {
                                                            'Print card'
                                                        }
                                            </LoadingButton>
                                        </ValidatorForm>
                                        )
                                }
                            </div>
                        )
                }
            </div>
        )
    }
}

const mapStateToProps =state=>({
    cardType:state.authReducer.agentReducer.cardTypeReducer.cardType,
    loading:state.authReducer.agentReducer.cardTypeReducer.loading,
    response:state.authReducer.agentReducer.cardRequestReducer.response,
    banksLoading:state.authReducer.agentReducer.bankAccountReducer.loading,
    banks:state.authReducer.agentReducer.bankAccountReducer.bankAccounts,
    cardPrice:state.authReducer.agentReducer.cardPriceReducer.card_price,
    cardPriceLoading:state.authReducer.agentReducer.cardPriceReducer.loading
})

export default connect(mapStateToProps,{index,store,show})(withStyles(PrintStyle)(NewCardRequest))
