import Script from 'next/script'

interface ProductOpenGraphTagsProps {
  price: string
  currency: string
  availability: string
  condition: string
  category: string
}

const ProductOpenGraphTags: React.FC<ProductOpenGraphTagsProps> = ({
  price,
  currency,
  availability,
  condition,
  category
}) => {
  const tags = `
    <meta property="og:type" content="product" />
    <meta property="product:price:amount" content="${price}" />
    <meta property="product:price:currency" content="${currency}" />
    <meta property="product:availability" content="${availability}" />
    <meta property="product:condition" content="${condition}" />
    <meta property="product:category" content="${category}" />
  `

  return (
    <Script id="product-og-tags" dangerouslySetInnerHTML={{ __html: tags }} />
  )
}

export default ProductOpenGraphTags