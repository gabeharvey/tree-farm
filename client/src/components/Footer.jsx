import { Box, Flex, Link, Heading, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="beige" color="black" p="4" fontFamily="Space Mono">
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
        <Box textAlign={{ base: "center", md: "left" }} mb={{ base: 4, md: 0 }}>
          <Heading size="md" fontSize="20px" fontFamily='Mulish'>Harvey Tree Farm</Heading>
          <Text mt="2" fontSize="14px">Winchester, Mississippi, 39367</Text>
          <Text mt="2" fontSize="14px">Phone: (601) 323-2411</Text>
          <Text mt="2" fontSize="14px">Email: harvey544@gmail.com</Text>
        </Box>
        <Box display={{ base: "block", md: "flex" }} alignItems="center">
          <Link color="black" _hover={{ textDecoration: "none", fontWeight: "bold", textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer" }} mr={{ base: 0, md: 6 }} mb={{ base: 2, md: 0 }}>Privacy Policy</Link>
          <Link color="black" _hover={{ textDecoration: "none", fontWeight: "bold", textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer" }} mr={{ base: 0, md: 6 }} mb={{ base: 2, md: 0 }}>Terms of Service</Link>
          <Link color="black" _hover={{ textDecoration: "none", fontWeight: "bold", textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer" }} mr={{ base: 0, md: 6 }} mb={{ base: 2, md: 0 }}>Contact Us</Link>
        </Box>
      </Flex>
      <Text textAlign="center" mt="4" fontSize="12px">&copy; {new Date().getFullYear()} Harvey Tree Farm. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
