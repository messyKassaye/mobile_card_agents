import { Button, Card, Container, Typography } from '@material-ui/core'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import homeStyle from './styles/homeStyle'
class FooterPage extends React.Component{

    render(){
        const {classes} = this.props
        return(
            <div className={classes.footer}>
                <Container maxWidth={'lg'}>
                     <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                      <Typography variant={'h4'} style={{color:'white',marginBottom:20}}>
                          Download app now
                      </Typography>

                      <Button 
                      variant={'outlined'} 
                      style={{color:'white'}}>
                          Download
                      </Button>
                     </div>

                </Container>
            </div>
        )
    }
}

export default withStyles(homeStyle)(FooterPage)