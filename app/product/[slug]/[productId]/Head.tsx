import { IProductDetailResponse } from '@/interfaces/responses/product.interface';
import { postRequest } from '@/utils/apiCaller';
import { FC } from 'react'

interface HeadProps {
  params: { slug: string; productId: string }
}

const Head: FC<HeadProps> = async ({ params }) => {
  const { productId } = params

  // Fetch product data here
  const product = await fetchProductData(productId)

  // Now we can use the product data to generate our OpenGraph tags
  return (
    <>
      <meta property="og:type" content="product" />
      <meta property="product:price:amount" content={product.productColors[0]?.productPriceDetails[0]?.price.toString()} />
      <meta property="product:price:currency" content="NGN" />
      <meta property="product:availability" content={product.productStatus.status} />
      <meta property="product:condition" content="new" />
      <meta property="product:category" content={product.category} />
    </>
  )
}

async function fetchProductData(productId: string) {
  const { response } = await postRequest<
    { productId: string },
    IProductDetailResponse
  >({
    url: "/product/product-detail-v2",
    payload: { productId },
  });
  return response
}

export default Head