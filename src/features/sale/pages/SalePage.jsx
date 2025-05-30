import Breadcrumb from "../../../components/Breadcrumb";
import Container from "../../../components/Container";
import SaleCard from "../components/SaleCard";

const SalePage = () => {
  return (
    <>
      <Container>
        <Breadcrumb currentpageTitle={"Sale Module"} />
        <SaleCard />
      </Container>
    </>
  );
};

export default SalePage;
