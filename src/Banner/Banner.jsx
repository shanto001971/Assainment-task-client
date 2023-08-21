import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    return (
        <AwesomeSlider>  
            <div className='w-full h-full'><img className='w-full h-full' src="https://i.ibb.co/7NbrxN4/001eb6b05fd2e3d4950a3e3eb146edd5.jpg" alt="" /></div>
            <div className='w-full h-full'><img className='w-full h-full' src="https://i.ibb.co/VHj4mLx/f99886a97ba4e7b0aa4d8b33e00b060c.jpg" alt="" /></div>
            <div className='w-full h-full'><img className='w-full h-full' src="https://i.ibb.co/ryxHLSY/istockphoto-1217108207-612x612.jpg" alt="" /></div>
            <div className='w-full h-full'><img className='w-full h-full' src="https://i.ibb.co/4MRv1W9/pngtree-green-fresh-vegetables-and-fruits-fresh-food-taobao-banner-image-172426.jpg" alt="" /></div>
        </AwesomeSlider>
    );
};

export default Banner;