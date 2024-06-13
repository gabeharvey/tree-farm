import { Box, Flex, Heading, Text, Image, VStack } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box fontFamily="Space Mono" color="beige" bg="skyblue" minHeight="100vh">
      <Flex
        direction="column"
        align="center"
        justify="center"
        bgAttachment="fixed"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgImage="url('/services-background.png')"
        py="20"
      >
        <Box bg="transparent" p="10" borderRadius="md">
          <Heading size="xl" fontFamily="Mulish" textAlign="center" mb="4" color='white'>
            Our Services
          </Heading>
          <Text fontSize="lg" textAlign="center" mb="6" color='white'>
            We offer a range of services to help you with your forestry and lumber needs.
          </Text>
        </Box>
      </Flex>

      <Box p="6">
        <VStack spacing="8" align="stretch">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Image
              src="/pine-tree-icon.png"
              alt="Tree Planting"
              boxSize={{ base: "100%", md: "50%" }}
              borderRadius="md"
              boxShadow="lg"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            />
            <Box p="6">
              <Heading size="lg" mb="4">
                Tree Planting
              </Heading>
              <Text fontSize="md">
                Our expert team offers tree planting services to ensure your loblolly pine trees are planted correctly for optimal growth and health.
              </Text>
            </Box>
          </Flex>

          <Flex direction={{ base: "column-reverse", md: "row" }} align="center">
            <Box p="6">
              <Heading size="lg" mb="4">
                Forest Management
              </Heading>
              <Text fontSize="md">
                We provide comprehensive forest management services, including planning, maintenance, and conservation to promote a healthy and sustainable forest.
              </Text>
            </Box>
            <Image
              src="/pine-tree-icon.png"
              alt="Forest Management"
              boxSize={{ base: "100%", md: "50%" }}
              borderRadius="md"
              boxShadow="lg"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            />
          </Flex>

          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Image
              src="/pine-tree-icon.png"
              alt="Lumber Production"
              boxSize={{ base: "100%", md: "50%" }}
              borderRadius="md"
              boxShadow="lg"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            />
            <Box p="6">
              <Heading size="lg" mb="4">
                Lumber Production
              </Heading>
              <Text fontSize="md">
                We offer top-quality lumber production services, transforming our loblolly pine trees into high-quality lumber for various applications.
              </Text>
            </Box>
          </Flex>

          <Flex direction={{ base: "column-reverse", md: "row" }} align="center">
            <Box p="6">
              <Heading size="lg" mb="4">
                Consulting Services
              </Heading>
              <Text fontSize="md">
                Our experts provide consulting services to help you with your forestry projects, offering advice and solutions tailored to your specific needs.
              </Text>
            </Box>
            <Image
              src="/pine-tree-icon.png"
              alt="Consulting Services"
              boxSize={{ base: "100%", md: "50%" }}
              borderRadius="md"
              boxShadow="lg"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            />
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

export default Services;
