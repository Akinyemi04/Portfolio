import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <div className='contact-me'>
      <a href="mailto:{gabrielayoku@gmail.com}?subject={subject}&body={content}"><AlternateEmailIcon className='contact-icon'
      style={{color:'rgb(46, 66, 62)'}}/>
      <p>Email</p>
      </a>
      <a href="tel:{+2348039827644}"><PhoneIphoneIcon className='contact-icon' style={{color:'black'}}/>
        <p>Phone number</p>
      </a>
      <a href="https://github.com/Akinyemi04?tab=repositories"><GitHubIcon className='contact-icon' style={{color:'black'}}/>
      <p>Github</p>
      </a>
      <a href="sms:{+2348039827644}?body={content}">
        <MailOutlineIcon className='contact-icon' style={{color:'rgb(204, 185, 173)'}}/>
        <p>Sms</p>
      </a>
      <a href="https://twitter.com/alphamhale/">
      <TwitterIcon className='contact-icon' style={{color:'rgb(9,77,214)'}}/>
      <p>Twitter</p>
      </a>
      <a href="https://www.instagram.com/alpha_mhalee">
        <InstagramIcon className='contact-icon instagram'/>
        <p>Instagram</p>
        </a>

    </div>
  )
}

export default Contact;