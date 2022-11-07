import Email from '../assets/email logo.jpg'
import Git from '../assets/github.jpg'
import Linked from '../assets/linkedin.jpg'
import Resume from '../assets/resume.jpg'

export default function Footer () {
    return (
        <footer class='footer'>
            <ul>
                <li>
                    <a href='https://github.com/aescobar73'>
                        <img src={Git} alt='Git Icon' height={60} width={75} />
                    </a>
                </li>

                <li>
                    <a href="mailto: consejero73@gmail.com">
                        <img src={Email} alt="Email Icon" height={60} width={75}/>
                    </a>
                </li>

                <li>
                    <a href='https://www.linkedin.com/feed/?trk=homepage-basic_signin-form_submit' target="_blank" rel='noreferrer'>
                        <img src={Linked} alt='LinkedIn Logo' height={60} width={75}/>
                    </a>
                </li>

                <li>
                    <a href='https://drive.google.com/uc?export=download&id=1cmE1kbYb67Bcf8mUQJ42hqlZRQ6uYgFv' target="_blank" rel='noreferrer'>
                        <img src={Resume} alt='Resume Logo' height={60} width={75}/>
                    </a>
                </li>

                
            </ul>
        </footer>
    )
}