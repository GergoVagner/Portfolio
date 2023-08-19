import React from "react";
import "./Homecomps.css";
import "../components/Card/Cards.css";
import {Row} from "react-bootstrap";
import RegularBooks from "../data/books.json";
import EBooks from "../data/ebooks.json";
import Movies from "../data/movies.json";
import {BookItems, EBookItems, MovieItems} from "../Helper/CardsFromJson";
import { SearchBar } from "../components/SearchBar/SearchBar";

export default function Home() {
    return (
        //<i class="fa-solid fa-compact-disc" style="color: #511f2e;"></i>
        <>
        <div className="page-margins">
            <div>
                <SearchBar placeholder="What are you looking for?" data={RegularBooks.concat(EBooks,Movies)}/>
            </div>

        <div className="section-header">
            <h2>Books</h2>
        </div>
       
        <div className="card-collection">
            <Row xs={1} sm={2} md={2} lg={4} className="g-3 ">
            <BookItems booksArray={RegularBooks.slice(0,4)}/>
            </Row>
        </div>

        <div className="section-header">
            <h2>E - Books</h2>
        </div>
       
        <div className="card-collection">
        <Row xs={1} sm={2} md={2} lg={4} className="g-3">
        <EBookItems ebooksArray={EBooks.slice(0,4)}/>
            </Row>
        </div>

        <div className="section-header">
            <h2>Movies</h2>
        </div>
       
        <div className="card-collection">
        <Row xs={1} sm={2} md={2} lg={4} className="g-3">
        <MovieItems moviesArray={Movies.slice(0,4)}/>
            </Row>
        </div>

    </div>
     </>
    )
}