import {Image} from '../components/Image';
import MonImage from '../assets/carbon.png';
export const Home = ()=>
<div>
<h1>Home</h1> 
<Image  src={process.env.PUBLIC_URL + '/assets/carbon.png'} alt="" />
<Image link={MonImage} alt="" />
</div>

