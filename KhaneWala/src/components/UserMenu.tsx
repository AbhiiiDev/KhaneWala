import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
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
    <DropdownMenuTrigger className="flex gap-1">
<CircleUserRound className="text-black"/>
{user?.given_name}
    </DropdownMenuTrigger>
    <DropdownMenuContent>
    <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-orange-500">
            User Profile
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
