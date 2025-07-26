import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex text-black">
    
      <div className="w-full md:w-1/2 flex flex-col justify-between px-25 py-12">
       
        <div className="flex-1 flex flex-col justify-center">
          <div>
            <h2 className="text-lg font-semibold mb-6 ">Welcome back</h2>
            <LoginForm />
          </div>
        </div>

      
        <p className="text-md text-gray-500 text-center">© 2024 tentwenty</p>
      </div>

      <div className="hidden md:flex w-1/2 bg-blue-600 text-white flex-col justify-center px-25">
        <h1 className="text-4xl font-semibold  mb-4">ticktock</h1>
        <p className="text-md text-[#E5E7EB] leading-relaxed">
          Introducing ticktock, our cutting-edge timesheet web application designed
          to revolutionize how you manage employee work hours. With ticktock, you
          can effortlessly track and monitor employee attendance and productivity
          from anywhere, anytime, using any internet-connected device.
        </p>
      </div>
    </div>
  );
}
