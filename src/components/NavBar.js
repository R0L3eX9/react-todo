import { Flex, Heading, Spacer, Link } from "@chakra-ui/react"

const NavBar = () => {
  return (
    <Flex bg="#19191E" color="#fff" padding="1rem" align="center">
      <Heading cursor="default">React Todo App</Heading>
      <Spacer/>
      <Link mr="1rem" fontSize="xl" href="https://razvan-maracine.netlify.app/" isExternal>
        About Me
      </Link>
    </Flex>
  );
};

export default NavBar;