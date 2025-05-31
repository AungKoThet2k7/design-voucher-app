import React from "react";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import ProfileImageChangeCard from "../components/ProfileImageChangeCard";

const ProfileImageChangePage = () => {
  return (
    <Container>
      <Breadcrumb
        currentpageTitle={"Change Image"}
        links={[{ title: "User Profile", path: "/dashboard/user-profile" }]}
      />
      <ProfileImageChangeCard />
    </Container>
  );
};

export default ProfileImageChangePage;
