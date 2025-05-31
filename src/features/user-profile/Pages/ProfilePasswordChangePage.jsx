import React from "react";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import ProfilePasswordChangeCard from "../components/ProfilePasswordChangeCard";

const ProfilePasswordChangePage = () => {
  return (
    <Container>
      <Breadcrumb
        currentpageTitle={"Change Password"}
        links={[{ title: "User Profile", path: "/dashboard/user-profile" }]}
      />
      <ProfilePasswordChangeCard />
    </Container>
  );
};

export default ProfilePasswordChangePage;
