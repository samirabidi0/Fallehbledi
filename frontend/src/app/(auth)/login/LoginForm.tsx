import GetUser from './LoginAction'

const LoginForm = () => {
    
  return (
    <div className="py-6 space-y-4 md:space-y-6   sm:p-8  md:ml-[34rem]  " >
              <h1 className="text-xl font-bold  text-gray-900  mt-28 ">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action={GetUser}>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5 " placeholder="name@exemple.com" />
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5  " />
                  </div>
                  <div className="flex items-center justify-center">
                      <a href="#" className="text-sm font-medium text-gray-900 text-center">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-[#058f1a] font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                  <p className="text-sm font-medium text-gray-900 text-center">
                      Don’t have an account yet? <a href="#" className="font-medium text-[#058f1a] ">Sign up</a>
                  </p>
              </form>
          </div>
  )
}

export default LoginForm