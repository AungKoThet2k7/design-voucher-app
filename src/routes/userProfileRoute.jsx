import { lazy } from "react";
const UserProfilePage = lazy(() =>
  import("../features/user-profile/Pages/UserProfilePage")
);
const ProfileImageChangePage = lazy(() =>
  import("../features/user-profile/Pages/ProfileImageChangePage")
);
const ProfileNameChangePage = lazy(() =>
  import("../features/user-profile/Pages/profileNameChangePage")
);
const ProfilePasswordChangePage = lazy(() =>
  import("../features/user-profile/Pages/ProfilePasswordChangePage")
);

const userProfileRoute = [
  {
    path: "user-profile",

    element: <UserProfilePage />,
  },
  {
    path: "user-profile/change-profile-image",
    element: <ProfileImageChangePage />,
  },
  {
    path: "user-profile/change-name",
    element: <ProfileNameChangePage />,
  },
  {
    path: "user-profile/change-password",
    element: <ProfilePasswordChangePage />,
  },
];

export default userProfileRoute;
