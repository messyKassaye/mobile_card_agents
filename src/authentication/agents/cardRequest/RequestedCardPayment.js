import { Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, Table, TableCell, TableRow, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import React, { Component } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { API_URL } from '../../../constants/constants';
import LoadingButton from '../../commons/LoadingButton';
import { SEND_CARD_REQUEST_PAYMENT } from '../state/AgentConstant';
import {store} from '../state/AgentAction'
import {connect} from 'react-redux'
class RequestedCardPayment extends Component {

    constructor(props) {
        super(props);
        this.state ={
            payed:false,
            paymentDone:false,
            formData:{
                bank_id:'',
                card_request_id:'',
                reference_number:''
            }
        }
    }
    
    payment = (bankId)=>{
        const {formData} = this.state
        formData['bank_id'] = bankId
        formData['card_request_id'] = this.props.cardRequest.id
        this.setState({payed:true,formData})
    }

    cardType = (id)=>{
        if(id===1){
            return 5
        }else if(id===2){
            return 10;
        }else if(id===3){
            return 15
        }else if(id===4){
            return 25
        }else if(id===5){
            return 50
        }else if(id===6){
            return 100
        }
    }

    calculatePayment =()=>{
        return this.props.amount*(this.cardType(this.props.cardTypeId)*this.props.cardPrice.percentage_value)
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
        console.log(formData)
        this.props.store(`${API_URL}card_request_payment`,formData,SEND_CARD_REQUEST_PAYMENT)
    }

    componentWillReceiveProps(nextProps, nextContext){
        if(nextProps.response.status){
            this.setState({
                paymentDone:true
            })
        }
    }
    render() {
        const {formData} = this.state
        const { loading } = this.state;
        const finished = false
        const setLoading = !finished && loading;
        const isEnabled = formData.reference_number.length>0
        return (
           <div>
               {
                   this.state.payed
                   ?
                        (
                            <div>
                                {
                                    this.state.paymentDone
                                    ?
                                        (
                                            <Typography style={{color:green[500]}}>
                                                Your card request payment is sent successfully. 
                                                we will approve your card request after we cross check your payment.
                                                Thank you
                                            </Typography>
                                        )
                                    :
                                        (
                                            <ValidatorForm style={{display:'flex',flexDirection:'column',alignItems:'center'}} onSubmit={this.handleSubmit}>
                               
                                                <Typography color={'primary'}>
                                                    Send us your payment transaction reference number
                                                </Typography>
                                                <TextValidator
                                                style={{width:'80%',marginBottom:20}}
                                                onChange={this.handleChange}
                                                label={`Enter transaction ref number`}
                                                name={'reference_number'}
                                                type={'text'}
                                                value={this.state.formData.reference_number}
                                                validators={['required']}
                                                errorMessages={[`Please enter your transaction ref number`]}       
                                                />
                            
                                                <LoadingButton
                                                style={{width:'80%'}}
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
                   :
                        (
                            <div style={{display:"flex",flexDirection:'column'}}>
                                    <Typography color={'primary'}>
                                        Your card request is submitted successfully.
                                    </Typography>
                                    <Table>
                                        <TableRow>
                                            <TableCell>
                                                Card type
                                            </TableCell>
                                            <TableCell>
                                                {`${this.cardType(this.props.cardTypeId)} Birr card`}
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>
                                                Total amount
                                            </TableCell>
                                            <TableCell>
                                                {this.props.amount.toLocaleString()}
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>
                                                Unit price
                                            </TableCell>
                                            <TableCell>
                                                {`${this.cardType(this.props.cardTypeId)*this.props.cardPrice.percentage_value}`}
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>
                                                Total price
                                            </TableCell>
                                            <TableCell>
                                                {this.calculatePayment().toLocaleString()}
                                            </TableCell>
                                        </TableRow>
                                    </Table>

                                    <Typography style={{marginTop:15}} color={"primary"}>
                                        You can transfer your payment to us by one of the following banks.
                                        If you transfer the money just click transfer by this and send us your transaction ref number
                                    </Typography>

                                    <Grid container spacing={2}>
                                        {
                                            this.props.banks
                                            .map(bank=>(
                                                <Grid item md={12} xs={12} sm={12}>
                                                    <Card>
                                                        <CardHeader
                                                        title={bank.bank.name}
                                                        avatar={
                                                            <Avatar>{bank.bank.name.charAt(0)}</Avatar>
                                                        }
                                                        action={
                                                            <Button
                                                            onClick={()=>this.payment(bank.id)}
                                                            variant={'outlined'}
                                                            color={'primary'}
                                                            size={'small'}
                                                            style={{textTransform:'none',marginTop:15}}
                                                            >
                                                                Transferred by this
                                                            </Button>
                                                        }
                                                        />
                                                        <Divider/>
                                                        <CardContent>
                                                            <Typography>
                                                                {`Account number: ${bank.account_number}`}
                                                            </Typography>
                                                            <Typography>
                                                                {`Account holder name: ${bank.holder_full_name}`}
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                </div> 
                        )
               }
           </div>
        )
    }
}

const mapStateToProps =state=>({
    response:state.authReducer.agentReducer.cardRequestPaymentReducer.response
})

export default connect(mapStateToProps,{store})(RequestedCardPayment)
