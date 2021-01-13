import { Card, CardContent, CardHeader, Button, Table, Typography } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import React, { Component } from 'react'
import {index} from '../state/AgentAction'
import {connect} from 'react-redux'
import { MY_CARD_REQUEST } from '../state/AgentConstant'
import {API_URL} from '../../../constants/constants'
import { Skeleton } from '@material-ui/lab'
import { grey } from '@material-ui/core/colors'
import {showMainDialog} from '../../commons/state/action/dialogAction'
import NewCardRequest from '../cardRequest/NewCardRequest'
 class DashboardCardRequest extends Component {

    componentDidMount(){
        this.props.index(`${API_URL}card_request`,MY_CARD_REQUEST)
    }

    findNewCardRequest = ()=>{
        return this.props.cardRequests.data.filter(data=>data.status==='on_progress')
    }

    sendNewCardRequest =()=>{
        this.props.showMainDialog({
            show:true,
            page:<NewCardRequest form={{type:'',data:null}}/>,
            title:'Order cards now',
            actions:{
                on:false,
                path:'',
                id:''
            }
        })
    }
    render() {
        return (
            <Card>
                <CardHeader
                 title={'New card requests'}
                 avatar={
                     <Send/>
                 }
                />

                <CardContent>
                 {
                     this.props.loading
                     ?
                        (
                            <div style={{display:"flex",flexDirection:'column'}}>
                                <Skeleton
                                width={'100%'}
                                height={50}
                                style={{backgroundColor:grey[500]}}
                                />

                            <Skeleton
                             width={'100%'}
                             height={50}
                             style={{backgroundColor:grey[500]}}
                            />
                            </div>
                        )
                     :
                        (
                            <div>
                                {
                                    this.findNewCardRequest().length<=0
                                    ?
                                        (
                                            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                                <Typography color={'secondary'}>
                                                    No card requests until now. Send your card request now
                                                </Typography>
                                                <Button
                                                 onClick={this.sendNewCardRequest}
                                                 variant={'outlined'}
                                                 color={'primary'}
                                                 style={{textTransform:'none',marginTop:20}}
                                                >
                                                    Send card request
                                                </Button>
                                            </div>
                                        )
                                    :
                                        (
                                            <Table>
                                                {
                                                    this.findNewCardRequest()
                                                    .map(cardRequest=>(
                                                        <span>
                                                            {cardRequest.id}
                                                        </span>
                                                    ))
                                                }
                                            </Table>
                                        )
                                }
                            </div>
                        )
                 }
                </CardContent>
            </Card>
        )
    }
}

const mapStateToProps = state=>({
    cardRequests:state.authReducer.agentReducer.cardRequestReducer.cardRequests,
    loading:state.authReducer.agentReducer.cardRequestReducer.loading
})

export default connect(mapStateToProps,{index,showMainDialog})(DashboardCardRequest)
