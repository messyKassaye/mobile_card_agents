import React, { Component } from 'react'
import {index} from '../state/AgentAction'
import {connect} from 'react-redux'
import { API_URL } from '../../../constants/constants'
import { MY_CARD_REQUEST } from '../state/AgentConstant'
import UsersLoading from '../../commons/loading/UsersLoading'
import {Table, TableHead, TableRow, TableCell, Typography, TableBody, Button } from '@material-ui/core'
import {columns} from '../data/columns'
 class CardRequest extends Component {

    componentDidMount(){
        this.props.index(`${API_URL}my_card_request`,MY_CARD_REQUEST)
    }
    render() {
        return (
            <div>
                {
                    this.props.loading
                    ?
                        (
                            <UsersLoading/>
                        )
                    :
                        (
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <Typography color={'primary'}>
                                    All of your card requests
                                </Typography>

                                <Table>
                                    <TableHead style={{backgroundColor:'#2B2B2B',color:'white'}}>
                                        <TableRow>
                                            {
                                                columns.map(column=>(
                                                    <TableCell align={column.align} style={{color:'white'}}>
                                                        {column.label}
                                                    </TableCell>
                                                ))
                                            }
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            this.props.cardRequest.data
                                            .map(cardRequest=>(
                                                <TableRow>
                                                    <TableCell>{cardRequest.id}</TableCell>
                                                    <TableCell>
                                                        {`${cardRequest.card_type.value} Birr card`}
                                                    </TableCell>
                                                    <TableCell>
                                                        {cardRequest.amount.toLocaleString()}
                                                    </TableCell>
                                                    <TableCell>
                                                        {cardRequest.unit_price}
                                                    </TableCell>
                                                    <TableCell>
                                                        {`${cardRequest.total_price.toLocaleString()} ETB`}
                                                    </TableCell>
                                                    <TableCell>
                                                        {cardRequest.request_date}
                                                    </TableCell>
                                                    <TableCell>
                                                        {
                                                            cardRequest.payment===null
                                                            ?
                                                                (
                                                                    <div style={{display:'flex',flexDirection:'row'}}>
                                                                        <Typography color={'secondary'}>
                                                                            Not payed
                                                                        </Typography>
                                                                        <Button 
                                                                        variant={'outlined'}
                                                                        color={'primary'}
                                                                        size={'small'}
                                                                        style={{textTransform:'none',marginLeft:15}}
                                                                        >
                                                                            Pay now
                                                                        </Button>
                                                                    </div>
                                                                )
                                                            :
                                                                (
                                                                    <div style={{display:'flex',flexDirection:'row'}}>
                                                                        <Typography color={"primary"}>
                                                                            Payed
                                                                        </Typography>
                                                                        <Button
                                                                        variant={'outlined'}
                                                                        color={'primary'}
                                                                        size={'small'}
                                                                        style={{textTransform:'none',marginLeft:15,paddingLeft:5,paddingRight:5}}>
                                                                            Show transaction
                                                                        </Button>
                                                                    </div>
                                                                )
                                                        }
                                                    </TableCell>
                                                    <TableCell>
                                                        {cardRequest.status}
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>

                            </div>
                        )
                }
            </div>
        )
    }
}

const mapStateToProps =state=>({
    cardRequest:state.authReducer.agentReducer.cardRequestReducer.cardRequests,
    loading:state.authReducer.agentReducer.cardRequestReducer.loading
})

export default connect(mapStateToProps,{index})(CardRequest)