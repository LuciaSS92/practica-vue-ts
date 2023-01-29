// Settings for the "Logout" button

import router from "@/router";

 const logOut = () => {
  return {
    handleLogOut() {
      localStorage.removeItem("access_token");
      alert("You have successfully logged out");
      router.push({ name: "login" });
    },
  };
 }
 
 export default logOut