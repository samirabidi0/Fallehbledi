
import {cookies} from 'next/headers'

const page = () => {
  const GetUser =cookies().get("Authorization")
  const user = GetUser !== undefined ? GetUser.value : null;
  
  return (
    <div className="">
    </div>

  )
}

export default page