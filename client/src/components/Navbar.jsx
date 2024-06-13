import { Box, Flex, Spacer, Link, Heading, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex p="4" bg="beige" alignItems="center">
      <Box p="2">
        <Heading size="md" color="228B22" fontSize="26px" fontFamily='Mulish'>Harvey Tree Farm</Heading>
      </Box>
      <Spacer />
      <Box display={{ base: "none", md: "block" }} fontFamily='Space Mono'>
        <Link color="228B22" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer" }} mr="6" href='/'>Home</Link>
        <Link color="228B22" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer" }} mr="6" href='/about'>About</Link>
        <Link color="228B22" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer" }} mr="6" href='/services'>Services</Link>
        <Link color="228B22" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer" }} mr="6" href='/gallery'>Gallery</Link>
      </Box>
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
        color="black"
        bg="beige"
        _hover={{ bg: "transparent" }}
        fontSize='20px'
        height='40px'
        width='40px'
        p='5px'
        alignItems='center'
        justifyContent='center'
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="beige" fontFamily='Space Mono'>
            <DrawerCloseButton color="black" fontSize='16px' height='16px' width='24px' mt='16px' bg='transparent' />
            <DrawerHeader borderBottomWidth="1px" color="#228B22" bg='228B22'>
              <Flex alignItems="center">
                <Image src="/pine-tree-icon.png" alt="Icon" boxSize="30px" mr="10px" />
                <Heading size="md" color="black">Menu</Heading>
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <Link display="block" color="228B22" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)" }} py="2" onClick={onClose} href='/'>Home</Link>
              <Link display="block" color="228B22" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)" }} py="2" onClick={onClose} href='/about'>About</Link>
              <Link display="block" color="228B22" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)" }} py="2" onClick={onClose} href='/services'>Services</Link>
              <Link display="block" color="228B22" _hover={{ textDecoration: "none", fontWeight: "bold", fontFamily: 'Space Mono', textShadow: "1px 1px 2px rgba(255,255,255,0.8)" }} py="2" onClick={onClose} href='/gallery'>Gallery</Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
};

export default Navbar;