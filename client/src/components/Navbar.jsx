import { Box, Flex, Spacer, Link, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex p="4" bg="#228B22" alignItems="center">
      <Box p="2">
        <Heading size="md" color="beige" fontSize="35px" fontFamily='Mulish'>Harvey Tree Farm</Heading>
      </Box>
      <Spacer />
      <Box fontFamily='Space Mono'>
        <Link color="beige" _hover={{textDecoration: "none", fontWeight: "bold", fontFamily:'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer"}} mr="6">Home</Link>
        <Link color="beige" _hover={{textDecoration: "none", fontWeight: "bold", fontFamily:'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer"}} mr="6">About</Link>
        <Link color="beige" _hover={{textDecoration: "none", fontWeight: "bold", fontFamily:'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer"}} mr="6">Services</Link>
        <Link color="beige" _hover={{textDecoration: "none", fontWeight: "bold", fontFamily:'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer"}} mr="6">Contact</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
