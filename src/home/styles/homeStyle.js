import { green, orange, red } from "@material-ui/core/colors"

const  homeStyle = theme=>({

    root:{
        display:'flex',
        flexDirection:'column',
        minHeight:'100vh'
    },
    appBar:{
        backgroundColor:'transparent'
    },
    container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:100,
        flex:1,
    },
    container2:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-bewteen',
        [theme.breakpoints.down('xs')]:{
            display:'flex',
            flexDirection:'column'
        }
    },
    appBar:{
        backgroundColor:'transparent',
        [theme.breakpoints.down('xs')]:{
            backgroundColor:'white'
        }
    },
    toolBar:{
        backgroundColor:'transparent',
        [theme.breakpoints.down('xs')]:{
            backgroundColor:'white'
        }
    },
    innerContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginLeft:150,
        [theme.breakpoints.down('xs')]:{
            marginLeft:0,
            alignItems:'flex-start'
        }
    },
    lists:{
        marginBottom:20,
        marginLeft:100,
        [theme.breakpoints.down('xs')]:{
            marginLeft:10
        }
    },
    card:{
        width:500,
        margin:10,
        [theme.breakpoints.down('xs')]:{
            width:'90%'
        }
    },
    grow:{
        display:'flex',
        flexGrow:'1',
        [theme.breakpoints.down('xs')]:{
            display:'none'
        }
    },
    button:{
        textTransform:'none',
        marginRight:250,
        [theme.breakpoints.down('xs')]:{
            marginRight:0,
            marginLeft:200
        }
    },
    footer:{
        backgroundColor:'#3C4252',
        color:'white',
        padding:10
    },
    accidentPageContainer:{
        paddingLeft:150,
        paddingRight:150,
        [theme.breakpoints.down('xs')]:{
            paddingLeft:10,
            paddingRight:10,  
        }
    },
    span:{
        marginRight:10,
        marginLeft:10,
        color:orange[500]
    },
    start_using:{
        color:green[500],
        marginTop:15,
        marginBottom:15
    },
    text_input:{
        width:'100%',
        marginBottom:30
    },
    headerContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:250,
        [theme.breakpoints.down('xs')]:{
            display:'flex',
            flexDirection:'column',
            marginBottom:100
           
        }
    },
    title1:{
        fontSize:'2.5em',
        fontWeight:'bold',
        [theme.breakpoints.down('xs')]:{
            fontSize:'1.2em'
        }
    },
    headerContainerTwo:{
        width:650,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        [theme.breakpoints.down('xs')]:{
            width:'auto',
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }
    },
    signUpBtn:{
        marginTop:25,
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        }
    },
    firstImage:{
        width:'58%',
        height:500,
        [theme.breakpoints.down('xs')]:{
            marginTop:25,
            width:'100%',
            height:300
        }
    },
    form:{
        marginTop:-80,
        zIndex:12,
        paddingLeft: 150,
        paddingRight: 150,
        [theme.breakpoints.down('xs')]:{
            marginTop: -40,
            paddingLeft: 0,
            paddingRight: 0,
        }
    },
    text_input:{
        width:'100%',
        marginBottom:20
    },
    register_me_as:{
        display: "flex",
        flexDirection:'row',
        justifyContent: 'start',
        fontSize:17,
        color:'#031b4e',
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column'
        }
    },
    submit_division:{
        display:'flex',
        flexDirection: 'column',
       
    },
    signup_button:{
        textTransform:'none',
        marginBottom:10,
        width:'100%',
        marginRight:20
    },
    registered:{
        display:"flex",
        alignItems:"center",
        color:'#031b4e',
        paddingLeft:50,
        fontSize: 16,
        direction:'row',
    },
    downloadApp:{
        width:600,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:10,
        [theme.breakpoints.down('xs')]:{
            width:500,
            padding:20
        }
    }
    

})

export default homeStyle