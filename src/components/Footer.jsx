import { Box, Link, Text } from "@chakra-ui/react";

export default function Footer(props) {
    return <footer>
      <Text as='h2' fontSize='2xl' fontWeight='semibold'>Contact</Text>
      <Box width='20rem' display='inline-block' >
        <Text fontWeight='semibold'>Email:</Text>
        <Link href='mailto:diego.undefined@gmail.com'>diego.undefined@gmail.com</Link>
      </Box>
      <Box display='inline-block'>
        <Text fontWeight='semibold'>Github:</Text>
        <Link href='https://github.com/magirics' isExternal>magirics</Link>
      </Box>
      <Box></Box>
      <Box width='20rem' display='inline-block'>
        <Text fontWeight='semibold'>Phone:</Text>
        <Link href='tel:+51-968-973-223'>+51-968-973-223</Link>
      </Box>
      <Box display='inline-block'>
        <Text fontWeight='semibold'>LinkedIn:</Text>
        <Link href='https://linkedin.com/in/diego-figueroa-juarez-6b0986270' isExternal>Diego Figueroa</Link>
      </Box>
    </footer>
  }