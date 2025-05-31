import React from "react";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import UserProfileCard from "../components/UserProfileCard";

const UserProfilePage = () => {
  return (
    <Container>
      <Breadcrumb currentpageTitle={"User Profile"} />
      <UserProfileCard />
    </Container>
  );
};

export default UserProfilePage;
