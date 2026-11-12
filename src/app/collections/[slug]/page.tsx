import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS, getProductBySlug } from '@/data/products';
import { BUSINESS } from '@/data/business';
import ProductDetailClient from './ProductDetailClient';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | ${product.categoryName}`,
    description: `${product.shortDescription} Handcrafted by Ipsita Producer Group in Dhenkanal, Odisha under the Subhadra Shakti initiative.`,
    openGraph: {
      title: `${product.name} | ${BUSINESS.name}`,
      description: product.shortDescription,
      images: [
        {
          url: product.primaryImage,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}

