import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ClientFooter, ClientNavbar } from "..";
import { PiBookBookmark } from "react-icons/pi";
import { GiSpeedometer } from "react-icons/gi";
import { MdMeetingRoom, MdOutlineBed, MdOutlineEmojiEvents } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { useSelector } from "react-redux";
import { RootAppState } from "../../redux/store";
// import { StaysRoomsPage } from "../../pages";
// import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelectors";
// import { RootAppState } from "../../redux/store";
// import { useEffect } from "react";
// import { getAllHostedEvents } from "../../redux/actions/events";
// import { getSellerPlaces } from "../../redux/actions/places";

const navss = {
  BUYER: [
    { name: "Dashboard", href: "dashboard", icon: <GiSpeedometer /> },
    { name: "Profile", href: "profile", icon: <LuUser /> },
    { name: "Reservations", href: "reservation", icon: <PiBookBookmark /> },
  ],
  SELLER: [
    { name: "Dashboard", href: "dashboard", icon: <GiSpeedometer /> },
    { name: "Profile", href: "profile", icon: <LuUser /> },
    { name: "Stays", href: "stays", icon: <MdOutlineBed /> },
    { name: "Rooms", href: "rooms", icon: <MdMeetingRoom /> },
    { name: "Events", href: "events", icon: <MdOutlineEmojiEvents /> },
    { name: "Reservations", href: "reservation", icon: <PiBookBookmark /> },
  ],
  // {
  //   name: "Dashboard",
  //   href: "dashboard",
  //   icon: <GiSpeedometer />,
  // },
  // {
  //   name: "Profile",
  //   href: "profile",
  //   icon: <LuUser />,
  // },
  // {
  //   name: "Stays",
  //   href: "stays",
  //   icon: <MdOutlineBed />,
  // },
  // {
  //   name: "Events",
  //   href: "events",
  //   icon: <MdOutlineEmojiEvents />,
  // },
  // {
  //   name: "Reservations",
  //   href: "reservation",
  //   icon: <PiBookBookmark />,
  // },
};

// const DashboardNav = () => {
//   return (
//     <ul
//       className={`flex flex-col flex-1 border-r-2 border-[#E2E2E2] max-w-[300px]`}
//     >
//       {navs.map((nav, i) => (
//         <li key={i}>
//           <NavLink
//             to={nav.href}
//             className={`flex items-center justify-start gap-2 p-6 border border-b-fade-white hover:text-none`}
//           >
//             <span className={`mr-4 text-2xl text-dark-blue`}> {nav.icon}</span>
//             <span className={`hidden lg:block text-dark-blue`}>{nav.name}</span>
//           </NavLink>
//         </li>
//       ))}
//     </ul>
//   );
// };


const DashboardNav = () => {
  const role = (useSelector((state: RootAppState) => state.auth.user.role) || "BUYER") as keyof typeof navss;
  const navs = navss[role] || navss.BUYER;
  return (
    <ul className="flex flex-col flex-1 border-r-2 border-[#E2E2E2] max-w-[80px] lg:max-w-[300px]">
      {navs.map((nav, i) => (
        <li key={i}>
          <NavLink
            to={nav.href}
            className={({ isActive }) =>
              `flex items-center justify-start gap-2 p-6  transition-all duration-300 ${
                isActive
                  ? "bg-[rgb(239,239,239)] text-purple-600" // Active state styling
                  : "text-dark-blue hover:bg-[rgb(239,239,239)]"
              }`
            }
          >
            <span className="mr-4 text-2xl">{nav.icon}</span>
            <span className="hidden lg:block">{nav.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const DashboardLayout = () => {
  // const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const page = pathname.split("/").filter((item) => item)[1];
  // const {
  //   user: { role, id },
  // } = useAppSelector((state: RootAppState) => state.auth);

  // useEffect(() => {
  //   dispatch(getAllHostedEvents());
  //   if (id) {
  //     dispatch(getSellerPlaces(id));
  //   }
  // }, []);

  // if (role !== "SELLER") {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <div className={`flex flex-1 flex-col w-full min-h-screen`}>
      <div className={`block relative -z-10 h-20 w-full`} />
      <ClientNavbar />
      <div className={`flex flex-1 overflow-hidden`}>
        <DashboardNav />
        <div
          className={`relative flex-1 min-w-0 ${
            page !== "reservation" && "p-12"
          } overflow-y-auto bg-white`}
        >
          <Outlet />
        </div>
      </div>
      <ClientFooter/>
    </div>
  );
};

export default DashboardLayout;
