import React from "react";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import VoucherTable from "../components/VoucherTable";

const VoucherListPage = () => {
  return (
    <>
      <Container>
        <Breadcrumb currentpageTitle={"Voucher Module"} />
        <VoucherTable />
      </Container>
    </>
  );
};

export default VoucherListPage;
