import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { Project } from '../../types/types';

type ProjectCardProps = Project;

function ProjectCard({
  title,
  image,
  description,
  live,
  github,
  tags,
}: ProjectCardProps) {
  const borderColor = useColorModeValue(
    'brand.900',
    'brand.500'
  );

  return (
    <Box
      p={4}
      borderRadius='lg'
      transition='all 0.2s ease-in-out'
      _hover={{
        transform: 'scale(1.02)',
        boxShadow: '2xl',
      }}
    >
      <Image
        src={image}
        alt={`Screenshot of ${title}`}
        borderRadius='lg'
        mb={4}
      />
      <Heading
        as='h3'
        size='md'
        textTransform='uppercase'
        mb={2}
      >
        {title}
      </Heading>
      <Flex gap={2} wrap='wrap' mb={4}>
        {tags.map((tag) => (
          <Badge key={tag} bg='gray.200'>
            {tag}
          </Badge>
        ))}
      </Flex>
      <Text
        borderLeft='3px solid'
        borderColor={borderColor}
        pl={4}
        mb={6}
      >
        {description}
      </Text>
      <Stack direction='row' spacing={4}>
        <Button
          as={Link}
          href={live}
          isExternal
          size='sm'
          bg='brand.100'
          _hover={{
            bg: 'transparent',
            color: 'light',
          }}
        >
          Live Preview
        </Button>
        <Button
          as={Link}
          href={github}
          isExternal
          size='sm'
          variant='outline'
          color='light'
        >
          GitHub
        </Button>
      </Stack>
    </Box>
  );
}

export default ProjectCard;
