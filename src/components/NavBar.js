import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import NavCategories from "./NavCategories";
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

function Navbar() {
  return (
    <nav>
       <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.900"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Link to="/">
          <Text fontSize="xl" fontWeight="bold" ml={2}>
            Bakugo Store
          </Text>
        </Link>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          aria-label="Open menu"
          icon={<ArrowBackIcon />}
          size="md"
          variant="ghost"
        />
      </Box>

      <NavCategories />
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    </Flex>
    </nav>
  );
}

export default Navbar;