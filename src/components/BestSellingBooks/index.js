import React, { useContext } from "react";
import StoreContext from "../../context";
import noData from "../../assets/icons/cancel.png";
import "./BestSellingBooks.css";

const BestSellingBooks = ({ store }) => {
  const { stores } = useContext(StoreContext);
  const storeIncluded = stores.included;
  const allBooksData = storeIncluded?.filter((item) => item.type === "books");
  const allAuthorsData = storeIncluded.filter(
    (item) => item.type === "authors"
  );

  const extractBestSellingBooks = (store) => {
    const filteredData = store.store.data.relationships.books
      ? store.store.data.relationships.books.data
      : [{}];

    const books = allBooksData
      .filter((c) => filteredData.some((s) => s.id === c.id))
      .sort((a, b) =>
        a.attributes.copiesSold < b.attributes.copiesSold ? 1 : -1
      );

    const booksWithAuthorName = books.map((book) => {
      const authorName = allAuthorsData.find(
        (author) => author.id === book.relationships.author.data.id
      );
      book.authorName = authorName ? authorName.attributes : null;

      return book;
    });

    const renderedBooks = (
      <table>
        <tbody>
          {booksWithAuthorName.slice(0, 2).map((book) => (
            <tr>
              <td>{book.attributes.name}</td>
              <td>{book.authorName.fullName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    return (
      <>
        {booksWithAuthorName.length === 0 ? (
          <div className="noDataWrapper">
            <img src={noData} alt="noData" className="nodataIcon" />
            <p className="nodata">No data available</p>
          </div>
        ) : (
          renderedBooks
        )}
      </>
    );
  };

  return (
    <div className="bestBooksWrapper">
      <h3 className="title">Best-selling Books</h3>
      {extractBestSellingBooks(store)}
    </div>
  );
};

export default BestSellingBooks;
