import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

import selfie from '../assets/selfie.png';

function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Container
      maxW='container.xl'
      centerContent
      id='home'
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align='center'
        justify='center'
        minH='100dvh'
        gap='10'
        w='100%'
        mt={{ base: '4rem', md: 0 }}
      >
        <Image
          src={selfie}
          alt='cartoon image of the developer'
          maxH={{ base: '230px', md: '320px' }}
        />
        <Flex
          direction='column'
          w={{ base: '90%', md: '50%' }}
        >
          <Flex
            direction='column'
            textAlign={{
              base: 'center',
              md: 'left',
            }}
          >
            <Heading
              as='h1'
              size={{ base: '2xl', md: '3xl' }}
            >
              INGELINN H
              <Text as='span' color='brand.900'>
                .
              </Text>{' '}
              Lønne
            </Heading>
            <Text
              fontFamily='italic'
              color='brand.900'
              isTruncated
              wordBreak='break-word'
              whiteSpace='normal'
              letterSpacing={{
                base: '4px',
                md: '10px',
              }}
              fontSize={{ base: 'md', md: 'lg' }}
            >
              /-in•geh•linn he•le•neh /
            </Text>
          </Flex>
          <Flex
            direction='column'
            m={{ base: '2rem 0', md: '3rem 0' }}
          >
            <Text
              pl={{ base: 0, md: '2.5rem' }}
              borderLeftWidth={{
                base: 0,
                md: '3px',
              }}
              borderLeftStyle='solid'
              borderLeftColor='brand.900'
              textAlign={{
                base: 'center',
                md: 'left',
              }}
            >
              Based in Bergen, Norway, I'm a
              front-end developer who cares about
              accessibility, thoughtful design,
              and building apps that matter.
              Currently diving into React and
              Chakra UI, and always looking to
              learn. 🌸
            </Text>
          </Flex>
          <Button
            width='fit-content'
            bg='brand.900'
            color='light'
            fontWeight='600'
            textTransform='uppercase'
            fontSize='xs'
            _hover={{
              bg: 'transparent',
            }}
            alignSelf={{
              base: 'center',
              md: 'unset',
            }}
            onClick={() =>
              scrollToSection('projects')
            }
          >
            View Projects
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Home;
