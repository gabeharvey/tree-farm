import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const PrivacyPolicy = () => {
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
        bgImage="url('/privacy-policy-background.png')"
        py="20"
      >
        <Box bg="transparent" p="10" borderRadius="md">
          <Heading size="xl" fontFamily="Mulish" textAlign="center" mb="4" color="white">
            Privacy Policy
          </Heading>
          <Text fontSize="lg" textAlign="center" mb="6" color="white">
            Your privacy is important to us. This policy explains how we handle your personal information.
          </Text>
        </Box>
      </Flex>

      <Box p="6">
        <VStack spacing="8" align="stretch">
          <Box p="6" bg="white" borderRadius="md" boxShadow="lg">
            <Heading size="lg" mb="4" color="black">
              Information We Collect
            </Heading>
            <Text fontSize="md" color="black">
              We collect information that you provide directly to us, such as when you create an account, fill out a form, or communicate with us.
            </Text>
          </Box>

          <Box p="6" bg="white" borderRadius="md" boxShadow="lg">
            <Heading size="lg" mb="4" color="black">
              How We Use Information
            </Heading>
            <Text fontSize="md" color="black">
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users.
            </Text>
          </Box>

          <Box p="6" bg="white" borderRadius="md" boxShadow="lg">
            <Heading size="lg" mb="4" color="black">
              Information Sharing
            </Heading>
            <Text fontSize="md" color="black">
              We do not share your personal information with third parties without your consent, except as necessary to provide our services or as required by law.
            </Text>
          </Box>

          <Box p="6" bg="white" borderRadius="md" boxShadow="lg">
            <Heading size="lg" mb="4" color="black">
              Your Choices
            </Heading>
            <Text fontSize="md" color="black">
              You have the right to access, update, and delete your personal information. You can also opt out of receiving certain communications from us.
            </Text>
          </Box>

          <Box p="6" bg="white" borderRadius="md" boxShadow="lg">
            <Heading size="lg" mb="4" color="black">
              Security
            </Heading>
            <Text fontSize="md" color="black">
              We take reasonable measures to protect your information from unauthorized access, loss, misuse, or alteration.
            </Text>
          </Box>

          <Box p="6" bg="white" borderRadius="md" boxShadow="lg">
            <Heading size="lg" mb="4" color="black">
              Changes to This Policy
            </Heading>
            <Text fontSize="md" color="black">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website.
            </Text>
          </Box>

          <Box p="6" bg="white" borderRadius="md" boxShadow="lg">
            <Heading size="lg" mb="4" color="black">
              Contact Us
            </Heading>
            <Text fontSize="md" color="black">
              If you have any questions about this Privacy Policy, please contact us at privacy@yourcompany.com.
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
