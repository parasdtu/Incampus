import React, {Component, Fragment} from 'react';
import './Otp.css';
import image from './OTP anime.gif';
import { Button,Card } from 'react-bootstrap';

class Otp extends Component {
    Generate()
    {
        window.alert("New One Time Password has been sent");
        document.getElementById('sent').innerHTML = "Enter The new Code that We sent You";
    }
    render(){
        return(
            <Fragment>
                <div className="outer">
                    <div className="middle">
                        <Card id="c">
                            <Card.Body>
                                <h5 className="card-title" id="heading">Verification</h5>
                                <img src={image} width = '85%' />
                                <div className="card-text" id="sent" >Enter the verification Code we just sent you on your phone...</div>
                                <form>
                                    <input className="input" type="text" maxlength="1" onKeyUp="moveNext(this);" id="input1" />
                                    <input className="input" type="text" maxlength="1" id="input2" onKeyUp="moveNext(this);" />
                                    <input className="input" type="text"  maxlength="1" id="input3" onkeyup="moveNext(this);" />
                                    <input className="input" type="text" maxlength="1" id="input4" onkeyup="moveNext(this);"  />
                                </form>
                                <br /><br /><br /><br />
                                <div id="resend">If you didn't recieve a code! <a href="#" onClick={this.Generate} >Resend</a> </div>
                
                                <Button className="btn btn-success" id="success"><a href="/profile" style= {{color:"white",textDecoration:"none"}}>Verify</a></Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Otp;