import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Gallery = () => {
  const images = [
    { src: "/pine-tree-icon.png", alt: "Loblolly Pine Seedling" },
    { src: "/pine-tree-icon.png", alt: "Tree Farm Landscape" },
    { src: "/pine-tree-icon.png", alt: "Lumber Production" },
    { src: "/pine-tree-icon.png", alt: "Forest Management" },
    { src: "/pine-tree-icon.png", alt: "Planting Process" },
    { src: "/pine-tree-icon.png", alt: "Team at Work" },
  ];

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
        bgImage="url('/loblolly-pine-farm.png')"
        py="20"
      >
        <Box bg="transparent" p="10" borderRadius="md">
          <Heading size="xl" fontFamily="Mulish" textAlign="center" mb="4" color="white">
            Gallery
          </Heading>
          <Text fontSize="lg" textAlign="center" mb="6" color="white">
            Explore our collection of images showcasing our farm, our team, and our work.
          </Text>
        </Box>
      </Flex>

      <Box p="6">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing="8">
          {images.map((image, index) => (
            <Box key={index} position="relative">
              <Image
                src={image.src}
                alt={image.alt}
                borderRadius="md"
                boxShadow="lg"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.05)" }}
              />
              <Text
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="rgba(0, 0, 0, 0.5)"
                color="white"
                fontSize="md"
                p="2"
                textAlign="center"
                borderBottomRadius="md"
              >
                {image.alt}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Gallery;
