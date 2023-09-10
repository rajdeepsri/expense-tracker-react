export const useGetUserInfo = () => {
  if (!localStorage.getItem("auth")) {
    return { name: "", profilePhoto: "", userID: "", isAuth: false };
  }
  const { name, profilePhoto, userID, isAuth } = JSON.parse(
    localStorage.getItem("auth")
  );

  return { name, profilePhoto, userID, isAuth };
};
