import React,{ Component } from 'react';
import AOS from 'aos';
import './css/body.css';
import './css/team.css';


class Team extends Component {
    constructor(props){
        super(props);
        this.state = { 
            active_menu: 'fourth'
        }
    }
    componentWillMount() {
        this.menu = [
            {
                'name': "Office Bearers",
                'value': "fourth"
            },
            {
                'name': "Senior Fest Coordinators",
                'value': "third"
            },
            {
                'name': "Junior Fest Coordinators",
                'value': "second"
            }
        ]
    }
    render(){
        let members=[
            {
                'name':'Piyush Jain',
                'src': 'piyush',
                'post': 'President', 
                'year': 'fourth'
            },
            {
                'name':'Subhranshu Mohanty',
                'src': 'subhranshu',
                'post': 'General Secretary',
                'year': 'fourth'
            },
            {
                'name':'Satantra Tewari',
                'src': 'satantra',
                'post': 'Treasurer',
                'year': 'fourth'
            },
            {
                'name':'Hariharan Prakash',
                'src': 'hariharan',
                'post': 'Convener',
                'year': 'fourth'
            },
            {
                'name':'Dishant Bole',
                'src': 'dishant',
                'post': 'Vice President',
                'year': 'fourth'
            },
            {
                'name':'Shankar Ray',
                'src': 'shankar',
                'post': 'Asst. General Secretary',
                'year': 'fourth'
            },
            {
                'name':'Samriddhi Gupta',
                'src': 'samriddhi',
                'post': 'Co-Convener',
                'year': 'fourth'
            },
            {
                'name':'Sayanti Dey',
                'src': 'sayanti',
                'post': 'Ankshala Head',
                'year': 'fourth'
            },
            {
                'name':'Vijaya Bhuvanagiri',
                'src': 'vijaya',
                'post': 'Public Relations Head',
                'year': 'fourth'
            },
            {
                'name':'Geeta Madhuri',
                'src': 'geeta',
                'post': 'R & D Head',
                'year': 'fourth'
            },
            {
                'name':'Tamal Choudhury',
                'src': 'tamal',
                'post': 'R & D Head',
                'year': 'fourth'
            },
            {
                'name':'Souman Pani',
                'src': 'souman',
                'post': 'Sponshorship Head',
                'year': 'fourth'
            },
             {
                'name':'Nikhil Murarka',
                'src': 'nikhil',
                'post': 'Publicity Head',
                'year': 'fourth'
            },
             {
                'name':'Brijesh',
                'src': 'brijesh',
                'post':'Workshop Head',
                'year': 'fourth'
            },
           {
                'name':'Adrish Bir',
                'src': 'adrish',
                'post':'Tech Head',
                'year': 'fourth'
            },
            {
                'name':'Avinash Boppudi',
                'src': 'avinash',
                'post':'Web-D Head',
                'year': 'fourth'
            },
             {
                'name':'Tanmoy Ghosh',
                'src': 'tanmoy',
                'post':'Creative Head',                
                'year': 'fourth'
            },
            {
                'name':'Abhas Gorain',
                'src': 'abhas',
                'post':'Creative Head', 
                'year': 'fourth'
            },
            {
                'name':'Aadarsh Shaw',
                'src': 'aadarsh',
                'year': 'third'
            },
            {
                'name':'Abhinav Prakash',
                'src': 'abhinav',
                'year': 'third'
            },
            {
                'name':'Ambica Agarwal',
                'src': 'ambica',
                'year': 'third'
            },
            {
                'name':'Anshul Chouhan',
                'src': 'anshul',
                'year': 'third'
            },
            {
                'name':'Arpan Saha',
                'src': 'arpan',
                'year': 'third'
            },
            {
                'name':'B Padmini',
                'src': 'padmini',
                'year': 'third'
            },
            {
                'name':'G.Bhanu Teja',
                'src': 'gbhanu',
                'year': 'third'
            },
            {
                'name':'Jayant Mishra',
                'src': 'jayant',
                'year': 'third'
            },
            {
                'name':'Koushik Ghosh',
                'src': 'koushik',
                'year': 'third'
            },
            {
                'name':'Manish Awasthi',
                'src': 'manish',
                'year': 'third'
            },
            {
                'name':'Manisha Bhosley',
                'src': 'manisha',
                'year': 'third'
            },
            {
                'name':'Prachi Sharma',
                'src': 'prachi',
                'year': 'third'
            },
            {
                'name':'Riddhiman Sanyal',
                'src': 'riddhiman',
                'year': 'third'
            },
            {
                'name':'Rishav Dutta',
                'src': 'rishav',
                'year': 'third'
            },
            {
                'name':'Saddam Ansari',
                'src': 'saddam',
                'year': 'third'
            },
            {
                'name':'Sai Kotesh K',
                'src': 'kotesh',
                'year': 'third'
            },
            {
                'name':'Sangram Mukherjee',
                'src': 'sangram',
                'year': 'third'
            },
            {
                'name':'Shamik Choudhury',
                'src': 'shamik',
                'year': 'third'
            },
            {
                'name':'S.K. Praliya',
                'src': 'praliya',
                'year': 'third'
            },
            {
                'name':'Washim Raza',
                'src': 'washim',
                'year': 'third'
            },
            {
                'name':'Abhirup',
                'src': 'abhirup',
                'year': 'second'
            },
            {
                'name':'Ankan Chakraborty',
                'src': 'ankan',
                'year': 'second'
            },
            {
                'name':'Ankita Bhattacharya',
                'src': 'ankita',
                'year': 'second'
            },
            {
                'name':'Anto Pratik',
                'src': 'anto',
                'year': 'second'
            },
            {
                'name':'Ashwini Gupta',
                'src': 'ashwini',
                'year': 'second'
            },
            {
                'name':'Bhignesh Mohanty',
                'src': 'bhignesh',
                'year': 'second'
            },
            {
                'name':'Geeta',
                'src': 'gita',
                'year': 'second'
            },
            {
                'name':'Harshit Shrinit',
                'src': 'harshit',
                'year': 'second'
            },
            {
                'name':'Piyush Kumar Dwivedi',
                'src': 'piyushj',
                'year': 'second'
            },
            {
                'name':'Rabin Mondal',
                'src': 'rabin',
                'year': 'second'
            },
            {
                'name':'Rishabh Vogata',
                'src': 'rishavj',
                'year': 'second'
            },
            {
                'name':'Sayantan Maity',
                'src': 'sayantan',
                'year': 'second'
            },
            {
                'name':'Sharbashis Das',
                'src': 'sharbashis',
                'year': 'second'
            },
            {
                'name':'Shraddha Majumdar',
                'src': 'shraddha',
                'year': 'second'
            },
            {
                'name':'Snehit Mishra',
                'src': 'snehit',
                'year': 'second'
            },
            {
                'name':'Subhankar',
                'src': 'subhankar',
                'year': 'second'
            },
            {
                'name':'Sweta Rackecha',
                'src': 'sweta',
                'year': 'second'
            }
        ]
        AOS.init({
            duration : 2000
        });
        return(
            <div className='site-body'>
                <h1>Our Team</h1>
                <hr/>
                <br/>
                <p className="quote">"Alone we can do so little, together we can do so much."</p>
                <ul className="team-toggle">
                        {this.menu.map((menu, index) => (
                            <li className={ (menu.value === this.state.active_menu) ? "active" : null}>
                                <a href="#" onClick={(e) => { e.preventDefault(); this.setState({ active_menu: menu.value }) }}>{menu.name}</a>
                            </li>
                        ))}
                    </ul>
                 <div className='card_holder'>
                    {
                        members.map((item, index) =>(
                            <div  className={(this.state.active_menu === item.year )?"member-card":"inactive-member-card"} key={index}>
                                <div className='card-image'>
                                    <img src={"assets/team/" + item.src + ".jpg"} />
                                </div>
                                <div className="card-info">
                                    <h1>{item.name}</h1>
                                    <p>{item.post}</p>
                                </div>
                               
                                <div class="gradient-overlay"></div>
                                <div class="color-overlay"></div>       
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Team;