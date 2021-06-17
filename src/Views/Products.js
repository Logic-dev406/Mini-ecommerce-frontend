import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Conponents/Loader";
import { useAxiosGet } from "../Hooks/HttpRequest";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import NumberFormat from "react-number-format";

function Product() {
  // const [isMobile, setisMobile] = useState(
  //   window.matchMedia("(max-width:768px)").matches
  // );

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setisMobile(window.matchMedia("(max-width:768px)").matches);
  //   });
  // });

  const handleOnclick = () => {};

  const { slug } = useParams();
  const url = `http://localhost:3000/api/products/${slug}`;

  let product = useAxiosGet(url);
  console.log(product);

  let content = "";

  if (product.error) {
    content = (
      <p className="text-red-500 flex justify-center text-2xl">
        Something went wrong please try again
      </p>
    );
  }

  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    return (content = (
      <div className="flex flex-col items-center h-full w-full mb-24">
        <div className="flex md:flex-row py-10 flex-col items-center justify-center md:justify-between mx-0 md:mx-4 w-full md:w-9/12 bg-gray-100 my-8">
          <div key={product.data.data.id}>
            <div className=" md:ml-32 ">
              <img
                className="w-72 md:w-80 mt-8 md:mt-0"
                src={product.data.data.image}
                alt="Product"
              />
            </div>
          </div>
          <div className="bg-transparent h-full w-full md:w-1/2 py-8 px-4 md:px-8">
            <h1 className="text-xl md:text-3xl font-semibold">
              {product.data.data.description}
            </h1>
            <div className="border-b my-5"></div>
            <h1 className="text-2xl font-bold">
              <NumberFormat
                value={product.data.data.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₦"}
              />
            </h1>
            <div className="border-b my-5"></div>
            <h1 className="mt-5  text-sm text-gray-500">
              Call Us for bulk purchases:
            </h1>
            <button className="font-semibold text-black">
              Click here to show phone number
            </button>
            <div className="border-b my-5"></div>
            <div className="flex items-center items-center">
              <button
                type="button"
                onClick={handleOnclick}
                className="h-10 w-full md:w-full  rounded text-lg font-semibold bg-gray-600 text-white focus:outline-none"
              >
                Buy Now
              </button>
            </div>
            <div className="border-b my-5"></div>
            <h1 className="text-sm font-semibold">Share This Product</h1>
            <div className="flex items-center my-0 md:my-2 text-black">
              <FacebookIcon className="mx-1" fontSize="small" />
              <TwitterIcon className="mx-1" fontSize="small" />
              <WhatsAppIcon className="mx-1" fontSize="small" />
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return <div>{content}</div>;
}

export default Product;
