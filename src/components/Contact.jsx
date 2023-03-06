import ContactLink from "./contact/ContactLink.jsx";
import {contactLinks} from "../services/ContactData.js";

function Contact() {

    return (
        <div id="contact" className="w-full h-screen bg-thunder-500 flex flex-col justify-center">
            <div className="h-4/6 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-center py-14 text-fuel-yellow-main px-4">Pour me contacter, vous
                    pouvez utiliser un de ces
                    <span className="text-monza-main"> liens</span>
                </h1>
                <div className="flex flex-row 2xl:space-x-14 justify-center">
                    <ContactLink contact={contactLinks.github}/>
                    <ContactLink contact={contactLinks.linkedin}/>
                    <ContactLink contact={contactLinks.mail}/>
                </div>
            </div>
        </div>
    );
}

export default Contact;