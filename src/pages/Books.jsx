import React from "react";
import { books } from "../data";
import Book from "../components/ui/Book";

export const Books = () => {
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select id="filter" defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH" selected>
                    Price, Low to High
                  </option>
                  <option value="HIGH_TO_LOW" selected>
                    Price, High to Low
                  </option>
                  <option value="RATING" selected>
                    Rating
                  </option>
                </select>
              </div>
              <div className="books">
                {books.map((book) => (
                    <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
