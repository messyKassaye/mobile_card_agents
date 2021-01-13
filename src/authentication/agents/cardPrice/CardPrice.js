import { Button, Card, CardActions, CardContent, CardHeader, Divider, IconButton, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { AttachMoney, Edit } from '@material-ui/icons'
import Skeleton from '@material-ui/lab/Skeleton'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {me} from '../../state/actions/usersActions'
import {showMainDialog} from '../../commons/state/action/dialogAction'
import SetCardPrice from './SetCardPrice'
class CardPrice extends Component {
    componentDidMount(){
        this.props.me()
    }

    setCardPrice =()=>{
        this.props.showMainDialog({'show':true,'page':<SetCardPrice/>,'title':'Set your card price',actions:{on:false,path:'',id:''}})

    }
    render() {
        return (
            <Card>
                <CardHeader
                 title={'Your card price percentage'}
                 avatar={
                     <AttachMoney/>
                 }
                />
                <Divider/>
                 {
                     this.props.loading
                     ?
                        (
                            <Skeleton
                             width={'100%'}
                             height={50}
                             style={{backgroundColor:grey[500]}}
                            />
                        )
                     :
                        (
                            <CardContent style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                {
                                    this.props.user.relations.card_price.length
                                    >0
                                    ?
                                        (
                                            <Typography>
                                                {`${this.props.user.relations.card_price[0].percentage} %`}
                                            </Typography>
                                        )
                                    :
                                        (
                                            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                                <Typography color={'secondary'}>
                                                    Set your card price percentage
                                                </Typography>
                                                <Button
                                                 onClick={this.setCardPrice}
                                                 variant={'outlined'}
                                                 color={'primary'}
                                                 style={{textTransform:'none'}}
                                                >
                                                    set it now
                                                </Button>
                                            </div>
                                        )
                                }
                            </CardContent>
                        )
                 }
                 {
                     this.props.loading
                     ?
                        (
                            <Skeleton
                             width={'100%'}
                             height={15}
                             style={{backgroundColor:grey[500]}}
                            />
                        )
                     :
                        (
                            <CardActions style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                                {
                                    this.props.user.relations.card_price.length>0
                                    ?
                                        (
                                            <IconButton color={'primary'}>
                                                <Edit/>
                                            </IconButton>
                                        )
                                    :
                                        (
                                            null
                                        )
                                }
                            </CardActions>
                        )
                 }
            </Card>
        )
    }
}

const mapStateToProps = state=>({
    user: state.userData.user,
    loading:state.userData.loading
 })

export default connect(mapStateToProps,{me,showMainDialog})(CardPrice)
