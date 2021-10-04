import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link,
} from "@chakra-ui/react";

// for static pages
// export const config = {
//   unstable_runtimeJS: false,
// };

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Nextjs About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading py="10" fontSize="3em">
        Home Page
      </Heading>
      <HStack py="5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </HStack>
      <Box bg="blue.100" rounded="xl" shadow="md" p="5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
        fugit ad molestias consequatur voluptate officia neque iste reiciendis
        praesentium laudantium? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Hic optio minus porro numquam quae tenetur dolore,
        voluptatem eveniet sint reprehenderit?
      </Box>
    </Container>
  );
}
