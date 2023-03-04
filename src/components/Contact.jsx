import github from "../../public/icons/github_icon.png";
import twitter from "../../public/icons/twitter.png";
import mail from "../../public/icons/mail.png";

function Contact() {

    return (
        <div id="contact" className="w-full h-screen bg-thunder-500">
            <div className="h-4/6 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-center py-14 text-fuel-yellow-main">Pour me contacter, vous
                    pouvez utiliser un de ces
                    <span className="text-monza-main"> liens</span>
                </h1>
                <div className="flex flex-row space-x-14 justify-center">
                    <img src={github} alt="Moi" width="200" height="200" className="rounded-full"/>
                    <img src={twitter} alt="Moi" width="200" height="200" className="rounded-full"/>
                    <img src={mail} alt="Moi" width="200" height="200" className="rounded-full"/>
                </div>
            </div>
        </div>
    );
}

export default Contact;