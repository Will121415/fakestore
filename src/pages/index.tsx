import globalStyles from '../styles/globals';
import { Product } from '../../interfaces';
import { WifinetLayout } from '../../components';

import { GetStaticProps } from 'next'
import { productApi } from '../../api';

import { Grid, Text } from "@nextui-org/react"
import { FC } from 'react';

import ProductCard from '../../components/ui/ProductCard';

interface Props {
  products: Product[];
}


const Home: FC<Props> = ({ products }) => {

  globalStyles();
  console.log(products[0])

  return (
    <WifinetLayout title='Home Page' description='Pagina de inicio para ver productos'>

      <Text h1>Productos</Text>

      <Grid.Container gap={2} justify="center">
          {
            products.map( (product) => {
              return (
                  <ProductCard  key={product.id} product={product} /> 
              )
            })
          }
        </Grid.Container>


    </WifinetLayout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const response = await productApi.get<Product[]>('products')
  const products: Product[] = response.data;

  console.log(products)

  return {
    props: {
      products
    }
  }
}

export default Home;