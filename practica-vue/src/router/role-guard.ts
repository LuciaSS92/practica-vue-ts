import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
    console.log(to, from, next);

    const userRole = localStorage.getItem('userRole');
    if ( userRole ==='Customer'){
        // si tengo token voy asl next
        next();
    } else {
    alert("You have to be logged in to access this content");
    next({ name: "login" });
  }
}

export default haveRoleGuard;