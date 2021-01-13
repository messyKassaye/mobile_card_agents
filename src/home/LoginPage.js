import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import homeStyle from './styles/homeStyle'
import HomeAppBar from './HomeAppBar'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import Login from './Login'
import FooterPage from './FooterPage'
import PersonIcon from '@material-ui/icons/Person'
class LoginPage extends React.Component{

    render(){
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <HomeAppBar/>
                <div className={classes.container}>
                <Card className={classes.card}>
                    <CardHeader
                     style={{backgroundColor:'#6610f2',color:'white'}}
                     title={'Login to your dashboard'}
                     avatar={<PersonIcon/>}
                    />
                  <CardContent>
                    <Login/>
                 </CardContent>
                </Card>
                </div>
                <FooterPage/>
            </div>
        )
    }
}

export default withStyles(homeStyle)(LoginPage)