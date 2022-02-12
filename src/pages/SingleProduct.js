// import React from "react";
// import products from "../data/Products";
// import Header from "./../components/Header";

// const SingleProduct = () => {
//   return (
//     <>
//       <Header />
//       <div className="container single-product">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="single-image">
//               <img src={products.image} alt={products.name} />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="product-dtl">
//               <div className="product-info">
//                 <div className="product-name">{products.name}</div>
//               </div>
//               <p>desc</p>

//               <div className="product-count col-lg-7 ">
//                 <div className="flex-box d-flex justify-content-between align-items-center">
//                   <h6>Price</h6>
//                   <span>฿ 10</span>
//                 </div>
//                 <button className="round-black-btn">Add To Cart</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SingleProduct;

import React from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../data/Products";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Header from "./../components/Header";

function SingleProduct() {
  const { id } = useParams();
  let clickedProduct = giveProduct(id);
  let matchedProduct = clickedProduct[0];
  function addToCart(stockValue) {
    let result = false;
    if (stockValue < 1) {
      result = true;
      return result;
    }
    return result;
  }
  console.log("the matched product is: ", matchedProduct);
  console.log(matchedProduct.title);
  console.log(matchedProduct.desc);
  console.log(matchedProduct.brand);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                <Row>
                  <Col md={6}>
                    <Image
                      src={matchedProduct.image}
                      alt="product image"
                      fluid
                    />
                  </Col>
                  <Col md={3}>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <h3>{matchedProduct.name}</h3>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Price: $ {matchedProduct.price}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Description: {matchedProduct.desc}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button
                          disabled={addToCart(matchedProduct.stocksCount)}
                          className="btn btn-block"
                        >
                          Add to Cart
                        </Button>
                        <div>
                          <Link to="/" className="col-md-6 ">
                            <button>Continue To Shopping</button>
                          </Link>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function giveProduct(id) {
  let idToSearch = id;
  let matchedProduct = Products.filter(function (prod) {
    return prod._id === idToSearch;
  });
  console.log(
    "i m in giveproduct function and the matched product is: ",
    matchedProduct
  );
  console.log("now i am returning this above product");
  return matchedProduct;
}

export default SingleProduct;
