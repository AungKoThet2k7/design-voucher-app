
import SaleProductSelectForm from "./SaleProductSelectForm";
import SaleProductTable from "./SaleProductTable";
import SaleInfomation from './SaleInfomation'

const SaleCard = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="col-span-3">
        <SaleProductSelectForm />

        <SaleProductTable />
      </div>
      <div className="col-span-1">
        <SaleInfomation />
      </div>
    </div>
  )
}

export default SaleCard