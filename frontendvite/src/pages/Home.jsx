import React from "react";
import axios from "axios";
import { AuthHeader } from "../auth/authorization";
import { DashboardContext } from "./Context";
import UserPage from "./UserPage";

export default function HomePage() {
  const getUserDetails = async () => {
    if (!AuthHeader() === null) {
      const userDetails = await axios.get(
        "http://localhost:8080/api/v1/user",
        AuthHeader()
      );

      console.log(userDetails.data);
      return userDetails.data;
    }
  };

  // const getToken = async () => {
  //   try {
  //     const token = await axios.post(keys.sessionURL, {
  //       email: keys.verificationEmail,
  //       password: keys.verificationPassword,
  //     });
  //     return {token, isAuthError: false};
  //   } catch (err) {
  //     // throw new Error('Unable to establish a login session.'); // here I'd like to send the error to the user instead
  //     return {err, isAuthError: true};
  //   }
  // };

  // const userDetails = axios
  //   .get("http://localhost:8080/api/v1/user", AuthHeader())
  //   .then((response) => {
  //     const UserDetails = {
  //       userFirstName: response.data.firstname,
  //       userLastName: response.data.lastname,
  //       userEmail: response.data.email,
  //     };
  //     return userDetails;
  //   })
  //   .catch((error) => console.log(error));

  return (
    <>
      <DashboardContext.Provider value={getUserDetails()}>
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
