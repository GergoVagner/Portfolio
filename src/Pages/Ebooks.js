import React from "react";
import "./Homecomps.css";
import "../components/Card/Cards.css";
import {Row} from "react-bootstrap";
import EBooks from "../data/ebooks.json";
import {EBookItems} from "../Helper/CardsFromJson";
import { SearchBar } from "../components/SearchBar/SearchBar";

export default function EBooksPage() { 
    return (
<div className="page-margins">
            <div className="search-bar-wrap">
                <SearchBar placeholder="What are you looking for?" data={EBooks}/>
            </div>
        <div className="card-collection">
            <Row xs={1} sm={2} md={2} lg={4} className="g-3">
            <EBookItems ebooksArray={EBooks}/>
            </Row>
        </div>
</div>

    )
}