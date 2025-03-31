import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';

import nexbid from '../assets/NexBid.png';
import knittingcasually from '../assets/knittingcasually.png';
import rainydays from '../assets/rainydays.png';

const projects = [
  {
    title: 'NexBid',
    image: nexbid,
    description:
      'NexBid is a React-based auction marketplace that allows users to create listings, place bids, and manage their profiles. It features an intuitive UI, real-time bidding updates, and a seamless user experience for both buyers and sellers. ',
    live: 'https://sp2-ihlonne.netlify.app/',
    github:
      'https://github.com/ihlonne/SP2-ihlonne',
    tags: ['react', 'chakra ui', 'api'],
  },
  {
    title: 'Knitting Casually',
    image: knittingcasually,
    description:
      'Knitting Casually is a blog-style site built for a fictional knitting enthusiast. It showcases blog posts, categories, and modern design with accessibility in mind.',
    live: 'https://fed1-pe1-ihlonne.netlify.app/',
    github:
      'https://github.com/ihlonne/PE1-ihlonne',
    tags: ['html', 'css', 'javascript', 'api'],
  },
  {
    title: 'RainyDays',
    image: rainydays,
    description:
      'RainyDays is an e-commerce site for a fictional rainwear brand. It features a full shopping experience, product listings, and a clean UI. ',
    live: 'https://ihl-rainy-days-v2.netlify.app/',
    github:
      'https://github.com/ihlonne/rainydays-v2',
    tags: ['html', 'css', 'javascript', 'api'],
  },
];

function Projects() {
  const [currentSlide, setCurrentSlide] =
    useState(0);
  const [sliderRef, slider] =
    useKeenSlider<HTMLDivElement>({
      initial: 0,
      loop: true,
      slides: {
        perView: 1,
        spacing: 24,
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    });

  return (
    <Container
      maxW='container.xl'
      centerContent
      id='projects'
    >
      <Flex
        direction='column'
        justify='center'
        align='flex-start'
        minH='100dvh'
        w='100%'
        m='0 auto'
        mt={{ base: '4rem', md: 0 }}
      >
        <Heading as='h1' mb='4rem' size='2xl'>
          BROWSE
          <Text as='span' color='brand.900'>
            .
          </Text>
          Projects
        </Heading>

        <Box w='100%' overflow='hidden'>
          <Box
            ref={sliderRef}
            className='keen-slider'
          >
            {projects.map((project) => (
              <Flex
                direction={{
                  base: 'column',
                  md: 'row',
                }}
                key={project.title}
                className='keen-slider__slide'
                gap='4'
                minH='70vh'
                align='center'
              >
                <Image
                  src={project.image}
                  alt={`screenshot of ${project.title}`}
                  maxW={{
                    base: '100%',
                    lg: '50%',
                  }}
                  borderRadius='lg'
                />
                <Flex
                  direction='column'
                  w={{ base: '100%', md: '50%' }}
                >
                  <Heading
                    as='h2'
                    size='md'
                    textTransform='uppercase'
                  >
                    {project.title}
                  </Heading>
                  <Flex gap='2' mt='2'>
                    {project.tags.map((tag) => (
                      <Badge>{tag}</Badge>
                    ))}
                  </Flex>
                  <Text
                    pl={{
                      base: '1rem',
                      md: '2rem',
                    }}
                    borderLeftWidth='3px'
                    borderLeftStyle='solid'
                    borderLeftColor='brand.900'
                    my='3rem'
                  >
                    {project.description}
                  </Text>
                  <Flex gap='4' fontWeight='bold'>
                    <Link
                      href={project.live}
                      isExternal
                      _hover={{
                        textDecoration: 'none',
                      }}
                    >
                      Live Preview
                    </Link>
                    <Link
                      href={project.github}
                      isExternal
                      _hover={{
                        textDecoration: 'none',
                      }}
                    >
                      GitHub Repository
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Box>
        </Box>

        {/* Pagination dots */}
        <Flex
          mt='8'
          justify='center'
          gap='2'
          w='100%'
        >
          {projects.map((_, idx) => (
            <Box
              as='button'
              p='2'
              borderRadius='full'
              bg={
                currentSlide === idx
                  ? 'brand.900'
                  : 'gray.300'
              }
              onClick={() =>
                slider.current?.moveToIdx(idx)
              }
              _hover={{ bg: 'brand.700' }}
              aria-label={`Go to slide ${
                idx + 1
              }`}
            />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

export default Projects;
