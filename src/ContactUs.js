import React from 'react';
import './contactus.css'
import Header from "./Header";



function Contact() {
    return (
        <div className="contact">
            <Header/>

            <section id="contact">
                <div className="contact-form bg-primary p-2">
                    <h2 className="m-heading">اتصل بنا</h2>
                    <p>من فضلك استخدم الفورمه فى الاسفل للإتصال بنا</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">اسم</label>
                            <input type="text" name="name" id="name" placeholder="أدخل الاسم"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">البريد الإلكتروني</label>
                            <input type="email" name="email" id="email" placeholder="أدخل البريد الإلكتروني"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">رقم الهاتف</label>
                            <input type="text" name="phone" id="phone" placeholder="أدخل رقم الهاتف"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">رسالة</label>
                            <textarea name="message" id="message" placeholder="أدخل رسالة"></textarea>
                        </div>
                        <input type="submit" value="إرسال" className="btn"/>
                    </form>
                </div>

            </section>



        </div>
    );
}

export default Contact;
