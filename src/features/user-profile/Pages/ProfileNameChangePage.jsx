import React from "react";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import ProfileNameChangeCard from "../components/ProfileNameChangeCard";

const ProfileNameChangePage = () => {
  return (
    <Container>
      <Breadcrumb
        currentpageTitle={"Change Name"}
        links={[{ title: "User Profile", path: "/dashboard/user-profile" }]}
      />
      <ProfileNameChangeCard />
    </Container>
  );
};

export default ProfileNameChangePage;
