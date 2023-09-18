export const AuthHeader = () =>
  sessionStorage.getItem("access_token") === null
    ? null
    : {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("access_token"),
        },
      };
