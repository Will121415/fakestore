import { Rating } from '@geist-ui/core';
import { Badge, Button, Card, Col, Grid, Row, Spacer, Text } from '@nextui-org/react'
import React, { FC } from 'react'
import { Product } from '../../interfaces/product';

interface Props {
    product: Product
}

const ProductCard: FC<Props> = ({ product }) => {
    return (

        <Grid
            css={{ width: '300px'}}
            xs={12} sm={4} md={3}
            onMouseEnter={() => console.log('Mouse enter')}


        >
            <Card isHoverable isPressable variant='bordered'>

                <Card.Header>
                    <Col>
                        <Row justify="space-between">
                            <Text b>{product.title}</Text>
                            <Badge disableOutline color="success" size={'xs'}>
                                New
                            </Badge>
                        </Row>
                        <Spacer />
                        <Row justify='space-between'>
                            <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$xl" }}>
                                $ {product.price}
                            </Text>
                            <Rating  value={product.rating.rate } type='warning' locked/>    
                        </Row>
                    </Col>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                    <Card.Image
                        src={product.image}
                        objectFit='fill'
                        width={200}
                        height={300}
                    />
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                    <Button css={{ width: '100%', m: '5px' }} ghost>Agree</Button>
                </Card.Footer>
            </Card>
        </Grid>
    )
}


export default ProductCard