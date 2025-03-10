// import { FormikProvider, useFormik } from "formik";
// import { Link } from "react-router-dom";
// import { AppDispatch } from "../../redux/store";
// import { useDispatch } from "react-redux";
// import { resetPasswordRequest } from "../../redux/actions/auth";
// import { Logo } from "../../assets";
// import { Button, DashboardInput } from "..";
// const ForgotPass = () => {
//   const dispatch: AppDispatch = useDispatch();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//     },
//     onSubmit: (values) => {
//       const { email } = values;
//       dispatch(resetPasswordRequest(email));
//       // alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <div className="w-full h-full pt-20">
//       <div className="w-full h-full ">
//         <div className="flex-1 bg-white flex items-center justify-center">
//           <div className="w-full h-[60%] flex flex-col justify-center items-center px-0 md:px-14 mt-36">
//             <img src={Logo.logo_purple} className="w-[200px]" alt="dmt_logo" />
//             <div className="card max-w-[450px] md:max-w-[500px] w-full h-full px-5 md:px-6 ">
//               <h1 className="font-semibold text-center text-3xl py-2">
//                 Forgot Password
//               </h1>
//               <FormikProvider value={formik}>
//                 <form onSubmit={formik.handleSubmit}>
//                   <div className="w-full mt-4">
//                     <DashboardInput title="Email" name="email" />

//                     <Button
//                       title="Send Request"
//                       className="text-white w-full font-semibold mb-3"
//                     />

//                     <div className="text-sm ">
//                       Remember your password now?{" "}
//                       <Link to={"/auth/login"} className="text-purple">
//                         Signin
//                       </Link>{" "}
//                     </div>
//                   </div>
//                 </form>
//               </FormikProvider>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPass;

import { FormikProvider, useFormik } from "formik";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { resetPasswordRequest } from "../../redux/actions/auth";
import { Logo } from "../../assets";
import { Button, DashboardInput } from "..";

const ForgotPass = () => {
  const dispatch: AppDispatch = useDispatch();

 

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      dispatch(resetPasswordRequest({ email: values.email }));
}});

  return (
    <div className="w-full h-full pt-20">
      <div className="w-full h-full">
        <div className="flex-1 bg-white flex items-center justify-center">
          <div className="w-full h-[60%] flex flex-col justify-center items-center px-0 md:px-14 mt-36">
            <img src={Logo.logo_purple} className="w-[200px]" alt="dmt_logo" />
            <div className="card max-w-[450px] md:max-w-[500px] w-full h-full px-5 md:px-6">
              <h1 className="font-semibold text-center text-3xl py-2">
                Forgot Password
              </h1>
              <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                  <div className="w-full mt-4">
                   <DashboardInput
                      title="Email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {/* Add error display */}
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.email}
                      </div>
                    )}

                    <Button
                      title="Send Request"
                      className="text-white w-full font-semibold mb-3"
                    />

                    <div className="text-sm ">
                      Remember your password now?{" "}
                      <Link to={"/auth/login"} className="text-purple">
                        Signin
                      </Link>
                    </div>
                  </div>
                </form>
              </FormikProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
