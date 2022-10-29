import './Profile.css';
import dp from '../images/dp.jpg';

function Profile() {
    return (
        <div>
            <img src={dp} className='profile_img' alt='dp' />
            <h1 className='name'>Emmanuel Akinbo</h1>
        </div>
    );
}

export default Profile;