import { Box, Flex, Heading, Text, Image, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box fontFamily="Space Mono" color="beige" bg="#228B22" minHeight="100vh">
      <Flex
        direction="column"
        align="center"
        justify="center"
        bgAttachment="fixed"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgImage="url('/loblolly-pine.avif')"
        py="20"
      >
        <Box bg="rgba(0, 0, 0, 0.5)" p="10" borderRadius="md">
          <Heading size="xl" fontFamily="Mulish" textAlign="center" mb="4">
            About Harvey Tree Farm
          </Heading>
          <Text fontSize="lg" textAlign="center" mb="6">
            We are dedicated to providing the highest quality loblolly pine trees used for lumber.
          </Text>
        </Box>
      </Flex>

      <Box p="6">
        <VStack spacing="8" align="stretch">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Image
              src="/loblolly-pine-farm.png"
              alt="Tree Farm"
              boxSize={{ base: "100%", md: "50%" }}
              borderRadius="md"
              boxShadow="lg"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            />
            <Box p="6">
              <Heading size="lg" mb="4">
                Our Mission
              </Heading>
              <Text fontSize="md">
                At Harvey Tree Farm, our mission is to promote environmental sustainability and provide our customers with a wide variety of trees and plants.
              </Text>
            </Box>
          </Flex>

          <Flex direction={{ base: "column-reverse", md: "row" }} align="center">
            <Box p="6">
              <Heading size="lg" mb="4">
                Our History
              </Heading>
              <Text fontSize="md">
                Harvey Tree Farm was established in 1840 with the goal of providing high-quality loblolly pine trees for your lumber needs. Over the years, we have grown to become a trusted name in the community.
              </Text>
            </Box>
            <Image
              src="/black-and-white-lumber.png"
              alt="Tree Farm History"
              boxSize={{ base: "100%", md: "50%" }}
              borderRadius="md"
              boxShadow="lg"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            />
          </Flex>

          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Image
              src="/joe-1.png"
              alt="Our Team"
              boxSize={{ base: "100%", md: "50%" }}
              borderRadius="md"
              boxShadow="lg"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            />
            <Box p="6">
              <Heading size="lg" mb="4">
                Our Team
              </Heading>
              <Text fontSize="md">
                Our dedicated team of professionals are passionate about trees and committed to providing excellent customer service. We work hard to ensure that each customer finds the perfect loblolly pine trees for their lumber needs.
              </Text>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

export default About;
