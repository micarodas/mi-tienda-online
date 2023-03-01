import React from "react";
import { Box, Image, Badge, Text } from "@chakra-ui/react";

const ItemDetail = ({ product }) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={product.image} alt={product.name} />
    
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {product.category}
              </Box>
            </Box>
    
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              {product.name}
            </Box>
    
            <Box>
              <Text mt="2" color="gray.600" fontSize="md">
                {product.description}
              </Text>
            </Box>
    
            <Box d="flex" mt="2" alignItems="center">
              <Text fontWeight="semibold" fontSize="lg" mr="2">
                ${product.price}
              </Text>

            </Box>
          </Box>
        </Box>
      );
};

export default ItemDetail;