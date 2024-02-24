import { WrapItem, Wrap, Center } from "@chakra-ui/react";

import { AppImageCard } from "../DataDisplay/AppImageCard";
import { appCards } from "../../schemas/profileConstants";

export const AppsDisplay = () => (
  <Center w="100%">
    <Wrap spacing={5} maxW="80em" m="0 2em" justify="center">
      {appCards.map((c) => {
        return (
          <WrapItem key={c.name}>
            <AppImageCard
              src={c.src}
              name={c.name}
              href={c.href}
              tech={c.tech}
            />
          </WrapItem>
        );
      })}
    </Wrap>
  </Center>
);
