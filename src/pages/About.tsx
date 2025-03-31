import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

import selfie from '../assets/selfie2.png';

function About() {
  return (
    <Container
      maxW='container.xl'
      centerContent
      id='about'
    >
      <Flex
        direction='column'
        minH='100dvh'
        w='100%'
        justify='center'
        mt={{ base: '4rem', md: 0 }}
      >
        <Flex
          gap='4rem'
          direction={{
            base: 'column',
            lg: 'row',
          }}
          justify='center'
          align='center'
        >
          <Flex
            direction='column'
            justify='center'
            align={{
              base: 'flex-start',
              md: 'flex-end',
            }}
            textAlign={{
              base: 'left',
              md: 'right',
            }}
            fontSize={{ base: 'sm', md: 'md' }}
            paddingRight={{
              base: 0,
              md: '4rem',
            }}
          >
            <Heading
              as='h1'
              size='2xl'
              mb='4'
              paddingRight={{
                base: 0,
                md: '4rem',
              }}
            >
              WHO
              <Text as='span' color='brand.900'>
                .
              </Text>
              Am I?
            </Heading>
            <Flex
              direction='column'
              borderRightWidth={{
                base: 0,
                md: '3px',
              }}
              borderRightStyle='solid'
              borderRightColor='brand.900'
              gap='2'
              paddingRight={{
                base: 0,
                md: '4rem',
              }}
            >
              <Text>
                Hi, I’m{' '}
                <Text
                  as='span'
                  color='brand.900'
                  fontWeight='bold'
                >
                  Ingelinn Helene
                </Text>{' '}
                — and I really love making things
                for the internet.
              </Text>

              <Text>
                It all started back when I was a
                teenager, endlessly tweaking
                Tumblr themes and getting lost in
                the world of{' '}
                <Text as='span' color='brand.900'>
                  HTML
                </Text>
                ,{' '}
                <Text as='span' color='brand.900'>
                  CSS
                </Text>
                , and{' '}
                <Text as='span' color='brand.900'>
                  Photoshop
                </Text>
                . I didn’t know it back then, but
                those hours spent customizing
                layouts and colors were planting
                the seeds of something bigger.
              </Text>

              <Text>
                Finding the correct career choice
                for me has been hard, but today,
                I’m finally on a path that{' '}
                <Text
                  as='span'
                  color='brand.900'
                  fontWeight='semibold'
                >
                  feels right
                </Text>
                . Even though I’m certified as a
                data electronics technician, it’s
                the creative side of tech that
                truly clicks with me —{' '}
                <Text as='span' color='brand.900'>
                  front-end development
                </Text>{' '}
                and{' '}
                <Text as='span' color='brand.900'>
                  UX/UI design
                </Text>
                .
              </Text>

              <Text>
                When I’m not learning or coding,
                you can usually find me doing
                something else that brings me joy
                — working out, gaming, knitting,
                reading, or baking something
                delicious with my sourdough
                starter,{' '}
                <Text
                  as='span'
                  color='brand.900'
                  fontStyle='italic'
                >
                  Braum
                </Text>
                .
              </Text>

              <Text>
                Still figuring it all out, but{' '}
                <Text
                  as='span'
                  color='brand.900'
                  fontWeight='semibold'
                >
                  happy to be on the journey 💫
                </Text>
              </Text>
            </Flex>
          </Flex>
          <Image
            src={selfie}
            alt='cartoon selfie of developer'
            maxW='280px'
            display={{
              base: 'none',
              md: 'block',
            }}
          />
        </Flex>
      </Flex>
    </Container>
  );
}

export default About;
