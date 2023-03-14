// import logo from './logo.svg';
import "./App.css";
import React from "react";

function App() {
  // eslint-disable-next-line no-undef
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);
  console.log(data);

  let smartPhoneArr = data.filter(
    (product) => product.category === "smartphones"
  );

  let stockFiltered = data.filter((product) => product.stock < 50);

  let rating_Category = data.filter(
    (product) => product.category === "smartphones" && product.rating > 4
  );

  let price_stock_category = data.filter(
    (product) =>
      product.category === "laptops" &&
      product.price < 1200 &&
      product.stock <= 100 &&
      product.stock >= 50
  );

  let primary_images = data.map((product) => product.images[0]);

  // eslint-disable-next-line array-callback-return
  let totalOfPrice = data.reduce(
    (total, product) =>
      // eslint-disable-next-line no-unused-expressions
      total + product.price,
    0
  );

  // console.log(totalOfPrice);

  let netTotal = Math.floor(data.reduce(
    (total_2, product) =>
      total_2 +
      (product.price - (product.price * product.discountPercentage) / 100),
    0
  ));
  console.log("netTotal", netTotal);
  console.log("totalPrice", totalOfPrice);
  return (
    <div className='App'>
      {/* Product Name Only */}
      <div
        style={{
          border: "1px solid",
          width: "30%",
          height: "auto",
          margin: "20px auto auto",
        }}
      >
        <h1>Product's List</h1>
        <ul>
          {data.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>

      {/* Product Name - Brand - Price */}
      <div
        style={{
          border: "1px solid",
          width: "40%",
          height: "auto",
          margin: "20px auto auto",
        }}
      >
        <h1>Product's Name - Brand - Price</h1>
        <ul>
          {data.map((product) => (
            <li key={product.id}>
              {product.title} - {product.brand} - {product.price}
            </li>
          ))}
        </ul>
      </div>

      {/* smartphone filter */}
      <div
        style={{
          border: "1px solid",
          width: "30%",
          height: "auto",
          margin: "20px auto auto",
        }}
      >
        <h1>Product's List for Filter : 'smartphones'</h1>
        <ul>
          {smartPhoneArr.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>

      {/* stock less then 50 */}
      <div
        style={{
          border: "1px solid",
          width: "30%",
          height: "auto",
          margin: "20px auto auto",
        }}
      >
        <h1>Product's Listfor Filter : 'stock less 50'</h1>
        <ul>
          {stockFiltered.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>

      {/*Rating > 4 & Category = 'SmartPhones' */}
      <div
        style={{
          border: "1px solid",
          width: "30%",
          height: "auto",
          margin: "20px auto auto",
        }}
      >
        <h1>
          Product's Listfor Filter : 'Rating greater than 4 & filter :
          SmartPhones'
        </h1>
        <ul>
          {rating_Category.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>

      {/* price <1200 & 50 < stock > 100 & category : 'Laptops'   */}
      <div
        style={{
          border: "1px solid",
          width: "30%",
          height: "auto",
          margin: "20px auto auto",
        }}
      >
        <h1>
          Product's Listfor Filter : price less than 1200 & stock between 50 &
          100 && category : 'Laptops'
        </h1>
        <ul>
          {price_stock_category.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>

      {/* Primary Images */}
      <div
        style={{
          border: "1px solid #D3D3D3",
          width: "70%",
          height: "auto",
          margin: "20px auto 30px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ margin: "20px auto 40px" }}>
          Primary Images of all Products{" "}
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          {primary_images.map((image, ind) => (
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <div key={ind}>
              <div
                style={{
                  border: "1px solid #D3D3D3",
                  width: "150px",
                  height: "150px",
                  margin: "auto",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={image}
                  style={{
                    width: "100%",
                    // borderRadius: '50px',
                    height: "100%",
                  }}
                  alt='primary_Images'
                />
              </div>
              <h3>{data[ind].title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* total, discount, netTotal */}
      <div
        style={{
          border: "1px solid",
          width: "40%",
          height: "auto",
          margin: "20px auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <h2>Total : ₹{totalOfPrice}/-</h2>
        <h2>Net - Total : ₹{netTotal}/-</h2>
      </div>
    </div>
  );
}
export default App;
