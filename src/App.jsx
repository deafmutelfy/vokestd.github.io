import { Box, Center, Heading, Image, Link, Text } from "@chakra-ui/react";
import Snowfall from "react-snowfall";

import scheme from "./scheme.json";

export default function App() {
  return (
    <Box>
      <Snowfall />
      <Center h={"100vh"}>
        <Box w={"30vh"}>
          <Center>
            <Image src={scheme.avatar} boxSize={200} borderRadius="full" />
          </Center>
          <Heading size={"lg"} textAlign={"center"} paddingTop={5}>
            {scheme.nickname}
          </Heading>
          <Text fontSize={"xs"} textAlign={"center"}>
            (aka {scheme.fullname})
          </Text>
          <Center paddingTop={8}>
            <Link href={"https://vk.com/" + scheme.profiles.vk} isExternal>
              <Image src={"/vk.png"} boxSize={50} />
            </Link>
            <Box paddingLeft={3} />
            <Link
              href={"https://github.com/" + scheme.profiles.github}
              isExternal
            >
              <Image src={"/github.png"} boxSize={50} />
            </Link>
          </Center>
        </Box>
      </Center>
    </Box>
  );
}
