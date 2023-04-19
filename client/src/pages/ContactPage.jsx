export default function ContactPage() {
    return (
        <div className="main-contact">
            <div className="contact-content">
                <div className="chat">
                    <h2>Chat to us</h2>
                    <span>Our friendly team is ready to hear you</span>
                    <p>mj'sblog@gmail.com</p>
                </div>
                <div className="visit">
                    <h2>Visit us</h2>
                    <span>Come and say hello to us</span>
                    <p>Mount Pleasant, 8-2-249 to 267, Road No. 3, Banjara Hills, Hyderabad - 500 034, Telangana State, India
                    </p>
                </div>
                <div className="call">
                    <h2>Call us</h2>
                    <span>Mon-Fri from 8am to 5pm</span>
                    <p>+91-6309274038</p>
                </div>
            </div>
            <div className="contact-form">
                <h1>Got Idea's? We've got the skills. Let's team up.</h1>
                <p>Tell us more about yourself and what your'e got in mind</p>
                <form className="contact">
                    Your name<input type="text" />
                    Your Email <input type="email" />
                    Tell us what you would like to contribute
                    <input type="text" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

