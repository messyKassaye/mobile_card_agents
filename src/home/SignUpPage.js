import React from 'react'
import HomeAppBar from './HomeAppBar'
import withStyles from '@material-ui/core/styles/withStyles'
import homeStyle from './styles/homeStyle'
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import FooterPage from './FooterPage'
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {Link,withRouter} from 'react-router-dom'
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import LoadingButton from "../authentication/commons/LoadingButton";
import signup from '../home/styles/signup_style'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Skeleton } from '@material-ui/lab'
import { grey } from '@material-ui/core/colors'
import roles from './data/roles'
import { API_AUTH_URL } from '../constants/constants'
import axios from 'axios'
import {set,setRole} from '../TokenService'
import DownloadApp from './DownloadApp'
class SignUpPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            formData: {
                'first_name': '',
                'phone': '',
                'role_id':'3',
                'password': ''
            },
            submitted:false,
            loading:false,
            partner:true,
            signUpUser:''
        }

    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isEmail',(value)=>{
            if(!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                return false
            }
            return true
        })
        ValidatorForm.addValidationRule('isPasswordMatch',(value)=>{
            const {formData}= this.state
            if(value !== formData.password){
                return false
            }
            return  true
        })
    }

    componentWillUnmount() {
        // remove rule when it is not needed
        ValidatorForm.removeValidationRule('isPasswordMatch');
    }


    handleChange = (e)=>{
       const {formData} = this.state
        formData[e.target.name]=e.target.value
        this.setState(formData)
    }
    handleRadionButton =(e)=>{
        const role = roles.filter(item=>item.name===e.target.value)
        const {formData} = this.state
        formData[e.target.name]=role[0].id
        this.setState(formData)
    }

    handleSubmit= ()=>{
        const {formData} = this.state
        this.setState({
            submitted:true,
            loading:true
        })
        console.log(formData)
        axios.post(`${API_AUTH_URL}signup`,formData,{
            headers:{
                'content-type':'Application/json'
            }
        })
            .then((res)=>res.data)
            .then((response)=> {
                set(response.token)
                setRole(JSON.stringify(response.role))
                this.props.history.push('/auth')
                window.location.reload()
            })
            .catch(onerror=>{
                if(!onerror.response){
                    this.setState({errorMessage:'Something is not Good. Please check your internet connection'})
                    this.setState({
                        loading: false,
                        finished: false,
                        submitted: false,
                    })
                }else {
                    let code = onerror.response.status
                    if(code===403){
                        this.setState({errorMessage:'Incorrect email or password is used. Please try again ):'})
                    }
                    this.setState({
                        loading: false,
                        finished: false,
                        submitted: false,
                    })
                }
            })
    }

    render(){
         const {classes} = this.props
         const {formData} = this.state
         const { loading } = this.state;
         const finished = false
         const setLoading = !finished && loading;
         const isEnabled = formData.first_name.length>0&& formData.phone.length>0&&
               formData.role_id>0&&formData.password.length>0
        return (
            <div className={classes.root}>
                <HomeAppBar/>
                <div className={classes.container}>
                {
                    this.state.partner
                    ?
                        (
                            <Card className={classes.card}>
                                    <CardHeader
                                    style={{backgroundColor:'#6610f2',color:'white'}}
                                    title={'Sign up now'}
                                    avatar={<PersonIcon/>}
                                    />
                                <CardContent>
                                <ValidatorForm
                                                onSubmit={this.handleSubmit}
                                            >
                                                <Typography color={'secondary'}>
                                                    {this.state.errorMessage}
                                                </Typography>
                                                
                                                <TextValidator
                                                    className={classes.text_input}
                                                    label={'Name'}
                                                    onChange={this.handleChange}
                                                    name="first_name"
                                                    value={this.state.formData.first_name}
                                                    validators={['required']}
                                                    errorMessages={['Enter first name']}
                                                />


                                                <TextValidator
                                                    className={classes.text_input}
                                                    label={'phone'}
                                                    onChange={this.handleChange}
                                                    name="phone"
                                                    value={this.state.formData.phone}
                                                    validators={['required']}
                                                    errorMessages={['Please enter you phone']}
                                                />
                                                <TextValidator
                                                    className={classes.text_input}
                                                    label={'Password'}
                                                    onChange={this.handleChange}
                                                    name="password"
                                                    type='password'
                                                    value={this.state.formData.password}
                                                    validators={['required']}
                                                    errorMessages={['Enter your password']}
                                                />
                                                
                                                    <div className={classes.submit_division}>
                                                        <LoadingButton
                                                            className={classes.signup_button}
                                                            color="primary"
                                                            variant="contained"
                                                            type="submit"
                                                            loading={setLoading}
                                                            done={finished}
                                                            text={'Sign up'}
                                                            disabled={!isEnabled ||this.state.submitted}
                                                        >
                                                            {
                                                                'Sign up'
                                                            }
                                                        </LoadingButton>
                                                        <div className={classes.registered}>
                                                            <span style={{marginRight:10}}>Already sign up</span>
                                                            <Link to='/login'>Login</Link>
                                                        </div>
                                                    </div>
                                            </ValidatorForm>
                                </CardContent>
                                </Card>
                        )
                    :
                        (
                            <DownloadApp role={this.state.signUpUser}/>
                        )
                }
                </div>
                <FooterPage/>
            </div>
        )
    }
}

export default withStyles(homeStyle)(SignUpPage)