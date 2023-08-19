import { Col } from "react-bootstrap";
import Card from "../components/Card/Card";
import "../components/Card/Cards.css";


export function BookItems({booksArray}){
   
    return (
        <>
        {booksArray.map(bookItem =>{
            return (
                <Col>
                <Card
            title={bookItem.title}
            imageUrl={bookItem.imageUrl}
            price={bookItem.price}
            author={bookItem.author}
            id={bookItem.id}
            />
            </Col>
            )
            })}
        </>
    )
}

export function EBookItems({ebooksArray}){
   
    return (
        <>
        {ebooksArray.map(ebookItem =>{
            return (
                <Col>
                <Card
            title={ebookItem.title}
            imageUrl={ebookItem.imageUrl}
            price={ebookItem.price}
            author={ebookItem.author}
            id={ebookItem.id}
            />
            </Col>
            )
            })}
        </>
    )
}

export function MovieItems({moviesArray}){
   
    return (
        <>
        {moviesArray.map(moviesItem =>{
            return (
                <Col>
                <Card
            title={moviesItem.title}
            imageUrl={moviesItem.imageUrl}
            price={moviesItem.price}
            author={moviesItem.author}
            id={moviesItem.id}
            />
            </Col>
            )
            })}
        </>
    )
}