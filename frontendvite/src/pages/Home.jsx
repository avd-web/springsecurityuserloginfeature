import React from "react";
import axios from "axios";
import { AuthHeader } from "../auth/authorization";
import { DashboardContext } from "./Context";
import UserPage from "./UserPage";

export default function HomePage() {
  const userDetails = axios
    .get("http://localhost:8080/api/v1/user", AuthHeader())
    .then((response) => {
      const UserDetails = {
        userFirstName: response.data.firstname,
        userLastName: response.data.lastname,
        userEmail: response.data.email,
      };
      return userDetails;
    })
    .catch((error) => console.log(error));

  return (
    <>
      <DashboardContext.Provider value={userDetails}>
        <UserPage />
      </DashboardContext.Provider>
    </>
  );

  // return <UserInfo userName={result.userFirstName} />;
}

// function UserInfo({ userName }) {
//   return <span>{userName}</span>;
// }

// return (
//   <>
//     <div>
//       <UserInfo />
//       {/* <Auth /> */}
//       {/* <LoginPage /> */}
//       {/* <button onClick={() => setShow(!show)}> show </button>
//         {show ? null : <LoginPage />} */}
//     </div>
//   </>
// );
