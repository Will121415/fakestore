import { AddShoppingCart } from '@mui/icons-material';
import { Button, Card, Col, Grid, Row, Spacer, Text } from '@nextui-org/react'
import React, { FC } from 'react'
import { Product } from '../../interfaces/product';

interface Props {
    product: Product
}

const ProductCard:FC<Props> = ({product}) => {
    return (

        <Grid  
            css={{ height: '500px', width: '300px'}}
            xs={12} sm={4} md={3}
            onMouseEnter={() => console.log('Mouse enter')}

        
        >
            <Card isHoverable isPressable variant='bordered'>
                <Card.Header>
                    <Col>
                        <Text b>{product.title}</Text>
                        <Spacer/>
                        <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$xl" }}>
                            $ {product.price}
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                    <Card.Image
                        src={product.image}
                        objectFit='fill'
                        width={500}
                    />
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                    <Row justify="center">
                        <Button style={{ width: '100%' }} ghost>Agree</Button>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}


export default ProductCard