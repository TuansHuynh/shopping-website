import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound       from "../component/layout/NotFound";
import DefaultLayout  from "../view/DefaulftLayout";
import Home           from "../page/home/Home";
import GuestLayout    from "../view/GuestLayout";
import SignIn         from "../component/layout/SignIn";
import SignUp         from "../component/layout/SignUp";
import Cart           from "../page/cart/Cart";
import UserProfile    from "../page/user/UserProfile";
import Product from "../page/product/product_container/Product";
import ProductInfo from "../page/product/productInfo/ProductInfo";
import ProductList from "../page/product/productList/ProductList";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/home',
                element: <Home/>
            }, 
            {
                path: '/',
                element: <Navigate to='/home'/>
            },
            {
                path: '/:name',
                element: <Product/>
            },
            {
                path: "/:name/:name/:id",
                element: <ProductInfo />,
            },
            {
                path: "/:name/:name/",
                element: <ProductList />,
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/user',
                element: <UserProfile/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children:[
            {
                path: '/login',
                element: <SignIn/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router;
