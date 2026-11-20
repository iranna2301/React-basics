import { useContext } from "react"
import UserContext from "../Context/UserContex"

function Profile() {
  const {User} = useContext(UserContext)

  if(!User) return <div>"please login"</div>

  return <div>Welcome {User.Username}</div>
}

export default Profile