import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React, { Component } from 'react'
 class PrintedFile extends Component {

    startPrinting =()=>{
        let cardContents = document.getElementById("printer"); 
            let a = window.open(''); 
            a.document.write('<html>'); 
            a.document.write('<head>')
            a.document.write('<link rel="stylesheet" href="http://localhost:8000/css/print.css" type="text/css" />');
            a.document.write('</head>')
            a.document.write('<body>'); 
            a.document.write(cardContents.innerHTML); 
            a.document.write('</body></html>'); 
            a.document.close(); 
            a.print();
    }

    cardType =(id)=>{
        if(id===1){
            return '5 Birr'
        }else if(id===2){
            return '10 Birr'
        }else if(id===3){
            return '15 Birr'
        }else if(id===4){
            return '25 Birr'
        }else if(id===5){
            return '50 Birr'
        }else if(id===6){
            return '100 Birr'
        }
    }
    render() {
        return (
            <Card elevation={0}>
                <CardContent>
                    <div id ={'printer'} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        {
                            this.props.cards.map(card=>(
                                <div style={{display:"flex",flexDirection:'column',alignItems:'center'}}>
                                   <div id='innerContainer' style={{display:'flex',flexDirection:'column'}}>
                                   <div id='company'>
                                      <img
                                        id='companyImage1'
                                        src={'http://localhost:8000/images/ethio_tele.png'}
                                        width={120}
                                        height={40}
                                       />
                                       <img
                                        src={'http://localhost:8000/images/company.jpg'}
                                        width={60}
                                        height={20}
                                       />
                                   </div>
                                   <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                   <span id='cardType'>
                                       {this.cardType(card.card_type_id)}
                                   </span>
                                   <span>
                                       {'-----------e-voucher Pin-----------'}
                                   </span>
                                   <span id='cardNumber'>
                                       {card.card_number.toString().replace(/\d{4}(?=.)/g, '$& ')}
                                   </span>
                                   <span>
                                       {'----------------------------------------'}
                                   </span>
                                   <span>
                                       {`To Recharge *805*${card.card_number}`}
                                   </span>
                                   <span>
                                       {`SN: 345 567 789 09${card.id}`}
                                   </span>
                                   <span>
                                       {`Agent: ${this.props.agent.attribute.first_name}`}
                                   </span>
                                   <span>
                                       {`Powered by ${this.props.company.name}`}
                                   </span>
                                   <span id='end'>
                                       {`======= Thank you for buying ====`}
                                   </span>
                                   </div>
                                   </div>
                                </div>
                            ))
                        }
                    </div>
                </CardContent>
                <div style={{display:'flex',flexDirection:'row'}}>
                        <Button
                        onClick={this.startPrinting}
                         variant={'contained'}
                         color={'primary'}
                         style={{textTransform:'none',position:'absolute',bottom:10,right:10}}
                        >
                            Print cards
                        </Button>
                </div>
            </Card>
        )
    }
}

export default PrintedFile
