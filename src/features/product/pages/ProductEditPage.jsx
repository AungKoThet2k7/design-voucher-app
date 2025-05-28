import Breadcrumb from "../../../components/Breadcrumb";
import Container from "../../../components/Container";
import ProductEditCard from "../components/ProductEditCard";

const ProductEditPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentpageTitle={"Product Edit"}
          links={[{ title: "Product Module", path: "/dashboard/products" }]}
        />
        <ProductEditCard />
      </Container>
    </section>
  );
};

export default ProductEditPage;
