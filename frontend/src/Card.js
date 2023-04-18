import React from 'react';
import { Button, VStack, Image, Text } from '@chakra-ui/react'

const Card = ({ amount, img, checkoutHandler }) => {
    return (
        <VStack>
            <Image src={img} boxSize={"64"} />
            <Text>₹{amount}</Text>
            <Button onClick={() => checkoutHandler(amount)}>Buy Now</Button>
        </VStack>
    )
}

export default Card