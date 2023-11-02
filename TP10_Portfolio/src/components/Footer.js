
import '../style.css'
import {ContactUs} from './Contact'
import {Socialicons} from "../components/SocialIcons"

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <Socialicons />
                <ContactUs />
            </div>            
        </>
    );
}
