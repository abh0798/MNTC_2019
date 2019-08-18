import './css/contactus.css';
import React,{ Component } from 'react';
import videoSrc from "../static/videos/video.mp4";
import contact from "../static/images/contact.svg";

class ContactUs extends Component{
    
    render(){
        let postHolders=[
            {
                'name':'Piyush Jain',
                'post':'President',
                'email':'pj.16U10172@btech.nitdgp.ac.in',
                'phone':'8603598657',
                'src':'piyush',
                'fb' : 'https://www.facebook.com/profile.php?id=100005207954302'
            },
            {
                'name':'Subranshu Mohanty',
                'post':'General Secretary',
                'email':'smohanty1898@gmail.com',
                'phone':'9668401115',
                'src':'subhranshu',
                'fb': 'https://www.facebook.com/profile.php?id=100011772971308',
            },
            {
                'name':'Hariharan Prakash',
                'post':'Convenor',
                'email':'prakashhariharan4@gmail.com',
                'phone':'9940527340 ',
                'src':'hariharan',
                'fb' : 'https://www.facebook.com/prakash.hariharan.7'
            },
            {
                'name':'Satantra Tewari',
                'post':'Treasurer',
                'email':'satantra1508@gmail.com',
                'phone':'8944921556',
                'src':'satantra',
                'fb' :'https://www.facebook.com/satantra.tewari'
            }
        ]
        return (
            <div className="site-body">
                <h1> Get in touch with us </h1>
                <hr/>
                <div className="contact-page">   
                    <div className="contact-col">
                        <div className="contactcard-holders">
                            {postHolders.map((item,index)=>(
                                <div className="contactcard">
                                    <div className='contactphoto'>
                                        <img src={"assets/team/" + item.src + ".jpg"}/>
                                    </div>
                                    <div className='contactinfo'>
                                        <p>{item.name}</p>
                                        <p className="post">{item.post}</p>
                                        <p>{item.phone}</p>
                                        <p>{item.email}</p>
                                    </div>
                                    <div className="contactlink">
                                        <a href={item.fb}><i className="fa fa-facebook-square" aria-hidden="true" style={{"fontSize":"28px","padding":"5px"}}></i></a>
                                        <a href=""><i className="fa fa-google-plus-square" aria-hidden="true" style={{"fontSize":"28px","padding":"5px"}}></i></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="contact-col">
                        <div className="contact-col-img">
                                <img src={contact} />
                        </div>
                        <p>Like our facebook page to stay updated</p>
                        <br/>
                        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fmathsntechclub%2F&width=152&layout=button_count&action=like&size=large&show_faces=true&share=true&height=46&appId" width="152" height="46" style={{"border":"none", "overflow":"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </div>
            </div> 
        )
    }
}

export default ContactUs;