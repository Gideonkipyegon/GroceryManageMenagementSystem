import { FaPhone,FaBookOpen,FaSearchLocation,FaTwitter,FaFacebook,FaWhatsapp,FaInstagram,FaMailBulk,FaLocationArrow,FaHouseUser} from "react-icons/fa";
function Footer() {
    return (
        <div className="footer" >
            <div className="contact" >
                <h4><FaPhone/> Contact Us </h4>
                <p><FaMailBulk/>: gideonkipyegon837 @gmail.com </p>
                <p> <FaWhatsapp/>: 0715190447/0783668915 </p> 
                </div>
            <div className="contact" >
                <h4><FaSearchLocation/>Location </h4>
                <p><FaLocationArrow/> :Ngong Road </p>
                <p><FaHouseUser/> :Wang 'ombe Building 3rd Floor</p>
            </div> <div className="contact" >
                <h4><FaBookOpen/>About Us </h4>
                <p> We are deal with quality grocery products </p> 
            </div>
            <div className="contact" >
                <h4><FaBookOpen/>Follow Us</h4>
                <p><FaInstagram/>:@YegGrocery1 </p> 
                <p><FaTwitter/>:@YegGrocery254</p> 
                <p><FaFacebook/>:@YegGroceryProducts</p> 
            </div>
            </div> 
        
    )
}
export default Footer