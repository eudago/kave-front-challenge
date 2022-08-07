import { Img } from "@components/Img";
import { Product as ProductType } from "@lib/types/product";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
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

const ProductImage = (props: ImageProps) => (<ProductIageContent>
    <Img {...props} />
</ProductIageContent>)

const ProductName = styled("h2", {
    fontSize: '1rem',
    cursor: 'pointer',
});

const ProductPrice = styled("span", {
    fontSize: '1rem',
});

interface ProductProps {
    product: ProductType;
}

export default function Product({product}: ProductProps) {
    const { productImageUrl, productName, productPrice, productSku } = product;

    return <ProductContent>
        <ProductImage src={productImageUrl} layout="fill" alt={productName} />
        <Link href={`/products/${productSku}`}>
            <ProductName>{productName}</ProductName>        
        </Link>
        <ProductPrice>{productPrice} €</ProductPrice>
    </ProductContent>
}