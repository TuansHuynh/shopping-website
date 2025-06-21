import '../style/category.scss'
import { listProduct } from '../../assets/data/Data'
import type { ListProduct } from '../../types/Type'

export default function Category() {
  return (
    <div className="category__list">
      {listProduct.map((item: ListProduct) => (
        <p key={item.id} >{item.nameProduct}</p>
      ))}
    </div>
  )
}
