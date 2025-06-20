import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { CircleUserRound } from "lucide-react";
  import { useAuth0 } from "@auth0/auth0-react";
  import { Link } from "react-router-dom";
  import { Button } from "./ui/button";
  


export default function UserMenu() {

    const { user, logout } = useAuth0();

  return (
  <DropdownMenu>
    <DropdownMenuTrigger className="flex gap-1 hover:text-orange-700">
<CircleUserRound className=" text-orange-400"/>
 <p className=" text-orange-400">{user?.name}</p>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
    <DropdownMenuItem>
          <Link to="/userProfile" className="font-bold text-orange-500 hover:bg-orange-200">
            User Profile
          </Link>
        </DropdownMenuItem>
    <DropdownMenuItem>
          <Link to="/manageRestaurant" className="font-bold text-orange-500 hover:bg-orange-200">
           Manange Restaurant
          </Link>
        </DropdownMenuItem>
    <DropdownMenuItem>
          <Link to="/orders" className="font-bold text-orange-500 hover:bg-orange-200">
           Orders
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold bg-orange-500"
          >
            Log Out
            </Button>
            </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
