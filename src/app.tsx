import React, { useEffect, useState } from "react";
import { Flex, Box, Text, Heading, Divider } from "@chakra-ui/react";
import parseResults from "./parse-results";
import { Results } from "./types";

export default function App() {
  const [results, setResults] = useState<Results>(null);

  useEffect(() => {
    async function refresh() {
      const result = await fetch(window.location.href);
      const body = await result.text();
      const html = document.createElement("html");
      html.innerHTML = body;
      const text = html.querySelector("pre").innerHTML;
      const newResults = parseResults(text);
      setResults(newResults);
    }

    refresh().then(/* do nothing */);
    const interval = setInterval(refresh, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex w="full" minH="full">
      <Box w={60} flexShrink={0} background="gray.300" p={4}>
        <Heading mb={2}>Election Results</Heading>
        <Text>Kind: {results?.kind}</Text>
        <Text>Date: {results?.date?.toLocaleDateString()}</Text>
        <Text>Data Last Updated: {results?.lastUpdated}</Text>
        <Text>Page Last Updated: {results?.lastUpdated}</Text>
        <Divider my={4} color="gray.500" />
        {/* List of races/measures */}
      </Box>
      <Box flex={1} />
    </Flex>
  );
}
