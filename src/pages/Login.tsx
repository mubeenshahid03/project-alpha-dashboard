import Input from "../components/Input";
import dr_img from "../assets/login/dr_img.png";
function Login() {
  return (
    <div className="h-auto lg:h-[100vh] w-[100%] flex flex-col-reverse lg:flex-row ">
      <div className="h-[auto] mt-16 lg:mt-0 relative w-[100%] lg:w-[50%]">
        <img src={dr_img} className="w-full h-full object-cover" />
      </div>
      <div className="w-[100%] lg:w-[50%] flex items-center justify-center">
        <div className="h-auto w-[90%] md:w-[80%]">
          {/* for header */}
          <div>
            <h1 className="font-semibold text-[52px] leading-h2_lh tracking-[-2px] text-medium_gray">
              Login to your account
            </h1>
            <p className="font-normal mt-[15px] md:mt-[27px] mb-[40px] md:mb-[72px] text-p_size  md:text-h3_size text-p_color lg:w-[462px]">
              Enter details to login to your account to get details of patients
            </p>
          </div>
          <div className="space-y-4">
            <Input
              label="Email address"
              placeholder="Your email"
              value="mubeen@gmail.com"
              name="email"
            />
            <Input
              label="Password"
              placeholder="Your password"
              value="123"
              name="password"
              type="password"
            />
          </div>
          {/* checkbox container */}
          <div className="flex items-center my-[30px] justify-between">
            <div className="flex items-center w-fit">
              <input
                defaultChecked={true}
                type="checkbox"
                defaultValue=""
                className="h-4 w-4  md:h-5 md:w-5
             focus:ring-0 focus:ring-offset-0 accent-green_600
             border-gray-300 border-2 cursor-pointer"
              />
              <label className="font-[500] ms-3 text-[16px] leading-6 text-medium_gray">
                Remember me
              </label>
            </div>

            <p className="font-[500] text-[16px] leading-6 text-green_600">
              Forgot password?
            </p>
          </div>
          <button
            type="submit"
            className="font-semibold text-base text-white leading-6 w-full  py-[10px]  rounded-[9px] bg-green_600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
