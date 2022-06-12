import type { NextPage } from 'next';
import { FooterForm } from 'src/components/form';
import { IProductProps } from 'src/models/product';
import { productsItems } from "src/constants/products";

interface IProps {
  product: IProductProps;
}

const ProductItem = (props: IProps) => {
  const { title, image, description, highlights } = props.product
  return (
    <div>
      <h2 className="mb-8 font-bold text-center">{title}</h2>
      <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-3 lg:grid-cols-3">
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

const Products: NextPage = () => {
  return (
    <>
      <div className='flex flex-col p-5 md:p-0'>
        <div className='mx-auto md:max-w-2xl md:pt-16'>
          <h1 className='mb-4 text-center'>Meaningful. Affordable. Easy. Our Solutions are for today&apos;s Africa.</h1>
          <p className='py-8 mx-auto text-center md:max-w-2xl'>
            From smart public transport solutions to retail payments to payroll management, we make products catering to the growing everyday financial needs of African population.</p>
        </div>
      </div>
      <div className="container md:my-16">
        {productsItems.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
      <FooterForm />
    </>

  )
}

export default Products
