import { productsItems } from "src/constants/products";
import { IProductProps } from "src/models/product";

interface IProps {
  product: IProductProps;
}
const ProductItem = (props: IProps) => {
  const { title, image, description, highlights } = props.product
  return (
    <div>
      <h2 className="mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <img src={image} alt="" className="" />
        </div>
        <div className="pl-3 cols-span-1">
          <h3>Highlights</h3>
          {highlights.map((highlight, index) => (
            <ul key={index} className="">
              <li className="py-2">{highlight}</li>
            </ul>
          )
          )}

        </div>
        <div className="">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
const Products = () => {

  return (
    <div className="container">
      <div className="mx-auto text-center md:pb-12 md:pt-16 md:w-2/3">
        <h1>Meaningful.Affordable.Easy.<br />Our solutions are for today’s Africa.</h1>

        <p>From smart public transport solutions to retail payments to payroll management, we make products catering to the growing everyday financial needs of African population. </p>

      </div>
      <div className="md:my-16">
        {productsItems.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>


    </div>
  );
};

export default Products;
