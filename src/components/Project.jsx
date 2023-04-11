import { Box, Image, Link, Text, Wrap } from "@chakra-ui/react";

export default function Project(props) {
    const { name, description, link, images } = props

    return <Box>
        <Text as='h3' fontSize='xl' fontWeight='semibold'>{name} {link}</Text>
        <Text marginBottom='1rem'>{description}</Text>

        <Wrap spacing='1.5rem' justify='center'>
            {images.map((img, i) =>
                <figure key={i}>
                    <Link href={img.src} isExternal>
                        <Image
                            src={img.src}
                            alt={img.caption}
                            {...img}
                            boxShadow='base'
                        ></Image>
                    </Link>
                    <Text
                        as='figcaption'
                        fontSize='sm'
                        opacity='0.5'
                        textAlign='center'
                        marginTop='0.5rem'
                    >{img.caption}</Text>
                </figure>
            )}
        </Wrap>
    </Box >
}