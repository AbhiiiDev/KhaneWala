import HeroImage from '../assets/HeroImage.jpg'

const  HeroSection = () => {
  return (
    <div>
      <img src={HeroImage} alt="" className='w-full h-screen bg-cover bg-center max-h-[600px] object-cover' />
    </div>
  )
}


export default HeroSection;
