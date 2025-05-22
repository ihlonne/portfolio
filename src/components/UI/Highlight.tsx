import { Text } from '@chakra-ui/react';

const Highlight = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Text
      as='span'
      color='brand.900'
      fontWeight='semibold'
    >
      {children}
    </Text>
  );
};
export default Highlight;
