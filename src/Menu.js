import React, {useState} from 'react';
import './menu.css'
import axios from 'axios'
import logo from './image/images.png'
import ad from './image/ad.jpg'
require('dotenv').config()


function Menu() {

    const [values,setValues] = useState({
        text:'',
        translate:'',
        loading:false,
        error:'',
        dropdown:'en',
    });

    const {text,loading,translate,dropdown} = values;

    const onSubmit=(event)=>{
        event.preventDefault();
        setValues({...values,loading: true});
        axios("https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite", {
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                "content-type": "application/json",
                "accept": "application/json"
            },
            "data": {
                "language":  `${dropdown}`,  //"en", //'ar'
                "strength": 3,
                "text": `${text}`
            }
        })
            .then(response => {
                setValues({
                    ...values,
                    translate: response.data.rewrite,
                    loading: false

                })
            })
            .catch(err => {
                console.log(err);
            })


    }

    const loadingMessage=()=>{
        return(

            loading ?  <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> : ''

        )
    }

    const handleChange = name => event => {
        const value = event.target.value;
         setValues({ ...values,[name]: value});
    };

    return (
        <div className="menu">

            <div className="ads">
                <img src={logo} className="img-fluid BrandLogo" alt="" />
            </div>
            <div className="ads2">
                <img src={ad} className="img-fluid BrandLogo" alt="" />
            </div>


            <div className="content">
                <h1>Automatically rewrite the full text</h1>
                <div className="drop">
                    <h3>Select the Language</h3>
                    <select value={dropdown} onChange={handleChange("dropdown")}  className="custom-select mr-sm-2" >
                        <option value="en">English</option>
                        <option value="ar">Arab</option>
                    </select>

                </div>
                <div className="boxes">
                    <div className="enterText">
                        <h3>
                            Enter Your Text Here
                        </h3>
                        <textarea onChange={handleChange("text")} value={text} id="w3review" name="w3review" rows="20" cols="55"/>
                    </div>
                    <div className="translaterText">
                        <h3>
                            Correct Sentence
                        </h3>
                        <textarea onChange={handleChange("translate")} value={translate} id="w3review" name="w3review" rows="20" cols="55"/>
                    </div>
                </div>
                {loading ? loadingMessage():<button type="submit" onClick={onSubmit} className="button button2">REWRITE</button> }

            </div>

            <div className="space">

            </div>

            <div className="more">
                <h1>
                    Why is it free?
                </h1>
                <text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis harum maiores perspiciatis quas.
                    Aliquam beatae fugit, ipsum quam rem tempora totam?
                    Consequatur dolore doloremque eos ipsum iure nisi, reiciendis rerum.
                </text>
            </div>

            <div className="more-2">
                <h1>
                    What can I use this for?
                </h1>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                </table>

            </div>




        </div>
    );
}

export default Menu;
