import {
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import nexbid from '../assets/NexBid.png';
import knittingcasually from '../assets/knittingcasually.png';
import rainydays from '../assets/rainydays.png';
import blink from '../assets/blink.png';
import ProjectCard from '../components/UI/ProjectCard';

const projects = [
  {
    title: 'NexBid',
    image: nexbid,
    description:
      'NexBid is a React-based auction marketplace that allows users to create listings, place bids, and manage their profiles. It features an intuitive UI, real-time bidding updates, and a seamless user experience for both buyers and sellers.',
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
      'RainyDays is an e-commerce site for a fictional rainwear brand. It features a full shopping experience, product listings, and a clean UI.',
    live: 'https://ihl-rainy-days-v2.netlify.app/',
    github:
      'https://github.com/ihlonne/rainydays-v2',
    tags: ['html', 'css', 'javascript', 'api'],
  },
  {
    title: 'BLiNK',
    image: blink,
    description:
      'A basic e-commerce site where I was introduced to Next.js and TypeScript.',
    live: 'https://jsfw-2025-v1-ihlonne.vercel.app/',
    github:
      'https://github.com/NoroffFEU/jsfw-2025-v1-ihlonne',
    tags: [
      'next.js',
      'typescript',
      'tailwind',
      'api',
    ],
  },
];

function Projects() {
  return (
    <Container
      maxW='container.xl'
      centerContent
      id='projects'
    >
      <Flex
        direction='column'
        align='flex-start'
        w='100%'
        mt={{ base: '4rem', md: 0 }}
      >
        <Heading as='h1' mb='4rem' size='2xl'>
          BROWSE
          <Text as='span' color='brand.900'>
            .
          </Text>{' '}
          Projects
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={12}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
}

export default Projects;
