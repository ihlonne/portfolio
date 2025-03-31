import {
  Box,
  Flex,
  Link,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

function Footer() {
  return (
    <Flex
      align='center'
      justify='center'
      w='100%'
      p='2.5rem 0'
      gap='10'
      id='footer'
    >
      <Box
        bg='brand.900'
        height='2px'
        w='100%'
        display={{ base: 'none', md: 'block' }}
      />

      <UnorderedList
        styleType='none'
        display='inline-flex'
        gap='8'
        color='neutrals.light'
        textTransform='uppercase'
        fontWeight='500'
        fontSize='xs'
      >
        <Link
          href='https://github.com/ihlonne'
          isExternal
          fontWeight='bold'
          color='white'
          _hover={{ textDecoration: 'none' }}
        >
          <ListItem>GitHub</ListItem>
        </Link>
        <Link
          href='https://www.linkedin.com/in/ingelinnhelenelonne/'
          isExternal
          fontWeight='bold'
          color='white'
          _hover={{ textDecoration: 'none' }}
        >
          <ListItem>LinkedIn</ListItem>
        </Link>
        <Link
          href='mailto:ingelinn92@gmail.com'
          fontWeight='bold'
          color='white'
          _hover={{ textDecoration: 'none' }}
        >
          <ListItem>GMail</ListItem>
        </Link>
      </UnorderedList>
      <Box
        bg='brand.900'
        height='2px'
        maxW='100%'
        w='100%'
        display={{ base: 'none', md: 'block' }}
      />
    </Flex>
  );
}

export default Footer;
