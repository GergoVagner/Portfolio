import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "./ShoppingCartContext";
import { CartItem } from "./CartItems";
import { formatCurrency } from "../Helper/FormatCurrency";
import RegularBooks from "../data/books.json";
import EBooks from "../data/ebooks.json";
import Movies from "../data/movies.json";

export function ShoppingCart({ isOpen}) {
    const {closeCart, cartItems} = useShoppingCart()
    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
           <Offcanvas.Title>
           Cart
           </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
            {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="cart-total-price">
            Total: {" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = RegularBooks.find(i => i.id === cartItem.id) || EBooks.find(i => i.id === cartItem.id) || Movies.find(i => i.id === cartItem.id)
              return total + (item?.price || 0) * cartItem.quantity
            },
            0)
          )}
          </div>
            </Stack>
            </Offcanvas.Body> 
    </Offcanvas>
}