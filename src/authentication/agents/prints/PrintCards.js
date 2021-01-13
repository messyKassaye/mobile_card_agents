import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PrintStyle from './style/PrintStyle'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import {index,store} from '../state/AgentAction'
import { API_URL } from '../../../constants/constants'
import { connect } from 'react-redux'
import { FETCH_CARD_TYPE } from '../../commons/state/commonConstants'
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@material-ui/core'
import LoadingButton from '../../commons/LoadingButton'
import { FETCH_COMPANY, PRINT_CARDS } from '../state/AgentConstant'
import PrintedFile from './PrintedFile'
import {me} from '../../state/actions/usersActions'
import { Skeleton } from '@material-ui/lab'
import { grey } from '@material-ui/core/colors'
 class PrintCards extends Component {

    constructor(props) {
        super(props);
        this.state ={
            formData:{
                card_type_id:'',
                amount:'',
            },
            isMediaSelected:false,
            mediaTypeValue: '',
            acceptMediaType: '',
            submitted: false,
            loading: false,
            finished: false,
            print:false
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
    

    componentDidMount(){
        this.props.index(`${API_URL}card_type`,FETCH_CARD_TYPE)
        this.props.me()
        this.props.index(`${API_URL}company`,FETCH_COMPANY)
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

        this.props.store(`${API_URL}prints`,formData,PRINT_CARDS)
        
    }

    componentWillReceiveProps(nextProps, nextContext){
        
        if(!nextProps.response.status||nextProps.response.status){
            this.setState({
                submitted:false,
                loading:false
            })
        }

        if(nextProps.response.status){
            this.setState(
                {
                    print:true
                }
            )
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
                        this.props.loading
                        ?
                            (
                                <Skeleton
                                 variant={'rect'}
                                 width={'100%'}
                                 height={50}
                                 style={{backgroundColor:grey[500]}}
                                />
                            )
                        :
                            (
                                <div>
                                     {
                                    this.state.print
                                    ?
                                        (
                                            <PrintedFile company={this.props.company.data[0]} agent={this.props.user} cards={this.props.response.cards}/>
                                        )
                                    :
                                        (
                                            <ValidatorForm onSubmit={this.handleSubmit} className={classes.form}>
                                                <Typography color={'primary'} >
                                                    Print your card now. select card type and amount to print it.
                                                </Typography>
                                                <Typography color={'secondary'}>
                                                    {this.props.response.message}
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
                                                            text={'Start printing'}
                                                            disabled={!isEnabled ||this.state.submitted}
                                                        >
                                                            {
                                                                'Start printing'
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

const mapStateToProps = state=>({
    cardType:state.authReducer.agentReducer.cardTypeReducer.cardType,
    loading:state.authReducer.agentReducer.cardTypeReducer.loading,
    response:state.authReducer.agentReducer.printReducer.response,
    user:state.userData.user,
    userLoading:state.userData.loading,
    company:state.authReducer.agentReducer.companyReducer.company,
    companyLoading:state.authReducer.agentReducer.companyReducer.loading
})

export default connect(mapStateToProps,{index,store,me})(withStyles(PrintStyle)(PrintCards))
