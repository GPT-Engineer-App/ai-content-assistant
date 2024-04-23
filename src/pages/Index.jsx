import { Box, Button, Container, Heading, Image, Link, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { FaChrome, FaCog, FaRegHandPointer, FaRegLifeRing } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Robo-Writer: Your AI-Powered Content Sidekick
        </Heading>
        <Image src="https://images.unsplash.com/photo-1708447134618-bfb5d207ed95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjBleHRlbnNpb258ZW58MHx8fHwxNzEzODM5NzU1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Robo-Writer Chrome Extension" />
        <Text fontSize="lg">Robo-Writer is a powerful Chrome extension that leverages advanced AI language models to supercharge your writing and research processes.</Text>
        <Box as="section">
          <Heading as="h2" size="xl">
            Features
          </Heading>
          <List spacing={3}>
            <ListItem>
              <FaRegHandPointer /> AI Content Generation: Get creative assistance with various types of content.
            </ListItem>
            <ListItem>
              <FaRegHandPointer /> Intelligent Summarization: Condense lengthy documents into summaries.
            </ListItem>
            <ListItem>
              <FaRegHandPointer /> Versatile Text Transformation: Rephrase sentences, change tone, and simplify language.
            </ListItem>
          </List>
        </Box>
        <Box as="section">
          <Heading as="h2" size="xl">
            Installation
          </Heading>
          <Text>Visit the Chrome Web Store and search for "Robo-Writer" to add it to Chrome.</Text>
        </Box>
        <Box as="section">
          <Heading as="h2" size="xl">
            Usage
          </Heading>
          <List spacing={3}>
            <ListItem>Content Generation: Highlight text, right-click, and select "Generate Content".</ListItem>
            <ListItem>Summarization: Highlight and right-click to summarize text.</ListItem>
            <ListItem>Text Transformation: Highlight text for transformation options.</ListItem>
          </List>
        </Box>
        <Box as="section">
          <Heading as="h2" size="xl">
            Customization
          </Heading>
          <Text>Access settings via the Chrome extensions menu to select AI models and manage API keys.</Text>
        </Box>
        <Box as="section">
          <Heading as="h2" size="xl">
            Support
          </Heading>
          <Text>For support, visit our support page (link to be added).</Text>
        </Box>
        <Box as="section">
          <Heading as="h2" size="xl">
            Privacy Policy
          </Heading>
          <Text>Robo-Writer respects your privacy and handles user data with care.</Text>
        </Box>
        <Link href="#" isExternal>
          <Button rightIcon={<FaChrome />} colorScheme="blue">
            Install Robo-Writer
          </Button>
        </Link>
        <Link href="#" isExternal>
          <Button rightIcon={<FaCog />} colorScheme="green">
            Settings
          </Button>
        </Link>
        <Link href="#" isExternal>
          <Button rightIcon={<FaRegLifeRing />} colorScheme="teal">
            Get Support
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
