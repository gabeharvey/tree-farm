import { Box, Flex, Spacer, Link, Heading, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex p="4" bg="#228B22" alignItems="center">
      <Box p="2">
        <Heading size="md" color="beige" fontSize="26px" fontFamily='Mulish'>Harvey Tree Farm</Heading>
      </Box>
      <Spacer />
      <Box display={{ base: "none", md: "block" }} fontFamily='Space Mono'>
        <Link color="beige" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer" }} mr="6">Home</Link>
        <Link color="beige" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer" }} mr="6">About</Link>
        <Link color="beige" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer" }} mr="6">Services</Link>
        <Link color="beige" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer" }} mr="6">Contact</Link>
        <Link color="beige" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer" }} mr="6">Gallery</Link>
      </Box>
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
        color="beige"
        bg="#228B22"
        _hover={{ bg: "#1e7b1e" }}
        fontSize='20px'
        height='40px'
        width='40px'
        p='5px'
        alignItems='center'
        justifyContent='center'
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="#228B22" fontFamily='Space Mono'>
            <DrawerCloseButton color="#228B22" fontSize='20px' height='20px' width='30px' mt='13px' />
            <DrawerHeader borderBottomWidth="1px" color="#228B22" bg='beige'>
              <Flex alignItems="center">
                <Image src="/public/pine-tree-icon.png" alt="Icon" boxSize="30px" mr="10px" />
                <Heading size="md" color="#228B22">Menu</Heading>
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <Link display="block" color="beige" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)" }} py="2" onClick={onClose}>Home</Link>
              <Link display="block" color="beige" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)" }} py="2" onClick={onClose}>About</Link>
              <Link display="block" color="beige" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)" }} py="2" onClick={onClose}>Services</Link>
              <Link display="block" color="beige" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)" }} py="2" onClick={onClose}>Gallery</Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
};

export default Navbar;