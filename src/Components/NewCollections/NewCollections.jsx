import React from "react";
import "./NewCollections.css";
import new_collection from "../Assets/new_collections";
import Item from "../Items/Item";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="row">
        {new_collection.map((item, i) => {
          return (
            <div className="col-6 col-md-4 col-lg-3">
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
