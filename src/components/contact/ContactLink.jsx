function ContactLink({contact}) {

    return (
        <a href={contact.link}>
            <img src={contact.icon} alt={contact.tooltip} width="200" height="200" className="rounded-full"/>
        </a>
    );
}

export default ContactLink;