import { Box, Divider, Icon, Image, Link, Text } from '@chakra-ui/react';
import Project from './Project';
import projects from '../projects';

export default function Main(props) {
  return (
    <>
      <section>
        <Text as="h2" fontSize="2xl" fontWeight="semibold" marginBottom="1rem">
          Software Developer
        </Text>
        <Image
          src="https://raw.githubusercontent.com/magirics/portfolio/main/public/photo.jpg"
          alt="Photo of Diego Figueroa Juarez"
          width="10rem"
          height="10rem"
          marginRight="1rem"
          borderRadius="100%"
          objectFit="cover"
          float="left"
        ></Image>
        <Text>
          Software Developer with experience building full-stack applications
          and SAP solutions. Skilled in TypeScript, React, Next.js, ABAP, and
          AWS. Experienced in developing enterprise systems, SaaS platforms, and
          automation tools.
        </Text>
        <Box style={{ clear: 'both' }}></Box>
      </section>
      <Divider borderColor="black"></Divider>
      <section>
        <Text as="h2" fontSize="2xl" fontWeight="semibold">
          Projects
        </Text>
        {projects.map((p, i) => (
          <Project
            key={i}
            name={p.name}
            description={p.description}
            link={p.link}
            images={p.images}
          ></Project>
        ))}
      </section>
    </>
  );
}
