
export default function Footer() {
  return (
    <div className='min-h-[120x]  bottom-0 container mx-auto flex flex-col md:flex-row  justify-between items-center bg-black space-y-2 p-2 shadow-2xl'>
        <span className='font-bold text-3xl text-white'>
    Khane<span className="text-orange-500">Wala.com</span>
        </span>
        <span className='text-lg text-white'>
    Made with 💻  By  <span className='font-medium text-xl text-orange-500'>Abhishek Verma.</span>
        </span>
        <div className='flex flex-col text-white gap-2 text-base'>
        <span>Terms & Conditions Apply</span>
        <span>Privacy @ Rights Reserved</span>
        </div>
      
    </div>
  )
}
