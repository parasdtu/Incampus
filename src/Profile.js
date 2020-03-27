import React, {Component, Fragment} from 'react'
import './Profile.css';
import image from './SecProfilePic.jpg';
import logo from './Logo.PNG';

class Profile extends Component{
    constructor(props){
        super(props);
        
        this.state={
            x:1
        }
    }
    ChangeClass = () =>{
        if(this.state.x%2==1)
        {
            document.getElementById("change").className = "sidebar";
            this.setState({x:this.state.x+1});
        }
        else
            {
                document.getElementById("change").className = "sidebar sidebar-none";
                this.setState({x:this.state.x+1});
            }
    }
    render(){
        return (
            <Fragment>
            <header>
                <nav className="main-nav">
                    <div className="nav-left">
                        <span className="hamburger-parent">
                            <i className="hamburger fas fa-bars" onClick={this.ChangeClass}></i>
                        </span>
                        <span>
                            <a href="#">
                                <img src={logo} style={{borderRadius: '50%', height: "3.5rem", width: "3.5rem"}} />
                            </a>
                        </span>
                    </div>
    
    
                    <div className="nav-right">
                        <div className="dsp-none-sm">
                
                            <ul className="nav-list">
                                <a href="#">
                                    <li className="nav-items pointer">
                                        HOME
                                    </li>
                                </a>
                        
                                <a href="#">
                                    <li className="nav-items pointer">
                                        EXPLORE
                                    </li>
                                </a>
                        
                                <a href="#">
                                    <li className="nav-items pointer">
                                        PROFILE
                                    </li>
                                </a>
                            </ul>
                        </div>
    
                        <div className="round-img">
                            <img src={image} alt="profile-pic" /> 
                        </div>
    
                        <div className="card">
                            <div className="top-offset"></div>
                                <div className="nav-info">
                                    <div className="flex-row justify-content-end">
                                        <a href="#">
                                            <span className="pointer ">MY PROFILE</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                
                                    <div className="flex-row justify-content-end">
                                        <a href="#">
                                            <span className="pointer ">MY ADDRESSES</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                
                                    <div className="flex-row justify-content-end">
                                        <a href="#">
                                            <span className="pointer ">MY FOLLOWERS</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                
                                    <div className="flex-row justify-content-end">
                                        <a href="#">
                                            <span className="pointer ">MY FOLLOWING</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                
                                    <div className="flex-row justify-content-end faded">
                                        <a href="#">
                                            <span className="pointer">LOGOUT</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </nav>
    
                    <div className="sidebar sidebar-none" id="change">
                        <i className="close fas fa-times fa-200px"></i>
                        <div className="upper-half" style={{paddingTop: "30%" }}>
                            <div className="round-img" >
                                <img src={image} alt="profile-pic" /> 
                            </div>
                            <p>
                                Hi, Username Goes here
                            </p>
                            <div className="top-offset"></div>
                                <div className="nav-info">
                                    <div className="flex-row justify-content-start">
                                        <a href="#">
                                            <span className="pointer ">MY PROFILE</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                
                                    <div className="flex-row justify-content-start">
                                        <a href="#">
                                            <span className="pointer ">MY ADDRESSES</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                
                                    <div className="flex-row justify-content-start">
                                        <a href="#">
                                            <span className="pointer ">MY FOLLOWERS</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                
                                    <div className="flex-row justify-content-start">
                                        <a href="#">
                                            <span className="pointer ">MY FOLLOWING</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                                </div>
                                <br />
                                <a href="#">
                                    <div>
                                        <button className="btn btn-primary">Logout</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </header>
                    <div className="row c-arrangement">
                        <div className="nav-info col-md-3">
                            <a href="#">
                                <div className="profile-pic">
                                    <div className="d-flex justify-content-center profile-container">
                                            <img className="round-img user-pic" src={image} />
                                    </div>
                                    <div className="card">
                                            <p className="pointer black">Hi, UserName</p>
                        
                                    </div>
                                </div>
                        `   </a>
                
                        <div>
                            <div className="flex-row" style={{fontWeight: "bold", fontSize: "1.4rem", height: "5rem"}}>
                                <a href="#"><span className="pointer black">MY PROFILE</span></a>
                            </div>
                            <div className="separator"></div>
                            <div className="flex-row" style={{fontWeight: "bold", fontSize: "1.4rem", height: "5rem"}}>
                                <a href="#"><span className="pointer black">MY ADDRESSES</span></a>
                            </div>
                                <div className="separator"></div>
                            <div className="flex-row" style={{fontWeight: "bold", fontSize: "1.4rem", height: "5rem"}}>
                                <a href="#"><span className="pointer black">MY FOLLOWERS</span></a>
                            </div>
                            <div className="separator"></div>
                            <div className="flex-row" style={{fontWeight: "bold", fontSize: "1.4rem", height: "5rem"}}>
                                <a href="#"><span className="pointer black">MY FOLLOWING</span></a>
                            </div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="flex-row faded" style={{fontWeight: "bold", fontSize: "1.4rem", height: "5rem"}}>
                                <a href="#"><span className="pointer black">LOGOUT</span></a>
                            </div>
                        </div>
                    </div>
    <div className="offset-md-4 col-md-8 c-profile-edit" >
        <div className="card" id="card">
            <h1 className="heading" id="head" >
                Edit Profile
            </h1>

        <form id="edit-form" enctype="multipart/form-data" method="POST">
            <input type="hidden" name="_csrf" value="" />
                   <div className="row justify-content-between align-items-center profile-row">
                <div className="round-img">
                        <img className="round-img user-pic" src={image} />
                </div>

                <div className="btn btn-primary">
                    <button type="button" data-toggle="modal" data-target="#change-dp">CHANGE PROFILE IMAGE</button>
                </div>
            </div>

            <div className="attributes">
                <div className="row no-gutters align-items-center justify-content-between detail-row">
                    <div className="label-input col-2">UserID</div>
                    <input style={{paddingLeft: "1%"}} className="input-text col-9" type="text" id="userid" disabled value="XXXXX"/>
                </div>

                <div className="row no-gutters align-items-center justify-content-between detail-row">
                    <div className="label-input col-2">Username</div>
                    <input style={{paddingLeft: "1%"}} type="text" className="input-text col-9" id="username" disabled value="XXXXXXXXXX"/>
                </div>

                <div className="row no-gutters align-items-center justify-content-between detail-row">
                    <div className="label-input col-2">Firstname</div>
                    <input style={{paddingLeft: "1%"}} type="text" id="firstname" className="input-text col-9" name="firstname"
                           value="John"/>
                </div>

                <div className="row no-gutters align-items-center justify-content-between detail-row">
                    <div className="label-input col-2">Lastname</div>
                    <input style={{paddingLeft: "1%"}} className="input-text col-9" type="text" name="lastname" id="lastname"
                           value="Doe"/>
                </div>

                <div className="row no-gutters align-items-center justify-content-between detail-row">
                    <div className="label-input col-2">Gender</div>
                    <select className="col-9 input-text" name="gender" id="gender">
                        <option value="MALE" 
                                selected
                        >MALE
                        </option>
                        <option value="FEMALE">FEMALE
                        </option>
                        <option value="UNDISCLOSED" >UNDISCLOSED
                        </option>
                    </select>
                </div>
                <div className="row no-gutters align-items-center justify-content-between detail-row">
                    <div className="label-input col-2">EDUCATION</div>
                    <input style={{paddingLeft: "1%"}} type="text" id="education" className="input-text col-9" name="education" placeholder="Enter Educational Background"/>
                </div>
                <div className="row no-gutters align-items-center justify-content-between detail-row">
                    <div className="label-input col-2">Email</div>
                        <input style={{paddingLeft: "1%"}} type="text" id="email" name="email" className="input-text col-9" disabled
                               value="johnDoe@xmail.com"/>
                </div>

                <div className="row no-gutters align-items-center justify-content-between detail-row">
                    <div className="label-input col-2">Contact Number</div>
                    <select name="dial_code" className="input-text col-3">
                                <option className="dropdown-li" value="+91" selected>
                                    India (+91)
                                </option>
                                <option className="dropdown-li" value="+93">
                                    Afghanistan (+93)
                                </option>
                                <option className="dropdown-li" value="+355">
                                    Albania (+355)
                                </option>
                                <option className="dropdown-li" value="+213">
                                    Algeria (+213)
                                </option>
                                <option className="dropdown-li" value="+1684">
                                    AmericanSamoa (+1684)
                                </option>
                                <option className="dropdown-li" value="+376">
                                    Andorra (+376)
                                </option>
                                <option className="dropdown-li" value="+244">
                                    Angola (+244)
                                </option>
                                <option className="dropdown-li" value="+1264">
                                    Anguilla (+1264)
                                </option>
                                <option className="dropdown-li" value="+1268">
                                    Antigua and Barbuda (+1268)
                                </option>
                                <option className="dropdown-li" value="+54">
                                    Argentina (+54)
                                </option>
                                <option className="dropdown-li" value="+374">
                                    Armenia (+374)
                                </option>
                                <option className="dropdown-li" value="+297">
                                    Aruba (+297)
                                </option>
                                <option className="dropdown-li" value="+61">
                                    Australia (+61)
                                </option>
                                <option className="dropdown-li" value="+43">
                                    Austria (+43)
                                </option>
                                <option className="dropdown-li" value="+994">
                                    Azerbaijan (+994)
                                </option>
                                <option className="dropdown-li" value="+1242">
                                    Bahamas (+1242)
                                </option>
                                <option className="dropdown-li" value="+973">
                                    Bahrain (+973)
                                </option>
                                <option className="dropdown-li" value="+880">
                                    Bangladesh (+880)
                                </option>
                                <option className="dropdown-li" value="+1246">
                                    Barbados (+1246)
                                </option>
                                <option className="dropdown-li" value="+375">
                                    Belarus (+375)
                                </option>
                                <option className="dropdown-li" value="+32">
                                    Belgium (+32)
                                </option>
                                <option className="dropdown-li" value="+501">
                                    Belize (+501)
                                </option>
                                <option className="dropdown-li" value="+229">
                                    Benin (+229)
                                </option>
                                <option className="dropdown-li" value="+1441">
                                    Bermuda (+1441)
                                </option>
                                <option className="dropdown-li" value="+975">
                                    Bhutan (+975)
                                </option>
                                <option className="dropdown-li" value="+387">
                                    Bosnia and Herzegovina (+387)
                                </option>
                                <option className="dropdown-li" value="+267">
                                    Botswana (+267)
                                </option>
                                <option className="dropdown-li" value="+55">
                                    Brazil (+55)
                                </option>
                                <option className="dropdown-li" value="+246">
                                    British Indian Ocean Territory (+246)
                                </option>
                                <option className="dropdown-li" value="+359">
                                    Bulgaria (+359)
                                </option>
                                <option className="dropdown-li" value="+226">
                                    Burkina Faso (+226)
                                </option>
                                <option className="dropdown-li" value="+257">
                                    Burundi (+257)
                                </option>
                                <option className="dropdown-li" value="+855">
                                    Cambodia (+855)
                                </option>
                                <option className="dropdown-li" value="+237">
                                    Cameroon (+237)
                                </option>
                                <option className="dropdown-li" value="+1">
                                    Canada (+1)
                                </option>
                                <option className="dropdown-li" value="+238">
                                    Cape Verde (+238)
                                </option>
                                <option className="dropdown-li" value="+345">
                                    Cayman Islands (+345)
                                </option>
                                <option className="dropdown-li" value="+236">
                                    Central African Republic (+236)
                                </option>
                                <option className="dropdown-li" value="+235">
                                    Chad (+235)
                                </option>
                                <option className="dropdown-li" value="+56">
                                    Chile (+56)
                                </option>
                                <option className="dropdown-li" value="+86">
                                    China (+86)
                                </option>
                                <option className="dropdown-li" value="+61">
                                    Christmas Island (+61)
                                </option>
                                <option className="dropdown-li" value="+57">
                                    Colombia (+57)
                                </option>
                                <option className="dropdown-li" value="+269">
                                    Comoros (+269)
                                </option>
                                <option className="dropdown-li" value="+242">
                                    Congo (+242)
                                </option>
                                <option className="dropdown-li" value="+682">
                                    Cook Islands (+682)
                                </option>
                                <option className="dropdown-li" value="+506">
                                    Costa Rica (+506)
                                </option>
                                <option className="dropdown-li" value="+385">
                                    Croatia (+385)
                                </option>
                                <option className="dropdown-li" value="+53">
                                    Cuba (+53)
                                </option>
                                <option className="dropdown-li" value="+537">
                                    Cyprus (+537)
                                </option>
                                <option className="dropdown-li" value="+420">
                                    Czech Republic (+420)
                                </option>
                                <option className="dropdown-li" value="+45">
                                    Denmark (+45)
                                </option>
                                <option className="dropdown-li" value="+253">
                                    Djibouti (+253)
                                </option>
                                <option className="dropdown-li" value="+1767">
                                    Dominica (+1767)
                                </option>
                                <option className="dropdown-li" value="+1849">
                                    Dominican Republic (+1849)
                                </option>
                                <option className="dropdown-li" value="+593">
                                    Ecuador (+593)
                                </option>
                                <option className="dropdown-li" value="+20">
                                    Egypt (+20)
                                </option>
                                <option className="dropdown-li" value="+503">
                                    El Salvador (+503)
                                </option>
                                <option className="dropdown-li" value="+240">
                                    Equatorial Guinea (+240)
                                </option>
                                <option className="dropdown-li" value="+291">
                                    Eritrea (+291)
                                </option>
                                <option className="dropdown-li" value="+372">
                                    Estonia (+372)
                                </option>
                                <option className="dropdown-li" value="+251">
                                    Ethiopia (+251)
                                </option>
                                <option className="dropdown-li" value="+298">
                                    Faroe Islands (+298)
                                </option>
                                <option className="dropdown-li" value="+679">
                                    Fiji (+679)
                                </option>
                                <option className="dropdown-li" value="+358">
                                    Finland (+358)
                                </option>
                                <option className="dropdown-li" value="+33">
                                    France (+33)
                                </option>
                                <option className="dropdown-li" value="+594">
                                    French Guiana (+594)
                                </option>
                                <option className="dropdown-li" value="+689">
                                    French Polynesia (+689)
                                </option>
                                <option className="dropdown-li" value="+241">
                                    Gabon (+241)
                                </option>
                                <option className="dropdown-li" value="+220">
                                    Gambia (+220)
                                </option>
                                <option className="dropdown-li" value="+995">
                                    Georgia (+995)
                                </option>
                                <option className="dropdown-li" value="+49">
                                    Germany (+49)
                                </option>
                                <option className="dropdown-li" value="+233">
                                    Ghana (+233)
                                </option>
                                <option className="dropdown-li" value="+350">
                                    Gibraltar (+350)
                                </option>
                                <option className="dropdown-li" value="+30">
                                    Greece (+30)
                                </option>
                                <option className="dropdown-li" value="+299">
                                    Greenland (+299)
                                </option>
                                <option className="dropdown-li" value="+1473">
                                    Grenada (+1473)
                                </option>
                                <option className="dropdown-li" value="+590">
                                    Guadeloupe (+590)
                                </option>
                                <option className="dropdown-li" value="+1671">
                                    Guam (+1671)
                                </option>
                                <option className="dropdown-li" value="+502">
                                    Guatemala (+502)
                                </option>
                                <option className="dropdown-li" value="+224">
                                    Guinea (+224)
                                </option>
                                <option className="dropdown-li" value="+245">
                                    Guinea-Bissau (+245)
                                </option>
                                <option className="dropdown-li" value="+595">
                                    Guyana (+595)
                                </option>
                                <option className="dropdown-li" value="+509">
                                    Haiti (+509)
                                </option>
                                <option className="dropdown-li" value="+504">
                                    Honduras (+504)
                                </option>
                                <option className="dropdown-li" value="+36">
                                    Hungary (+36)
                                </option>
                                <option className="dropdown-li" value="+354">
                                    Iceland (+354)
                                </option>
                                <option className="dropdown-li" value="+62">
                                    Indonesia (+62)
                                </option>
                                <option className="dropdown-li" value="+964">
                                    Iraq (+964)
                                </option>
                                <option className="dropdown-li" value="+353">
                                    Ireland (+353)
                                </option>
                                <option className="dropdown-li" value="+972">
                                    Israel (+972)
                                </option>
                                <option className="dropdown-li" value="+39">
                                    Italy (+39)
                                </option>
                                <option className="dropdown-li" value="+1876">
                                    Jamaica (+1876)
                                </option>
                                <option className="dropdown-li" value="+81">
                                    Japan (+81)
                                </option>
                                <option className="dropdown-li" value="+962">
                                    Jordan (+962)
                                </option>
                                <option className="dropdown-li" value="+77">
                                    Kazakhstan (+77)
                                </option>
                                <option className="dropdown-li" value="+254">
                                    Kenya (+254)
                                </option>
                                <option className="dropdown-li" value="+686">
                                    Kiribati (+686)
                                </option>
                                <option className="dropdown-li" value="+965">
                                    Kuwait (+965)
                                </option>
                                <option className="dropdown-li" value="+996">
                                    Kyrgyzstan (+996)
                                </option>
                                <option className="dropdown-li" value="+371">
                                    Latvia (+371)
                                </option>
                                <option className="dropdown-li" value="+961">
                                    Lebanon (+961)
                                </option>
                                <option className="dropdown-li" value="+266">
                                    Lesotho (+266)
                                </option>
                                <option className="dropdown-li" value="+231">
                                    Liberia (+231)
                                </option>
                                <option className="dropdown-li" value="+423">
                                    Liechtenstein (+423)
                                </option>
                                <option className="dropdown-li" value="+370">
                                    Lithuania (+370)
                                </option>
                                <option className="dropdown-li" value="+352">
                                    Luxembourg (+352)
                                </option>
                                <option className="dropdown-li" value="+261">
                                    Madagascar (+261)
                                </option>
                                <option className="dropdown-li" value="+265">
                                    Malawi (+265)
                                </option>
                                <option className="dropdown-li" value="+60">
                                    Malaysia (+60)
                                </option>
                                <option className="dropdown-li" value="+960">
                                    Maldives (+960)
                                </option>
                                <option className="dropdown-li" value="+223">
                                    Mali (+223)
                                </option>
                                <option className="dropdown-li" value="+356">
                                    Malta (+356)
                                </option>
                                <option className="dropdown-li" value="+692">
                                    Marshall Islands (+692)
                                </option>
                                <option className="dropdown-li" value="+596">
                                    Martinique (+596)
                                </option>
                                <option className="dropdown-li" value="+222">
                                    Mauritania (+222)
                                </option>
                                <option className="dropdown-li" value="+230">
                                    Mauritius (+230)
                                </option>
                                <option className="dropdown-li" value="+262">
                                    Mayotte (+262)
                                </option>
                                <option className="dropdown-li" value="+52">
                                    Mexico (+52)
                                </option>
                                <option className="dropdown-li" value="+377">
                                    Monaco (+377)
                                </option>
                                <option className="dropdown-li" value="+976">
                                    Mongolia (+976)
                                </option>
                                <option className="dropdown-li" value="+382">
                                    Montenegro (+382)
                                </option>
                                <option className="dropdown-li" value="+1664">
                                    Montserrat (+1664)
                                </option>
                                <option className="dropdown-li" value="+212">
                                    Morocco (+212)
                                </option>
                                <option className="dropdown-li" value="+95">
                                    Myanmar (+95)
                                </option>
                                <option className="dropdown-li" value="+264">
                                    Namibia (+264)
                                </option>
                                <option className="dropdown-li" value="+674">
                                    Nauru (+674)
                                </option>
                                <option className="dropdown-li" value="+977">
                                    Nepal (+977)
                                </option>
                                <option className="dropdown-li" value="+31">
                                    Netherlands (+31)
                                </option>
                                <option className="dropdown-li" value="+599">
                                    Netherlands Antilles (+599)
                                </option>
                                <option className="dropdown-li" value="+687">
                                    New Caledonia (+687)
                                </option>
                                <option className="dropdown-li" value="+64">
                                    New Zealand (+64)
                                </option>
                                <option className="dropdown-li" value="+505">
                                    Nicaragua (+505)
                                </option>
                                <option className="dropdown-li" value="+227">
                                    Niger (+227)
                                </option>
                                <option className="dropdown-li" value="+234">
                                    Nigeria (+234)
                                </option>
                                <option className="dropdown-li" value="+683">
                                    Niue (+683)
                                </option>
                                <option className="dropdown-li" value="+672">
                                    Norfolk Island (+672)
                                </option>
                                <option className="dropdown-li" value="+1670">
                                    Northern Mariana Islands (+1670)
                                </option>
                                <option className="dropdown-li" value="+47">
                                    Norway (+47)
                                </option>
                                <option className="dropdown-li" value="+968">
                                    Oman (+968)
                                </option>
                                <option className="dropdown-li" value="+92">
                                    Pakistan (+92)
                                </option>
                                <option className="dropdown-li" value="+680">
                                    Palau (+680)
                                </option>
                                <option className="dropdown-li" value="+507">
                                    Panama (+507)
                                </option>
                                <option className="dropdown-li" value="+675">
                                    Papua New Guinea (+675)
                                </option>
                                <option className="dropdown-li" value="+595">
                                    Paraguay (+595)
                                </option>
                                <option className="dropdown-li" value="+51">
                                    Peru (+51)
                                </option>
                                <option className="dropdown-li" value="+63">
                                    Philippines (+63)
                                </option>
                                <option className="dropdown-li" value="+48">
                                    Poland (+48)
                                </option>
                                <option className="dropdown-li" value="+351">
                                    Portugal (+351)
                                </option>
                                <option className="dropdown-li" value="+1939">
                                    Puerto Rico (+1939)
                                </option>
                                <option className="dropdown-li" value="+974">
                                    Qatar (+974)
                                </option>
                                <option className="dropdown-li" value="+40">
                                    Romania (+40)
                                </option>
                                <option className="dropdown-li" value="+250">
                                    Rwanda (+250)
                                </option>
                                <option className="dropdown-li" value="+685">
                                    Samoa (+685)
                                </option>
                                <option className="dropdown-li" value="+378">
                                    San Marino (+378)
                                </option>
                                <option className="dropdown-li" value="+966">
                                    Saudi Arabia (+966)
                                </option>
                                <option className="dropdown-li" value="+221">
                                    Senegal (+221)
                                </option>
                                <option className="dropdown-li" value="+381">
                                    Serbia (+381)
                                </option>
                                <option className="dropdown-li" value="+248">
                                    Seychelles (+248)
                                </option>
                                <option className="dropdown-li" value="+232">
                                    Sierra Leone (+232)
                                </option>
                                <option className="dropdown-li" value="+65">
                                    Singapore (+65)
                                </option>
                                <option className="dropdown-li" value="+421">
                                    Slovakia (+421)
                                </option>
                                <option className="dropdown-li" value="+386">
                                    Slovenia (+386)
                                </option>
                                <option className="dropdown-li" value="+677">
                                    Solomon Islands (+677)
                                </option>
                                <option className="dropdown-li" value="+27">
                                    South Africa (+27)
                                </option>
                                <option className="dropdown-li" value="+500">
                                    South Georgia and the South Sandwich Islands (+500)
                                </option>
                                <option className="dropdown-li" value="+34">
                                    Spain (+34)
                                </option>
                                <option className="dropdown-li" value="+94">
                                    Sri Lanka (+94)
                                </option>
                                <option className="dropdown-li" value="+249">
                                    Sudan (+249)
                                </option>
                                <option className="dropdown-li" value="+597">
                                    Suriname (+597)
                                </option>
                                <option className="dropdown-li" value="+268">
                                    Swaziland (+268)
                                </option>
                                <option className="dropdown-li" value="+46">
                                    Sweden (+46)
                                </option>
                                <option className="dropdown-li" value="+41">
                                    Switzerland (+41)
                                </option>
                                <option className="dropdown-li" value="+992">
                                    Tajikistan (+992)
                                </option>
                                <option className="dropdown-li" value="+66">
                                    Thailand (+66)
                                </option>
                                <option className="dropdown-li" value="+228">
                                    Togo (+228)
                                </option>
                                <option className="dropdown-li" value="+690">
                                    Tokelau (+690)
                                </option>
                                <option className="dropdown-li" value="+676">
                                    Tonga (+676)
                                </option>
                                <option className="dropdown-li" value="+1868">
                                    Trinidad and Tobago (+1868)
                                </option>
                                <option className="dropdown-li" value="+216">
                                    Tunisia (+216)
                                </option>
                                <option className="dropdown-li" value="+90">
                                    Turkey (+90)
                                </option>
                                <option className="dropdown-li" value="+993">
                                    Turkmenistan (+993)
                                </option>
                                <option className="dropdown-li" value="+1649">
                                    Turks and Caicos Islands (+1649)
                                </option>
                                <option className="dropdown-li" value="+688">
                                    Tuvalu (+688)
                                </option>
                                <option className="dropdown-li" value="+256">
                                    Uganda (+256)
                                </option>
                                <option className="dropdown-li" value="+380">
                                    Ukraine (+380)
                                </option>
                                <option className="dropdown-li" value="+971">
                                    United Arab Emirates (+971)
                                </option>
                                <option className="dropdown-li" value="+44">
                                    United Kingdom (+44)
                                </option>
                                <option className="dropdown-li" value="+1">
                                    United States (+1)
                                </option>
                                <option className="dropdown-li" value="+598">
                                    Uruguay (+598)
                                </option>
                                <option className="dropdown-li" value="+998">
                                    Uzbekistan (+998)
                                </option>
                                <option className="dropdown-li" value="+678">
                                    Vanuatu (+678)
                                </option>
                                <option className="dropdown-li" value="+681">
                                    Wallis and Futuna (+681)
                                </option>
                                <option className="dropdown-li" value="+967">
                                    Yemen (+967)
                                </option>
                                <option className="dropdown-li" value="+260">
                                    Zambia (+260)
                                </option>
                                <option className="dropdown-li" value="+263">
                                    Zimbabwe (+263)
                                </option>
                                <option className="dropdown-li" value="+358">
                                    land Islands (+358)
                                </option>
                                <option className="dropdown-li" value="+591">
                                    Bolivia, Plurinational State of (+591)
                                </option>
                                <option className="dropdown-li" value="+673">
                                    Brunei Darussalam (+673)
                                </option>
                                <option className="dropdown-li" value="+61">
                                    Cocos (Keeling) Islands (+61)
                                </option>
                                <option className="dropdown-li" value="+243">
                                    The Democratic Republic of Congo (+243)
                                </option>
                                <option className="dropdown-li" value="+225">
                                    Cote d&#x27;Ivoire (Ivory Coast) (+225)
                                </option>
                                <option className="dropdown-li" value="+500">
                                    Falkland Islands (Malvinas) (+500)
                                </option>
                                <option className="dropdown-li" value="+44">
                                    Guernsey (+44)
                                </option>
                                <option className="dropdown-li" value="+379">
                                    Holy See (Vatican City State) (+379)
                                </option>
                                <option className="dropdown-li" value="+852">
                                    Hong Kong (+852)
                                </option>
                                <option className="dropdown-li" value="+98">
                                    Islamic Republic of Iran (+98)
                                </option>
                                <option className="dropdown-li" value="+44">
                                    Isle of Man (+44)
                                </option>
                                <option className="dropdown-li" value="+44">
                                    Jersey (+44)
                                </option>
                                <option className="dropdown-li" value="+850">
                                    Democratic People&#x27;s Republic of Korea (+850)
                                </option>
                                <option className="dropdown-li" value="+82">
                                    Republic of Korea (+82)
                                </option>
                                <option className="dropdown-li" value="+856">
                                    Lao People&#x27;s Democratic Republic (+856)
                                </option>
                                <option className="dropdown-li" value="+218">
                                    Libyan Arab Jamahiriya (+218)
                                </option>
                                <option className="dropdown-li" value="+853">
                                    Macao (+853)
                                </option>
                                <option className="dropdown-li" value="+389">
                                    Macedonia (+389)
                                </option>
                                <option className="dropdown-li" value="+691">
                                    Micronesia, Federated States of (+691)
                                </option>
                                <option className="dropdown-li" value="+373">
                                    Republic of Maldova (+373)
                                </option>
                                <option className="dropdown-li" value="+258">
                                    Mozambique (+258)
                                </option>
                                <option className="dropdown-li" value="+970">
                                    Palestinian Territory, Occupied (+970)
                                </option>
                                <option className="dropdown-li" value="+872">
                                    Pitcairn (+872)
                                </option>
                                <option className="dropdown-li" value="+262">
                                    Réunion (+262)
                                </option>
                                <option className="dropdown-li" value="+7">
                                    Russia (+7)
                                </option>
                                <option className="dropdown-li" value="+590">
                                    Saint Barthélemy (+590)
                                </option>
                                <option className="dropdown-li" value="+290">
                                    Saint Helena, Ascension and Tristan Da Cunha (+290)
                                </option>
                                <option className="dropdown-li" value="+1869">
                                    Saint Kitts and Nevis (+1869)
                                </option>
                                <option className="dropdown-li" value="+1758">
                                    Saint Lucia (+1758)
                                </option>
                                <option className="dropdown-li" value="+590">
                                    Saint Martin (+590)
                                </option>
                                <option className="dropdown-li" value="+508">
                                    Saint Pierre and Miquelon (+508)
                                </option>
                                <option className="dropdown-li" value="+1784">
                                    Saint Vincent and the Grenadines (+1784)
                                </option>
                                <option className="dropdown-li" value="+239">
                                    Sao Tome and Principe (+239)
                                </option>
                                <option className="dropdown-li" value="+252">
                                    Somalia (+252)
                                </option>
                                <option className="dropdown-li" value="+47">
                                    Svalbard and Jan Mayen (+47)
                                </option>
                                <option className="dropdown-li" value="+963">
                                    Syrian Arab Republic (+963)
                                </option>
                                <option className="dropdown-li" value="+886">
                                    Taiwan, Province of China (+886)
                                </option>
                                <option className="dropdown-li" value="+255">
                                    Tanzania, United Republic of (+255)
                                </option>
                                <option className="dropdown-li" value="+670">
                                    Timor-Leste (+670)
                                </option>
                                <option className="dropdown-li" value="+58">
                                    Venezuela, Bolivarian Republic of (+58)
                                </option>
                                <option className="dropdown-li" value="+84">
                                    Viet Nam (+84)
                                </option>
                                <option className="dropdown-li" value="+1284">
                                    Virgin Islands, British (+1284)
                                </option>
                                <option className="dropdown-li" value="+1340">
                                    Virgin Islands, U.S. (+1340)
                                </option>
                    </select>

                    <input className="input-text col-5" type="text" name="mobile_number" id="mobile_number"
                           value=""/>
                </div>

                <div className="row no-gutters align-items-center justify-content-between detail-row">
                    <div className="label-input col-2">College</div>
                    <select name="collegeId" className="input-text col-9">
                                <option className="dropdown-li" value="1">0---OTHER / NOT LISTED / NO COLLEGE ---0</option>
                                <option className="dropdown-li" value="106">ABES Engineering College, New Delhi</option>
                                <option className="dropdown-li" value="107">ABES IT, New Delhi</option>
                                <option className="dropdown-li" value="108">ABV-IIITM, Gwalior</option>
                                <option className="dropdown-li" value="109">Accurate Institute of Management and Technology, Uttar Pradesh</option>
                                <option className="dropdown-li" value="110">ACEIT, Jaipur</option>
                                <option className="dropdown-li" value="111">Ambedkar Institute of Advanced Communication Technologies and Research, New Delhi</option>
                                <option className="dropdown-li" value="2">Amity School Of Engineering &amp; Technology (Noida)</option>
                                <option className="dropdown-li" value="174">Amity University (Noida)</option>
                                <option className="dropdown-li" value="112">Ansal University, Gurugram</option>
                                <option className="dropdown-li" value="3">Army Institute Of Technology (Pune)</option>
                                <option className="dropdown-li" value="4">Asia Pacific Institute of Information Technology (APIIT SD) (Panipat)</option>
                                <option className="dropdown-li" value="113">Atma Ram Sanatan Dharma College, Delhi</option>
                                <option className="dropdown-li" value="114">Banasthali Vidyapeeth, Rajasthan</option>
                                <option className="dropdown-li" value="9">Bannari Amman Institute Of Technology (Erode)</option>
                                <option className="dropdown-li" value="115">Bhagwan Parshuram Institute of Technology, Delhi</option>
                                <option className="dropdown-li" value="103">Bharati Vidyapeeth College of Engineering, New Delhi (Delhi)</option>
                                <option className="dropdown-li" value="104">Bharati Vidyapeeth Institute of Computer Applications and Management (BVICAM), New Delhi (Delhi)</option>
                                <option className="dropdown-li" value="10">Bharati Vidyapeeth University College Of Engineering (Pune)</option>
                                <option className="dropdown-li" value="118">Birla Institute of Technology and Science, Pilani (Dubai Campus)</option>
                                <option className="dropdown-li" value="116">Birla Institute of Technology and Science, Pilani (Goa Campus)</option>
                                <option className="dropdown-li" value="117">Birla Institute of Technology and Science, Pilani (Hyderabad Campus)</option>
                                <option className="dropdown-li" value="12">Birla Institute Of Technology (Ranchi)</option>
                                <option className="dropdown-li" value="11">Birla Institute Of Technology &amp; Science (Pilani)</option>
                                <option className="dropdown-li" value="5">B.I.T. Sindri (Dhanbad)</option>
                                <option className="dropdown-li" value="119">B. M. Institute Of Engineering &amp; Technology, Delhi</option>
                                <option className="dropdown-li" value="6">BMS College Of Engineering (Bangalore)</option>
                                <option className="dropdown-li" value="7">BMS Institute Of Technology &amp; Management (Bangalore)</option>
                                <option className="dropdown-li" value="8">BRACT&#x27;S Vishwakarma Institute of Information Technology (Pune)</option>
                                <option className="dropdown-li" value="121">CBS Group of Institution, Delhi</option>
                                <option className="dropdown-li" value="120">C-DAC NOIDA (GGSIPU)</option>
                                <option className="dropdown-li" value="14">Chaitanya Bharathi Institute Of Technology (Hyderabad)</option>
                                <option className="dropdown-li" value="122">Chandigarh University</option>
                                <option className="dropdown-li" value="176">Chitkara University</option>
                                <option className="dropdown-li" value="123">Cluster Innovation Centre</option>
                                <option className="dropdown-li" value="15">College Of Engineering, Guindy (Chennai)</option>
                                <option className="dropdown-li" value="16">College Of Engineering, Pune (Pune)</option>
                                <option className="dropdown-li" value="17">Cummins College of Engineering for Women (Pune)</option>
                                <option className="dropdown-li" value="13">CVR College Of Engineering (Hyderabad)</option>
                                <option className="dropdown-li" value="124">Deenbandhu Chhotu Ram University of Science and Technology</option>
                                <option className="dropdown-li" value="18">Delhi Technological University (New-Delhi)</option>
                                <option className="dropdown-li" value="127">Delhi University</option>
                                <option className="dropdown-li" value="175">Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)</option>
                                <option className="dropdown-li" value="125">DIT University</option>
                                <option className="dropdown-li" value="126">Dr. Akhilesh Das Gupta Institute of Technology &amp; Management</option>
                                <option className="dropdown-li" value="19">Dwarkadas J. Sanghvi College Of Engineering (Mumbai)</option>
                                <option className="dropdown-li" value="20">Faculty Of Engineering, DIT University (Dehradun)</option>
                                <option className="dropdown-li" value="21">Galgotias College Of Engineering And Technology (Noida)</option>
                                <option className="dropdown-li" value="173">Ganeshi Lal Aggarwal University (GLA)</option>
                                <option className="dropdown-li" value="22">Ganeshi Lal Bajaj Institute Of Technology &amp; Management (Noida)</option>
                                <option className="dropdown-li" value="128">Gautam Budh University, Noida</option>
                                <option className="dropdown-li" value="129">GB Pant Engineering College, Delhi</option>
                                <option className="dropdown-li" value="23">Government College Of Engineering (Amravati)</option>
                                <option className="dropdown-li" value="24">Government College Of Engineering (Karad)</option>
                                <option className="dropdown-li" value="25">Govt. Model Engineering College (Cochin)</option>
                                <option className="dropdown-li" value="177">Graphic Era University</option>
                                <option className="dropdown-li" value="26">Guru Nanak Dev Engineering College (Ludhiana)</option>
                                <option className="dropdown-li" value="130">Guru Nanak Dev Institute of Technology, Rohini</option>
                                <option className="dropdown-li" value="102">Guru Nanak Dev University, Amritsar (Punjab)</option>
                                <option className="dropdown-li" value="131">Guru Teg Bahadur Institute of Technology (GTBIT), New Delhi</option>
                                <option className="dropdown-li" value="132">HBTU, Lucknow</option>
                                <option className="dropdown-li" value="133">HMRITM, New Delhi</option>
                                <option className="dropdown-li" value="27">IES College Of Technology (Bhopal)</option>
                                <option className="dropdown-li" value="135">IGNOU - The Peoples University, New Delhi</option>
                                <option className="dropdown-li" value="28">IIIT, Allahabad (Allahabad)</option>
                                <option className="dropdown-li" value="136">IIIT, Bhubaneshwar</option>
                                <option className="dropdown-li" value="29">IIIT, Hyderabad (Hyderabad)</option>
                                <option className="dropdown-li" value="138">IIIT, Kota</option>
                                <option className="dropdown-li" value="137">IIMT, Uttar Pradesh</option>
                                <option className="dropdown-li" value="30">IIT, Bombay (Mumbai)</option>
                                <option className="dropdown-li" value="31">IIT, Delhi (Delhi)</option>
                                <option className="dropdown-li" value="32">IIT, Kanpur (Kanpur)</option>
                                <option className="dropdown-li" value="33">IIT, Kharagpur (Kharagpur)</option>
                                <option className="dropdown-li" value="140">IIT, Patna</option>
                                <option className="dropdown-li" value="139">IIT, Roorkee</option>
                                <option className="dropdown-li" value="34">IMS Engineering College (Ghaziabad)</option>
                                <option className="dropdown-li" value="141">Inderprastha Engineering College, Ghaziabad</option>
                                <option className="dropdown-li" value="35">Indian Institute Of Technology (Indian School Of Mines), Dhanbad (Dhanbad)</option>
                                <option className="dropdown-li" value="134">Indira Gandhi Delhi Technical University for Women(IGDTUW), New Delhi</option>
                                <option className="dropdown-li" value="36">Indraprastha Institute Of Information Technology Delhi (New Delhi)</option>
                                <option className="dropdown-li" value="37">Institute Of Engineering &amp; Technology, J.K.Lakshmipat University (Jaipur)</option>
                                <option className="dropdown-li" value="38">Institute Of Technology (Ahmedabad)</option>
                                <option className="dropdown-li" value="142">Jagan Institute of Management Studies, Rohini</option>
                                <option className="dropdown-li" value="42">Jaipur Engineering College And Research Center (Jaipur)</option>
                                <option className="dropdown-li" value="143">Jamia Hamdard University</option>
                                <option className="dropdown-li" value="144">Jamia Milia Islamia</option>
                                <option className="dropdown-li" value="43">Jawaharlal Nehru National College Of Engineering (Shimoga)</option>
                                <option className="dropdown-li" value="145">Jaypee Institute Of Information Technology, Noida</option>
                                <option className="dropdown-li" value="39">J.B. Institute Of Technology (Dehradun)</option>
                                <option className="dropdown-li" value="40">JIS College Of Engineering (Kalyani, West Bengal)</option>
                                <option className="dropdown-li" value="41">JSS Academy Of Technical Education (Bangalore)</option>
                                <option className="dropdown-li" value="146">JSS Academy of Technical Education (Noida)</option>
                                <option className="dropdown-li" value="148">Kasturba Institute Of Technology, Pitampura, New Delhi</option>
                                <option className="dropdown-li" value="46">KIET Group Of Institutions (Ghaziabad)</option>
                                <option className="dropdown-li" value="149">KIIT College of Engineering </option>
                                <option className="dropdown-li" value="47">KLE Dr M.S Sheshgiri College Of Engineering And Technology (Belgaum)</option>
                                <option className="dropdown-li" value="48">KLS Gogte Institute Of Technology (Belagavi)</option>
                                <option className="dropdown-li" value="44">K L University (Guntur)</option>
                                <option className="dropdown-li" value="49">Kongu Engineering College (Erode)</option>
                                <option className="dropdown-li" value="147">K R Mangalam University, Greater Noida</option>
                                <option className="dropdown-li" value="45">K.S.R. College Of Enginnering (Thiruchengode)</option>
                                <option className="dropdown-li" value="50">Kuppam Engineering College (Kuppam)</option>
                                <option className="dropdown-li" value="51">Lakshmi Narain College Of Technology (Bhopal)</option>
                                <option className="dropdown-li" value="170">Lal Bahadur Shastri Institute of Management (LBSIM)</option>
                                <option className="dropdown-li" value="105">LNM Institute of Information Technology, (LNMIIT), Rajasthan</option>
                                <option className="dropdown-li" value="52">Lovely Professional University (Phagwara)</option>
                                <option className="dropdown-li" value="57">Madhav Institute of Technology &amp; Science (Gwalior)</option>
                                <option className="dropdown-li" value="150">Maharaja Agrasen College of Engineering</option>
                                <option className="dropdown-li" value="151">Maharaja Agresen Institute Of Technology</option>
                                <option className="dropdown-li" value="152">Maharaja Surajmal Institute of Technology</option>
                                <option className="dropdown-li" value="58">Maharashtra Institute Of Technology (Aurangabad)</option>
                                <option className="dropdown-li" value="59">Malla Reddy College of Engineering &amp; Technology (Secunderabd)</option>
                                <option className="dropdown-li" value="153">Manav Rachna College of Engineering</option>
                                <option className="dropdown-li" value="60">Manipal Institue Of Technology (Manipal)</option>
                                <option className="dropdown-li" value="154">Mata Sundri College for Women </option>
                                <option className="dropdown-li" value="61">Mepco Schlenk Engineering College (Sivakasi)</option>
                                <option className="dropdown-li" value="155">MERI, New Delhi</option>
                                <option className="dropdown-li" value="56">MIT College Of Engineering (Pune)</option>
                                <option className="dropdown-li" value="54">M.S. Engineering College (Bangalore)</option>
                                <option className="dropdown-li" value="55">M.S. Ramaiah Institute Of Technology (Bangalore)</option>
                                <option className="dropdown-li" value="62">Muffakham Jah College Of Engineering And Technology (Hyderabad)</option>
                                <option className="dropdown-li" value="53">M V J College Of Engineering (Bangalore)</option>
                                <option className="dropdown-li" value="64">National Institute Of Science &amp; Technology (Berhampur)</option>
                                <option className="dropdown-li" value="159">National Institute of Technology, Delhi</option>
                                <option className="dropdown-li" value="180">National Institute of Technology, Goa</option>
                                <option className="dropdown-li" value="156">National Institute of Technology, Kurukshetra</option>
                                <option className="dropdown-li" value="158">National Institute of Technology, Uttarakhand</option>
                                <option className="dropdown-li" value="65" >Netaji Subhas Institute Of Technology (New Delhi)</option>
                                <option className="dropdown-li" value="63">NIT, Karnataka (Mangalore)</option>
                                <option className="dropdown-li" value="172">Noida Institute of Engineering and Technology (NIET)</option>
                                <option className="dropdown-li" value="162">Panipat Institute of Engineering &amp; Technology</option>
                                <option className="dropdown-li" value="161">PEC, Chandigarh</option>
                                <option className="dropdown-li" value="66">P.E.S. College Of Engineering (Mandya)</option>
                                <option className="dropdown-li" value="67">PES University (Bangalore)</option>
                                <option className="dropdown-li" value="69">Pimpri Chinchwad College Of Engineering (Pune)</option>
                                <option className="dropdown-li" value="68">PSG College of Technology (Coimbatore)</option>
                                <option className="dropdown-li" value="181">Punjab Technical University, Kapurthala, Punjab</option>
                                <option className="dropdown-li" value="72">Rajagiri School Of Engineering &amp; Technology (Ernakulam)</option>
                                <option className="dropdown-li" value="73">Rajarambapu Institute Of Technology (Sangli)</option>
                                <option className="dropdown-li" value="163">Raj Kumar Goel Institute of Technology(RKGIT), Ghaziabad</option>
                                <option className="dropdown-li" value="70">R.M.D. Engineering College (Thiruvallur)</option>
                                <option className="dropdown-li" value="71">R.M.K. Engineering College (Kavaripettai)</option>
                                <option className="dropdown-li" value="74">Rungta College Of Engineering And Technology (Bhilai)</option>
                                <option className="dropdown-li" value="75">S.A. Engineering College (Chennai)</option>
                                <option className="dropdown-li" value="80">Sanjivani Rural Education Society&#x27;s College Of Engineering (Ahmednagar)</option>
                                <option className="dropdown-li" value="179">Sathyabama Institute of Science and Technology</option>
                                <option className="dropdown-li" value="76">SCMS School Of Engineering &amp; Technology (Ernakulam)</option>
                                <option className="dropdown-li" value="77">SDM College Of Engineering &amp; Technology (Dharwad)</option>
                                <option className="dropdown-li" value="164">Shaheed Rajguru College of Applied Sciences for Women, Uttar Pradesh</option>
                                <option className="dropdown-li" value="160">Shiv Nadar University</option>
                                <option className="dropdown-li" value="81">Shri Ramdeobaba College Of Engineering And Management (Nagpur)</option>
                                <option className="dropdown-li" value="82">Shri Shankaracharya Technical Campus Bhilai (Bhilai)</option>
                                <option className="dropdown-li" value="83">Shri Vishnu Engineering College For Women (Bhimavaram)</option>
                                <option className="dropdown-li" value="84">Sikkim Manipal Institute Of Technology (Sikkim)</option>
                                <option className="dropdown-li" value="85">Sir M Visvesvaraya Institute Of Technology (Bangalore)</option>
                                <option className="dropdown-li" value="86">Sri Sairam College of Engineering (Bangalore)</option>
                                <option className="dropdown-li" value="87">Sri Sairam Engineering College (Chennai)</option>
                                <option className="dropdown-li" value="88">Sri Sivasubramaniya Nadar College of Engineering (Kalavakkam)</option>
                                <option className="dropdown-li" value="78">SRM Engineering College (Chennai)</option>
                                <option className="dropdown-li" value="79">SVKM&#x27;s NMIMS-Mukesh Patel School Of Technology Management &amp; Engineering (Mumbai)</option>
                                <option className="dropdown-li" value="89">Symbiosis Institute Of Technology (Pune)</option>
                                <option className="dropdown-li" value="171">Thapar Institute of Engineering and Technology</option>
                                <option className="dropdown-li" value="90">Thapar University (Patiala)</option>
                                <option className="dropdown-li" value="91">The National Institute Of Engineering (Mysore)</option>
                                <option className="dropdown-li" value="92">The Northcap University (Gurgaon)</option>
                                <option className="dropdown-li" value="93">Thiagarajar College Of Engineering (Madurai)</option>
                                <option className="dropdown-li" value="165">United College of Engineering and Management, Allahabad</option>
                                <option className="dropdown-li" value="94">University College Of Engineering (Hyderabad)</option>
                                <option className="dropdown-li" value="96">University Institute Of Engineering, Chandigarh University (Chandigarh)</option>
                                <option className="dropdown-li" value="95">University Institute Of Engineering &amp; Technology, Panjab University (Chandigarh)</option>
                                <option className="dropdown-li" value="166">University of Hyderabad, Hyderabad</option>
                                <option className="dropdown-li" value="168"> University School of Information, Communication and Technology (USICT)</option>
                                <option className="dropdown-li" value="167">UPES, Dehradun</option>
                                <option className="dropdown-li" value="98">Veltech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College (Chennai)</option>
                                <option className="dropdown-li" value="99">Vishwakarma Institute of Technology (Pune)</option>
                                <option className="dropdown-li" value="100">Visvesvaraya National Institute Of Technology (Nagpur)</option>
                                <option className="dropdown-li" value="97">VIT University (Vellore)</option>
                                <option className="dropdown-li" value="157">Vivekananda Institute of Professional Studies</option>
                                <option className="dropdown-li" value="169">YMCA University of Science and Technology, Haryana</option>
                                <option className="dropdown-li" value="101">Zakir Husain College Of Engineering &amp; Technology, Aligarh (Aligarh)</option>
                    </select>
                </div>

                <div className="row no-gutters align-items-center justify-content-between detail-row">
                    <div className="label-input col-2">Branch</div>
                    <select name="branchId" className="input-text col-9">
                                <option className="dropdown-li" value="1">---OTHER / NOT LISTED ---</option>
                                <option className="dropdown-li" value="2">(B.Tech/BE) Computers / IT / Software</option>
                                <option className="dropdown-li" value="3">(B.Tech/BE) Electrical / Electronics</option>
                                <option className="dropdown-li" value="4">(B.Tech/BE) Mechanical / Automobile / Aeronautical</option>
                                <option className="dropdown-li" value="5">(B.Tech/BE) Production / Manufacturing</option>
                                <option className="dropdown-li" value="6">(B.Tech/BE) Civil</option>
                                <option className="dropdown-li" value="7">(B.Tech/BE) Chemical / Petroleum / Textile</option>
                                <option className="dropdown-li" value="8">(B.Tech/BE) BioTech / Environmental</option>
                                <option className="dropdown-li" value="9">(B.Tech/BE) Others</option>
                                <option className="dropdown-li" value="10" >(M.Tech/ME) Computers / IT / Software</option>
                                <option className="dropdown-li" value="11">(M.Tech/ME) Electrical / Electronics</option>
                                <option className="dropdown-li" value="12">(M.Tech/ME) Mechanical / Automobile / Aeronautical</option>
                                <option className="dropdown-li" value="13">(M.Tech/ME) Production / Manufacturing</option>
                                <option className="dropdown-li" value="14">(M.Tech/ME) Civil</option>
                                <option className="dropdown-li" value="15">(M.Tech/ME) Chemical / Petroleum / Textile</option>
                                <option className="dropdown-li" value="16">(M.Tech/ME) BioTech / Environmental</option>
                                <option className="dropdown-li" value="17">(M.Tech/ME) Others</option>
                                <option className="dropdown-li" value="18">(BCA)</option>
                                <option className="dropdown-li" value="19">(MCA)</option>
                                <option className="dropdown-li" value="20">(B.Sc/BS) Physics or related</option>
                                <option className="dropdown-li" value="21">(B.Sc/BS) Chemistry or related</option>
                                <option className="dropdown-li" value="22">(B.Sc/BS) Maths or related</option>
                                <option className="dropdown-li" value="23">(M.Sc/MS) Physics or related</option>
                                <option className="dropdown-li" value="24">(M.Sc/MS) Chemistry or related</option>
                                <option className="dropdown-li" value="25">(M.Sc/MS) Maths or related</option>
                                <option className="dropdown-li" value="26">(B.Com/B.Sc) Economics / Finance</option>
                                <option className="dropdown-li" value="27">(M.Com/M.Sc) Economics / Finance</option>
                                <option className="dropdown-li" value="28">(BA)</option>
                                <option className="dropdown-li" value="29">(MA)</option>
                                <option className="dropdown-li" value="30">(Ph.D / M.Phil / Research)</option>
                    </select>
                </div>

                <div className="flex-row justify-content-end button-div">
                    <div className="reset-button">
                        <button type="reset" onclick="Clear()">RESET</button>
                    </div>
                    <div className="btn btn-primary">
                        <button type="submit" onclick="Saved()" >SAVE CHANGES</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
</div>
            </Fragment>
        )
    }
}


export default Profile
