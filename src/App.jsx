import { Box, Center, Text } from "@chakra-ui/react";

import scheme from "./scheme.yaml";

export default function App() {
  console.log(scheme);
  return (
    <Box>
      <Center h={"100vh"}>
        <Text>{scheme.nickname}</Text>
      </Center>
    </Box>
  );
}
