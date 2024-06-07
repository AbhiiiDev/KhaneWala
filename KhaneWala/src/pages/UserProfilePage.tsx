import { UpdateUserRequeset } from '@/api/MyUserApi'
import UserProfileForm from '@/user-profile-form/UserProfileForm';

export default function UserProfilePage() {

const {updatedUser,isLoading:isUpdateLoading}=UpdateUserRequeset();


  return (
      <UserProfileForm isLoading={isUpdateLoading} onSave={updatedUser}/>
  )
}
