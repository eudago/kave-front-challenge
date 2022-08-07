import { Product as ProductType } from "@lib/types/product";
import Image, { ImageProps } from "next/image";
import { styled } from "stitches.config";

const ProductContent = styled("div", {
    display: "flex",
    flexDirection: "column",
    position: 'relative',
});

const ProductIageContent = styled("div", {
    position: 'relative',
    height: '20rem',
    width: '100%',
});

const Img = styled(Image, {
    objectFit: 'cover',
});

const ProductImage = (props: ImageProps) => (<ProductIageContent>
    <Img {...props} />
</ProductIageContent>)

const ProductName = styled("h2", {
    fontSize: '1rem',
});

const ProductPrice = styled("span", {
    fontSize: '1rem',
});

interface ProductProps {
    product: ProductType;
}

export default function Product({product}: ProductProps) {
    const { productImageUrl, productName, productPrice } = product;

    return <ProductContent>
        <ProductImage src={productImageUrl} layout="fill" alt={productName} />
        <ProductName>{productName}</ProductName>
        <ProductPrice>{productPrice} €</ProductPrice>
    </ProductContent>
}