import Image from 'next/image'
import ImageBg from '../../../../public/image/Farmer-amico.png'
import SignupForm from './signupForm';
const Signup = () => {
  
  return (
    <div className="max-w-6xl mx-auto p-6 grid lg:grid-cols-2 gap-8  justify-center">
      <div className=" mt-28 flex flex-col items-center text-center space-y-5">
        <h2 className="text-2xl font-bold text-gray-900">Signup with <span className="text-[#058f1a]">Falleh Bledy</span></h2>
        <h5 className="text-xl font-semibold text-gray-900">The discovery of agriculture was the first big step toward a civilized life. </h5>
      <Image src={ImageBg} alt='' width={300} ></Image>
      </div>
    <SignupForm/>
    </div>
  );
};

export default Signup;
