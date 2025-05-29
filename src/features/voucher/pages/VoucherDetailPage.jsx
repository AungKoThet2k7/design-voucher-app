import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import Container from "../../../components/Container";
import VoucherDetailCard from "../components/VoucherDetailCard";

const VoucherDetailPage = () => {
  return <section>
    <Container>
      <Breadcrumb currentpageTitle={"Voucher Detail"} links={[{ title: "Voucher Module", path: "/dashboard/voucher" }]} />
      <VoucherDetailCard />
    </Container>
  </section>;
};

export default VoucherDetailPage;
