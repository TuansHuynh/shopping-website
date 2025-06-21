import { useParams } from "react-router-dom";
import Product from "../../page/product/product_container/Product";

const ProductByType = () => {
    const { name } = useParams();

    switch (name?.toLowerCase()) {
        case "smartphone":
            return <Product />;
        default:
            return <div>Không tìm thấy nhóm sản phẩm: {name}</div>;
    }
};

export default ProductByType;
