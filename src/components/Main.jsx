import { Box, Image, Text } from "@chakra-ui/react";

export default function Main(props) {
    return <main>
        <Text as='h2' fontSize='xl' fontWeight='semibold' marginBottom='1rem'>Front-end developer and Data Scientist</Text>
        <Image
            src='photo.jpg'
            alt='Photo of Diego Figueroa Juarez'
            width='10rem'
            height='10rem'
            marginRight='1rem'
            borderRadius='100%'
            objectFit='cover'
            float='left'
        ></Image>
        <Text>I am a web developer and data scientist with a lot of experience in both fields, I mainly use React, chakraUI, Firebase, Keras, Pytorch as my tools.</Text>
        <Text>I consider myself resilient by nature, as I'm always looking forward to improve and challenge myself while honing my soft and hard skills in my life.</Text>
        <Box style={{ clear: 'both' }} marginBottom='1rem'></Box>

        <Text as='h2' fontSize='2xl' fontWeight='semibold'>Projects</Text>
    </main>
}