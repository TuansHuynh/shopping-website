import './home.scss'
import type { ProductResponse } from '../../types/Type'
import { formatCurrency } from '../../utils/format'
import { listProduct } from '../../assets/data/Data';
import LinkCustom from '../../component/ui/LinkCustom'
import { Link } from 'react-router-dom'

export default function Home() {

    

    return (
        <div className="home">
            <div className="home__container">
                {listProduct.map((category) => (
                    <div key={category.id} className="category__block">

                        <div className='category__product__name'>
                            <LinkCustom to={`/${category.group}/${category.nameProduct}`} className='link_category'>
                                {category.nameProduct}
                            </LinkCustom>
                        </div>

                            <div className="category__products">
                                {category.list.map((product: ProductResponse) => (
                                    <Link to={`/${category.group}/${category.nameProduct}/${product.id}`} className='link__product'>
                                    <div key={product.id} className='product'>
                                        <img src={product.image} />
                                        <div className='name__product'>{product.name}</div>
                                        <div className="price">
                                            <span>{formatCurrency(product.price, 'VND')}</span>
                                        </div>
                                        <div className="price__discount">
                                            <span>{formatCurrency(product.priceDiscount, 'VND')}</span>
                                        </div>
                                        <button className='add_to_cart'>Add To Cart</button>
                                    </div>
                                    </Link>
                                ))}
                            </div>
                    </div>
                ))}
            </div>

            <div className='homw_container'>

            </div>
        </div>
    )
}

