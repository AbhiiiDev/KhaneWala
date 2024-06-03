
import {Sheet,SheetDescription,SheetHeader,SheetTitle,SheetTrigger,SheetContent} from '@/components/ui/sheet'
import { Button } from './ui/button'

const MobileNav = () => {
  return (
<Sheet>
  <SheetTrigger>
  <svg
            className="w-6 h-6 text-black hover:text-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='text-lg font-bold'>Welcome! to KhaneWala</SheetTitle>

      <SheetDescription>
       <Button className='flex-1'>
        LogIn
       </Button>
       <Button>
        SignUp
       </Button>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

export default MobileNav
