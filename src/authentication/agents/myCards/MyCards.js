import React, { Component } from 'react'
import {index} from '../state/AgentAction'
import {connect} from 'react-redux'
import { API_URL } from '../../../constants/constants'
import { MY_CARDS } from '../state/AgentConstant'
import UsersLoading from '../../commons/loading/UsersLoading'
import { Table, TableCell, TableHead, TableRow,TableBody, Grid, Card, CardHeader, CardContent, Avatar, Button, Typography } from '@material-ui/core'
import {cardsColumns as columns} from '../data/columns' 
 class MyCards extends Component {

    componentDidMount(){
        this.props.index(`${API_URL}my_cards`,MY_CARDS)
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
                            <Grid container spacing={2}>
                                {
                                    this.props.cards.data
                                    .map(card=>(
                                        <Grid item md={4} xs={12} sm={12}>
                                            <Card>
                                                <CardHeader
                                                 title={`${card.value} Birr card`}
                                                 avatar={
                                                     <Avatar>{card.value}</Avatar>
                                                 }
                                                 action={
                                                     <Button
                                                      color={"primary"}
                                                      disabled={card.total_amount>0?false:true}
                                                      variant={'outlined'}
                                                      style={{textTransform:'none'}}
                                                     >
                                                         Print
                                                     </Button>
                                                 }
                                                />
                                                <CardContent style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                                    <Typography variant={'h2'}>
                                                        {card.total_amount}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        )
                }
            </div>
        )
    }
}

const mapStateToProps =state=>({
    loading:state.authReducer.agentReducer.cardsReducer.loading,
    cards:state.authReducer.agentReducer.cardsReducer.cards
})

export default connect(mapStateToProps,{index})(MyCards)
