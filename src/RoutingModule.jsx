import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import BookDashboard from "./components/BookDashboard/BookDashboard";
import BookPage from "./components/BookPage/BookPage";
import BookUI from "./components/BookUI/BookUI";
import Cart from './components/Cart/Cart';
import OrderPage from "./components/OrderPage/OrderPage"; 

const RoutingModule = () =>{
    const AppRoute = createBrowserRouter([
        {
            path: "/",
            element: <BookDashboard/>,
            children: [
                {
                    path: 'book',
                    element: <BookPage />
                },
                {
                    path: 'bookno',
                    element: <BookUI/>
                },
                {
                    path: 'cart',
                    element: <Cart/>
                },
                {
                    path: 'order',
                    element: <OrderPage/>
                }
            ]
        }
    ])
    return <RouterProvider router={AppRoute}></RouterProvider>
}

export default RoutingModule;