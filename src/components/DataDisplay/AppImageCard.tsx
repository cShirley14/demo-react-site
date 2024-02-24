import { Box, Link, Image, Text, chakra, BoxProps } from "@chakra-ui/react";
import { useDesktopView } from "../../hooks/useDesktop";

interface AppImageCardProps extends BoxProps {
  src: string;
  name: string;
  href: string;
  tech: string;
}

export const AppImageCard = ({
  src,
  name,
  href,
  tech,
  ...props
}: AppImageCardProps) => {
  const [isDesktopView] = useDesktopView();
  const overlayBoxEffects = {
    className: "mid",
  };
  const overlayBoxDesktopEffects = {
    opacity: 0,
    _hover: { opacity: 1 },
  };

  const overlayImgEffects = {
    className: "img",
    opacity: 1,
  };
  const overlayMobileEffects = {
    opacity: 0.3,
  };

  return (
    <Box position="relative" className="ctnr" {...props}>
      <Link href={href}>
        <Image
          alt={name}
          // className="img"
          {...(isDesktopView ? overlayImgEffects : overlayMobileEffects)}
          src={src}
          w="30em"
          h="15em"
          objectFit="cover"
          borderRadius="lg"
          display="block"
          // opacity="1"
          transition=".5s ease"
        />
        <Box
          {...(!isDesktopView ? overlayBoxEffects : overlayBoxDesktopEffects)}
          transition=".5s ease"
          // opacity="0"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center">
          <Text fontSize="lg" fontWeight="bold">
            <chakra.span color="green.300">{name}</chakra.span>
            <br />({tech})
          </Text>
        </Box>
      </Link>
    </Box>
  );
};
