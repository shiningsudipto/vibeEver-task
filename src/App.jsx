import "./App.css";
import rightSideImg from "../src/assets/signin-right-img.png";
import vibeEverLogo from "../src/assets/vibeEver.png";
import { FaGoogle, FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-row bg-white py-12 px-24 h-screen">
      <div className="lg:w-[50%] py-20 px-24">
        <img src={vibeEverLogo} alt="" />
        <div className="py-24">
          <h1 className="text-primary font-extrabold text-5xl">
            SIGN <span className="text-black">IN</span>
          </h1>
          <p className="mt-5 text-xl text-primary-100">
            Already have an account? Get into your account by providing the
            account credentials.
          </p>
          <div className="py-8 flex flex-col space-y-5">
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <div className="relative w-full">
              <input
                type="text"
                id="username"
                placeholder="Email"
                className="peer w-full h-[78px] border-2 border-gray-300 rounded-full px-6 pt-2 pb-2 text-xl text-gray-900 placeholder-gray-400 focus:placeholder-opacity-100 placeholder-opacity-0  focus:outline-none focus:border-blue-500"
              />
              <label
                htmlFor="username"
                className="absolute left-3 top-3 text-xl text-gray-500 bg-white px-1 transition-all duration-200
        peer-placeholder-shown:top-6 peer-placeholder-shown:text-xl
        peer-focus:-top-3 peer-focus:text-xl peer-focus:text-blue-500 peer-focus:px-3 peer-focus:left-8"
              >
                Username
              </label>
            </div>
            <a href="">Forget Password</a>
            <button className="bg-primary h-[78px] text-white rounded-[50px] text-lg font-semibold">
              SIGN IN
            </button>
            <div>
              <p className="text-center mb-4 text-lg text-primary-100">
                or continue with
              </p>
              <div className="flex items-center justify-center gap-6">
                <button className="border p-3 rounded-full cursor-pointer">
                  <FaGoogle className="size-[30px]" />
                </button>
                <button className="border p-3 rounded-full cursor-pointer">
                  <FaGithub className="size-[30px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="lg:w-[50%] rounded-[25px] bg-cover bg-center"
        style={{ backgroundImage: `url(${rightSideImg})` }}
      >
        <div>
          {/* <img src={rightSideImg} alt="" className="h-fit w-full" /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
