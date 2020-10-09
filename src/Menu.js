import React, {useRef, useState} from 'react';
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
        dropdown:'ar',
        strength:'3'
    });

    const [copySuccess, setCopySuccess] = useState('');


    const textAreaRef = useRef(null);

    const {text,loading,translate,dropdown,strength} = values;

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
                "strength": strength,
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




    const copyToClipboard = (e)=>{
        textAreaRef.current.select();
        document.execCommand('copy');

        e.target.focus();
        setCopySuccess('Copied!');
    }

    const handleClick = (strength)=>{

        setValues({...values,strength: strength})
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
                <h1>إعادة كتابة النص الكامل تلقائيًا
                          إعادة كتابة النص في عربى</h1>
                <div className="drop">
                    <h3>حدد اللغة</h3>
                    <select value={dropdown} onChange={handleChange("dropdown")}  className="custom-select mr-sm-2" >
                        <option value="ar">عربى</option>
                        <option value="en">الإنجليزية</option>

                    </select>

                </div>
                <div className="boxes">
                    <div className="enterText">
                        <h3>
                            إدخال
                        </h3>
                        <textarea
                              dir={dropdown==='en'?'auto':'rtl'}
                                  onChange={handleChange("text")} value={text} id="w3review" name="w3review" rows="20" cols="55"/>
                    </div>
                    <div className="translaterText">
                        <h3>
                            نتيجة
                        </h3>
                        <textarea
                            className="recorrect"
                            readOnly
                            ref={textAreaRef}
                            dir={dropdown==='en'?'auto':'rtl'}
                            onChange={handleChange("translate")} value={translate} id="w3review" name="w3review" rows="20" cols="55"/>
                        <button className="copyTo" onClick={copyToClipboard}>نسخ</button>
                    </div>
                </div>
                <div className="pagination">
                    <text className="div">قوة:
                    </text>
                    <button onClick={()=>handleClick('1')} className="btnn">1</button>
                    <button  onClick={()=>handleClick('2')} className="btnn">2</button>
                    <button   onClick={()=>handleClick('3')} className="btnn">3(موصىبه)</button>
                </div>
                {loading ? loadingMessage():<button type="submit" onClick={onSubmit} className="button button2">اعادة كتابة</button> }

            </div>

            <div className="space">

            </div>

            <div className="more">
                <h1>
                    لماذا هو مجاني؟
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
                    لماذا يمكنني استخدام هذا؟
                </h1>
                <text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid dolorum iusto modi officia quam temporibus voluptate! Aspernatur eveniet laborum maiores quibusdam vero! Ab adipisci at commodi consequuntur, deleniti dolorum earum eos eum eveniet illo itaque, magnam magni maiores nesciunt odit pariatur, quam quasi recusandae rem suscipit. Architecto iure minima non quo recusandae reprehenderit! Architecto culpa et in rem voluptatem?
                </text>

            </div>




        </div>
    );
}

export default Menu;
