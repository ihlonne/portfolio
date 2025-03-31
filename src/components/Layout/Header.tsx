import {
  Box,
  Flex,
  Image,
  Link,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import logo from '../../assets/logo.svg';
import { useState } from 'react';

function Header() {
  const CV = '/CV.pdf'; // Make sure this file is in your public folder
  const [active, setActive] = useState('');

  const navItems = [
    'projects',
    'about',
    'contact',
    'cv',
  ] as const;

  const handleNavigation = (section: string) => {
    if (section !== 'cv') {
      setActive(section);
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Flex
      align='center'
      justify='center'
      w='100%'
      gap={{ base: '0', md: 10 }}
      pt='8'
    >
      <Box
        bg='brand.900'
        height='2px'
        w={{ base: 0, md: '100%' }}
      />
      <Link
        href='#top'
        _hover={{ opacity: 0.8 }}
        flexShrink={0}
        display={{ base: 'none', md: 'block' }}
      >
        <Image
          src={logo}
          alt='Personal logo'
          h='28px'
          w='28px'
        />
      </Link>

      <UnorderedList
        styleType='none'
        display='inline-flex'
        justifyContent='center'
        gap='8'
        color='neutrals.light'
        textTransform='uppercase'
        fontWeight='500'
        fontSize='xs'
        m='0'
      >
        {navItems.map((item) => (
          <Box key={item} position='relative'>
            {item === 'cv' ? (
              <Link
                href={CV}
                download='CV.pdf'
                fontWeight='bold'
                color='white'
                _hover={{
                  color: 'brand.900',
                  textDecoration: 'none',
                }}
              >
                <ListItem>{item}</ListItem>
              </Link>
            ) : (
              <Link
                as='button'
                onClick={() =>
                  handleNavigation(item)
                }
                fontWeight='bold'
                color='white'
                _hover={{
                  color: 'brand.900',
                  textDecoration: 'none',
                }}
                textTransform='uppercase'
              >
                <ListItem>{item}</ListItem>
              </Link>
            )}
            {active === item && (
              <Box
                position='absolute'
                left='0'
                bottom='-5px'
                width='100%'
                height='2px'
                bg='brand.900'
                transition='0.3s ease-in-out'
              />
            )}
          </Box>
        ))}
      </UnorderedList>
      <Box
        bg='brand.900'
        height='2px'
        w={{ base: 0, md: '100%' }}
      />
    </Flex>
  );
}

export default Header;
