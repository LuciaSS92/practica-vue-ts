import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
    const token = localStorage.getItem("access_token");
  if (token) {
    next();
  } else {
    alert("You have to be logged in to access this content");
    next({ name: "login" });    
  }
  
};
export default haveRoleGuard;
