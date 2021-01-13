import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { Business } from '@material-ui/icons'
import React, { Component } from 'react'
import {index} from '../state/AgentAction'
import {connect} from 'react-redux'
import { API_URL } from '../../../constants/constants'
import { FETCH_COMPANY } from '../state/AgentConstant'
import Skeleton from '@material-ui/lab/Skeleton'
import { grey } from '@material-ui/core/colors'
class Company extends Component {

    componentDidMount(){
        this.props.index(`${API_URL}company`,FETCH_COMPANY)
    }
    render() {
        return (
            <Card>
                <CardHeader
                 title={'Company information'}
                 avatar={
                     <Business/>
                 }
                />
               
                 {
                     this.props.loading
                     ?
                        (
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <Skeleton
                                variant={'rect'}
                                 width={'100%'}
                                 height={20}
                                 style={{backgroundColor:grey[500]}}
                                />
                                <Skeleton
                                variant={'rect'}
                                 width={'100%'}
                                 height={20}
                                 style={{backgroundColor:grey[500]}}
                                />
                            </div>
                        )
                     :
                        (
                            <CardContent style={{display:'flex',flexDirection:'column'}}>
                                    <Typography>
                                        {`Company name: ${this.props.company.data[0].name}`}
                                    </Typography>
                                    <Typography>
                                        {`Phone number: ${this.props.company.data[0].phone}`}
                                    </Typography>
                                    <Typography>
                                        {`Card price: ${this.props.company.data[0].card_price[0].percentage} %`}
                                    </Typography>
                            </CardContent>
                        )
                 }
            </Card>
        )
    }
}

const mapStateToProps =state=>({
    company:state.authReducer.agentReducer.companyReducer.company,
    loading:state.authReducer.agentReducer.companyReducer.loading
})

export default connect(mapStateToProps,{index})(Company)
