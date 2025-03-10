import { Toaster } from "react-hot-toast";
import Router from "./routes";
import "./styles/swiper.css";

import { RootAppState } from "./redux/store";
import { useSelector } from "react-redux";
import { Loader } from "./components";
// import { persistor } from "../src/redux/store"
// import { useEffect } from "react";

function App() {
  const loading = useSelector((state: RootAppState) => state.ui.loading);
    // useEffect(() => {
    //   persistor.purge(); // Clears persisted state
    //   localStorage.removeItem("persist:root");

    // },);
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{ duration: 5000 }}
        containerClassName="z-999999"
      />
      <Loader loading={loading} />
      <Router />
    </>
  );
}

export default App;
