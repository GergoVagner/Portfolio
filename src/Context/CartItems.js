import {Stack, Button} from "react-bootstrap";
import { useShoppingCart } from "./ShoppingCartContext";
import { formatCurrency } from "../Helper/FormatCurrency";
import "./cartContent.css";
import RegularBooks from "../data/books.json";
import EBooks from "../data/ebooks.json";
import Movies from "../data/movies.json";

export function CartItem({ id, quantity }) {
    const { removeFromCart } = useShoppingCart()
    const item = RegularBooks.find(i => i.id === id) || EBooks.find(i => i.id === id) || Movies.find(i => i.id === id)
    if (item == null) return null
  
    return (
      <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img className="cart-image" 
          src={item.imageUrl} alt=""
        />
        <div className="me-auto">
          <div>
            {item.title}{" "}
            {quantity > 1 && (
              <span className="cart-texts">
                x{quantity}
              </span>
            )}
          </div>
          <div className="cart-texts">
            {formatCurrency(item.price)}
          </div>
        </div>
        <div> {formatCurrency(item.price * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </Button>
      </Stack>
    )
  }


