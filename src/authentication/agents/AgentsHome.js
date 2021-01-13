import { Grid } from '@material-ui/core'
import React from 'react'
import CardPrice from './cardPrice/CardPrice'
import DashboardCards from './cards/DashboardCards'
import Company from './company/Company'
import DashboardCardRequest from './dashboards/DashboardCardRequest'

class AgentsHome extends React.Component{

    render(){
        return <Grid container spacing={2}>
            <Grid item md={9} xs={12} sm={12}>
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12} sm={12}>
                        <DashboardCards/>
                    </Grid>

                    <Grid item md={12} xs={12} sm={12}>
                        <DashboardCardRequest/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={3} xs={12} sm={12}>
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12} sm={12}>
                        <CardPrice/>
                    </Grid>

                    <Grid item md={12} xs={12} sm={12}>
                        <Company/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    }
}

export default AgentsHome