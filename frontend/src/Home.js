import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import Card from './Card.js';
import axios from 'axios';

const Home = () => {


    const checkoutHandler = async (amount) => {
        const { data: { key } } = await axios.get(`http://localhost:4000/api/getkey`)

        const { data: { order } } = await axios.post(`http://localhost:4000/api/checkout`, {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "6 Pack Programmer",
            description: "For Testing purpose",
            image: "https://saurabh12345.s3.ap-south-1.amazonaws.com/profile_photo1681802472225.png",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Sanjeev Kumar",
                email: "sanjeev.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
        // console.log(window)
    }
    return (
        <Box>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
                <Card amount={5000} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPY_eSaEH7aEeLTVUaBWbhhs8o9uUetT0k-QhLeIAG&s"} checkoutHandler={checkoutHandler} />
                <Card amount={3000} img={"https://www.shutterstock.com/image-photo/camera-260nw-610909205.jpg"} checkoutHandler={checkoutHandler} />
                <Card amount={11000} img={"https://cdn.pixabay.com/photo/2016/03/21/21/37/tv-1271650__340.png"} checkoutHandler={checkoutHandler} />
                <Card amount={10000} img={"https://www.guidingtech.com/wp-content/uploads/Cat-TechDroider.jpg"} checkoutHandler={checkoutHandler} />
            </Stack>
        </Box>
    )
}

export default Home