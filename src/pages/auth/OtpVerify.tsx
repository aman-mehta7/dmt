import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; //  Import useNavigate
// import { toast } from "react-toastify";
import { verifyOtp } from "../../redux/actions/auth"; //  Import action
import { RootAppState, AppDispatch } from "../../redux/store";

const OtpVerify: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const dispatch = useDispatch<AppDispatch>(); // Initialize useDispatch
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Get email from Redux store
  const email = useSelector((state: RootAppState) => state.auth.user?.email||localStorage.getItem('user_email')||'');
  const password = useSelector((state: RootAppState) => state.auth.user?.password||localStorage.getItem('user_password')||'');
  const handleVerifyOtp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    console.log("Email:", email); //  Debugging log
    console.log("Password:", password); //  Debugging log
    console.log("OTP:", otp); //Debugging log
  
    try {
      await dispatch(verifyOtp(email, otp, navigate, password)); //  Pass password correctly
    } catch (error) {
      console.log("Error in OTP Verification:", error);
      // toast.error("Invalid OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Verify OTP</h2>
        <p className="text-gray-600 text-center mb-4">
          Enter the OTP sent to your email
        </p>

        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            maxLength={6}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center tracking-widest text-black"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Didn't receive an OTP?{" "}
          <button
            className="text-blue-500 hover:underline"
            // onClick={() => toast.info("Resending OTP...")}
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default OtpVerify;
