import React from "react";
import "../components/Card/Cards.css";
import "./Homecomps.css";
import {Row} from "react-bootstrap";
import RegularBooks from "../data/books.json";
import {BookItems} from "../Helper/CardsFromJson";
import { SearchBar } from "../components/SearchBar/SearchBar";

export default function Books() {
    return (
<div className="page-margins">
            <div className="search-bar-wrap">
                <SearchBar placeholder="What are you looking for?" data={RegularBooks}/>
            </div>
        <div className="card-collection">
            <Row xs={1} sm={2} md={2} lg={4} className="g-3">
            <BookItems booksArray={RegularBooks}/>
            </Row>
        </div>
</div>
    )
}