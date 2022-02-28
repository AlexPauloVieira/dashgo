import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Alex Paulo</Text>
        <Text color='gray.300' fontSize='small'>
          alexpaulovieira9@gmail.com
        </Text>
      </Box>
      <Avatar
        size='md'
        name='Alex Paulo'
        src='https://avatars.githubusercontent.com/u/56418586?s=400&u=ee43ad6753d34b6596d565582ea19732b5704666&v=4'
      />
    </Flex>
  );
}
