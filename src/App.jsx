import { motion } from "framer-motion";
export default function App() {
  return (
    <main className="bg-[#84C7AE] h-screen w-full flex justify-center items-center">
      <div className="w-[455px]  h-[455px]  bg-[#F6FBF9] p-10 rounded-3xl  text-center leading-normal	 relative	 ">
        <motion.section
          initial={{ scale: 0 }}
          animate={{ rotate: 45, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="w-[320px] h-[320px] absolute	 top-[-160.27px] left-[-218px] bg-[#C1E3D6] opacity-50 rotate-45  rounded-3xl		"
        ></motion.section>
        <motion.section
          initial={{ scale: 0 }}
          animate={{ rotate: 45, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="w-[320px] h-[320px] absolute	 bottom-[-160.27px] right-[-318px] bg-[#C1E3D6] opacity-50 rotate-45  rounded-3xl		"
        ></motion.section>
        <h1 className=" font-bold		text-3xl	">Create An Account</h1>
        <p className="w-[308] p-5">
          Create an account to enjoy all the services without any ads for free!
        </p>
        <motion.section></motion.section>
        <form
          action=""
          className=" flex flex-col gap-7 	"
        >
          <input
            className="p-2 h-14		rounded-xl	bg-[#FFFFFF]	"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <input
            className="p-2 h-14		rounded-xl		bg-[#FFFFFF]	"
            type="password"
            name="password"
            placeholder="Enter the password"
          />
          <div>
            <input
              className="text-gray-100 bg-[#84C7AE] p-4 rounded-lg	 w-[255px]"
              type="button"
              value="Create Account"
            />
            <p className="my-2	">
              Already Have An Account?
              <span className="underline	"> Sign In </span>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
