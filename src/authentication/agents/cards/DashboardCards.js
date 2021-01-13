import { Grid } from '@material-ui/core'
import { deepOrange, deepPurple, green, orange } from '@material-ui/core/colors'
import React, { Component } from 'react'
import CommonDashboardCard from '../../commons/CommonDashboardCard'
class DashboardCards extends Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item md={4} xs={12} sm={12}>
                    <CommonDashboardCard
                     chartBackgroundColor={deepOrange[500]}
                     cardBackgroundColor={green[500]}
                     textColor={'white'}
                     title={'10'}
                     subheader={'Total prints'}     
                    />
                </Grid>

                
            <Grid item md={4} xs={12} sm={12}>
            <CommonDashboardCard
                chartBackgroundColor={orange[500]}
                cardBackgroundColor={deepPurple[500]}
                textColor={'white'}
                title={'10'}
                subheader={'Total number of cards'}
            />
            </Grid>

            <Grid item md={4} xs={12} sm={12}>
            <CommonDashboardCard
                chartBackgroundColor={'white'}
                cardBackgroundColor={'#0c0b2b'}
                textColor={'white'}
                title={'10'}
                subheader={'Total card requests'}
            />
            </Grid>

            </Grid>
        )
    }
}


export default DashboardCards
