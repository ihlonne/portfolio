import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

function Contact() {
  return (
    <Container
      maxW='container.xl'
      centerContent
      id='contact'
    >
      <Flex
        direction='column'
        justify='center'
        align='center'
        h='100dvh'
        m='0 auto'
        mt={{ base: '4rem', md: 0 }}
      >
        <Heading as='h1' size='2xl'>
          CONTACT
          <Text as='span' color='brand.900'>
            .
          </Text>
          Me
        </Heading>
        <Text
          fontSize='md'
          my='4rem'
          maxW='540px'
          textAlign='center'
        >
          For collaboration, a chat, a coffee, or
          a game — I'm just a message away. Just
          scroll a bit further for contact
          information.
        </Text>

        <Box
          as='button'
          fontSize='3xl'
          animation='bounce 2s infinite'
          onClick={() => {
            const footer =
              document.getElementById('footer');
            footer?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          👇
        </Box>
      </Flex>
    </Container>
  );
}

export default Contact;
