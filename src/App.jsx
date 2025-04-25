import "./App.css";
import rightSideImg from "../src/assets/evervibe.jpg";
import vibeEverLogo from "../src/assets/vibeEver.png";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { useState } from "react";

function App() {
  const [isVisible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const isPassActive = password.length > 0;
  const isEmailActive = email.length > 0;
  return (
    <div className="lg:p-10 md:p-8 p-4 bg-gray-100 lg:h-screen">
      <div className="flex lg:flex-row flex-col 2xl:gap-24 xl:gap-14 gap-5 bg-white rounded-[25px] 2xl:py-12 xl:py-8 2xl:px-24 xl:px-14 px-5 py-5 h-full">
        <div className="lg:w-[50%] flex flex-col justify-between">
          {/* logo */}
          <img src={vibeEverLogo} alt="" className="h-8 w-[154px]" />
          <div>
            <h1 className="text-primary font-extrabold text-5xl">
              SIGN <span className="text-dark">IN</span>
            </h1>
            <p className="mt-5 text-xl text-dark-100">
              Already have an account? Get into your account by providing the
              account credentials.
            </p>
            <div className="pt-8 flex flex-col space-y-5">
              <div className="relative w-full">
                <input
                  autoComplete="off"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  className={`peer w-full h-[60px] border-2 border-dark-50 rounded-full px-6 pt-2 pb-2 text-xl text-gray-900 placeholder-gray-400 focus:placeholder-opacity-100 placeholder-opacity-0  focus:outline-none focus:border-primary bg-bg focus-visible:border-2 focus-visible:border-primary ${
                    isEmailActive && "border-2 border-primary"
                  }`}
                />
                <label
                  htmlFor="email"
                  className="absolute left-6 -top-4 text-xl text-gray-500 bg-white px-3 transition-all duration-200
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl
        peer-focus:-top-4 peer-focus:text-xl peer-focus:text-primary peer-focus:px-3 peer-focus:left-8"
                >
                  Email Address
                </label>
              </div>
              <div className="relative w-full">
                <input
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  type={isVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  className={`peer w-full h-[60px] border-2 border-dark-50 rounded-full px-6 pt-2 pb-2 text-xl text-gray-900 placeholder-gray-400 focus:placeholder-opacity-100 placeholder-opacity-0  focus:outline-none focus:border-primary bg-white focus-visible:border-2 focus-visible:border-primary ${
                    isPassActive && "border-2 border-primary"
                  }`}
                />
                <label
                  htmlFor="password"
                  className="absolute left-6 -top-4 text-xl text-gray-500 bg-white px-3 transition-all duration-200
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl
        peer-focus:-top-4 peer-focus:text-xl peer-focus:text-primary peer-focus:px-3 peer-focus:left-8 "
                >
                  Password
                </label>
                <button
                  onClick={() => setVisible(!isVisible)}
                  className="border border-dark-50 hover:border-primary p-2 rounded-full cursor-pointer absolute top-2 right-2 text-dark-200 hover:text-primary"
                >
                  {isVisible ? (
                    <IoMdEye className="size-[26px]" />
                  ) : (
                    <IoMdEyeOff className="size-[26px]" />
                  )}
                </button>
              </div>
              <a
                href="#"
                className="text-end text-primary-200 hover:text-primary text-lg font-semibold"
              >
                Forget Password?
              </a>
              <button className="bg-primary-100 border-2 border-primary hover:bg-primary h-[60px] text-white rounded-[50px] text-lg font-semibold">
                SIGN IN
              </button>
              <div>
                <p className="text-center mb-4 text-lg text-dark-100">
                  or continue with
                </p>
                <div className="flex items-center justify-center gap-6">
                  <button className="border border-dark-50 hover:border-primary hover:text-primary text-dark-200 p-2 rounded-full cursor-pointer">
                    <FaGoogle className="size-[26px]" />
                  </button>
                  <button className="border border-dark-50 hover:border-primary hover:text-primary text-dark-200 p-2 rounded-full cursor-pointer">
                    <FaGithub className="size-[26px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-dark-100 text-center">
            Don’t Have an Account?{" "}
            <span className="text-primary-200 hover:text-primary font-semibold">
              Sign Up Now
            </span>
          </p>
        </div>
        <div
          className="lg:w-[50%] rounded-[25px] bg-cover bg-center"
          // style={{ backgroundImage: `url(${rightSideImg})` }}
        >
          <div className="h-[100%] relative">
            <img
              src={rightSideImg}
              alt=""
              className="lg:h-full h-[500px] w-full object-cover rounded-[25px]"
            />
            <h1 className="absolute right-5 bottom-10 font-bold lg:text-4xl text-3xl text-white leading-[60px] text-end">
              The Creative Marketplace for <br className="lg:block hidden" />
              <span className="bg-primary px-3 py-1 rounded-[15px]">
                Designers & Brands
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
