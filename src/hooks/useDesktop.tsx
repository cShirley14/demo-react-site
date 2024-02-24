import { useMediaQuery } from "@chakra-ui/react";

export const useDesktopView = () => useMediaQuery("(min-width: 768px)");
