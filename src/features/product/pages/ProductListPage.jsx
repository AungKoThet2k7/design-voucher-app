import React from 'react'
import Container from '../../../components/Container'
import Breadcrumb from '../../../components/Breadcrumb'
import ProductTable from '../components/ProductTable'

const ProductListPage = () => {
  return (
    <>
    <Container>
        <Breadcrumb currentpageTitle={"Product Module"} />
        <ProductTable />
    </Container>
    </>
  )
}

export default ProductListPage