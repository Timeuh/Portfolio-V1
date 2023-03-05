import {useState} from "react";

function ContactLink({contact}) {

    const [isHover, setIsHover] = useState(false);

    const handleEnter = () => {
        setIsHover(true);
    }

    const handleLeave = () => {
        setIsHover(false);
    }

    return (
        <a href={contact.link} className="relative">
            <div className="contact-link"
                 onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                {isHover ? contact.tooltip : ""}
            </div>
            <img src={contact.icon} alt={contact.tooltip} width="200" height="200" className="rounded-full"/>
        </a>
    );
}

export default ContactLink;