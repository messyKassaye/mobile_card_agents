import React from "react";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import authstyle from "../authstyle/auth_style";
import Badge from '@material-ui/core/Badge';
import Skeleton from "@material-ui/lab/Skeleton";
import {connect} from "react-redux";
import {me} from '../state/actions/usersActions'
import withStyles from "@material-ui/core/styles/withStyles";
import {Menu} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
class Profile  extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            anchorEl:null
        }
        this.handleMenu = this.handleMenu.bind(this)
    }
    handleMenu = (event)=>{
        this.setState({
            anchorEl:event.currentTarget
        })
    }

    closeMenu = (event)=>{
        this.setState({
            anchorEl: null
        })
    }

    componentDidMount(){
        this.props.me()
    }

    render() {
        const  classes = this.props
        return (
            <div >
                <IconButton
                    color='inherit'
                    aria-controls='profile-menu'
                    aria-label='Profile menu'
                    aria-haspopup='true'
                    onClick={this.handleMenu}         
                >
                    <Avatar  style={{margin:1,width:30,height:30}}>{'M'}</Avatar>
                </IconButton>
                <Menu
                 id='profile-menu'
                 anchorEl={this.state.anchorEl}
                 open={Boolean(this.state.anchorEl)}
                 keepMounted
                 onClose={this.closeMenu}
                >
                    <List
                    component='nav'
                    aria-labelledby='nested menu'
                    >
                        <ListItem button>
                            <ListItemText primary='Setting'/>
                        </ListItem>

                        <ListItem button>
                            <ListItemText primary='Logout'/>
                        </ListItem>

                    </List>

                </Menu>
            </div>
        );
    }

}

const mapStateToProps = state=>({
    user: state.userData.user,
    loading:state.userData.loading
 })

export default connect(mapStateToProps,{me})(withStyles(authstyle)(Profile))
