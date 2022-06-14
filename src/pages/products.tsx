import type { NextPage } from 'next';
import { FooterForm } from 'src/components/form';
import { IProductProps } from 'src/models/product';
import { productsItems } from "src/constants/products";
import { Title } from 'src/components/title';

interface IProps {
  product: IProductProps;
}

const pageTitle = "Meaningful. Affordable. Easy. Our Solutions are for today's Africa."
const pageDescription = "From smart public transport solutions to retail payments to payroll management, we make products catering to the growing everyday financial needs of African population."

const ProductItem = (props: IProps) => {
  const { title, image, description, highlights, href } = props.product
  return (
    <div>
      <h2 className="mb-8 font-bold text-center">{title}</h2>
      <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-3 lg:grid-cols-3">
        <div className="">
          <img src={image} alt="" className="" />
        </div>
        <div className="md:pl-10 cols-span-1">
          <h3>Highlights</h3>
          {highlights.map((highlight, index) => (
            <ul key={index} className="">
              <li className="py-2">{highlight}</li>
            </ul>
          )
          )}

        </div>
        <div className="">
          <p className='pb-5'>{description}</p>
          <a href={href} target="_blank" rel="noreferrer" className='text-lg text-secondary'>{href}</a>
        </div>
      </div>
    </div>
  )
}



const Products: NextPage = () => {
  return (
    <>
      <Title title={pageTitle} description={pageDescription} />
      <div className="container md:my-0">
        {productsItems.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
      <FooterForm />
    </>

  )
}

export default Products
