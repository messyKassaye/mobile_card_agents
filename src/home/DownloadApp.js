import { AppBar, Button, Container, Link, Toolbar, Typography } from '@material-ui/core'
import { green, orange } from '@material-ui/core/colors'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import homeStyle from './styles/homeStyle'
import { API_URL, HOME } from '../constants/constants'

class DownloadApp extends React.Component{


    downloadApp = () => {
		const response = {
            file: `${HOME}ecardApp.apk`,
          };
          // server sent the url to the file!
          // now, let's download:
          window.open(response.file);
    }
    render() {
        const classes = this.props
        return (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:10}}>
                <div className={classes.downloadApp} >
                <Typography variant={'h5'} style={{color:green[500],marginBottom:25}}>
                    Your are registered successfully!
                </Typography>
                <span>
                    {`Since you are registered as ${this.props.role.name} you have to download our app and start receive and sell cards.`}
                </span>
                <Button 
                    onClick={this.downloadApp}
                    variant={'outlined'}
                    color={'primary'} 
                    style={{textTransform:'none',marginTop:25}}>
                        Download app
                    </Button>
                </div>
            </div>
        )
    }
}

export default withStyles(homeStyle)(DownloadApp)