import {
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Box,
  Button,
  FormErrorMessage,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userForm } from "../../schemas/userForm";
import { send } from "@emailjs/browser";

export const ContactForm = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(userForm) });

  const onSubmit = handleSubmit((data) => {
    return new Promise(async (resolve, reject) => {
      try {
        await send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          data,
          process.env.REACT_APP_USER_ID
        );

        toast({
          title: "Email sent!",
          description: "An email has been sent to successfully 🎉",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        reset();
        window.grecaptcha.reset();
      } catch (e) {
        // notify
        toast({
          title: "Issue Sending Email.",
          status: "error",
          description:
            "Unfortunately we could not send an email at this time, feel free to reach out via LinkedIn!",
          isClosable: true,
        });
      }
    });
  });

  return (
    <VStack id="collaborate" maxW="40rem" minW="15rem" align="flex-start">
      <Box>
        <Heading>Connect</Heading>
        <Text fontSize="x1" className="subtext">
          Connect with me and explore what solutions I can help you solve.
        </Text>
      </Box>
      <form onSubmit={onSubmit} id="contact-form" className="subtext">
        <FormControl isInvalid={!!errors.name} isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" type="text" variant="filled" {...register("name")} />
          <FormErrorMessage>
            <>{errors.name && errors.name.message}</>
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email} isRequired>
          <FormLabel mt="1em" htmlFor="email">
            Email
          </FormLabel>
          <Input
            id="email"
            placeholder="yourname@example.com"
            type="email"
            variant="filled"
            {...register("email")}
          />
          <FormErrorMessage>
            <>{errors.email && errors.email.message}</>
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.message} isRequired>
          <FormLabel mt="1em" htmlFor="message">
            Message
          </FormLabel>
          <Textarea
            id="message"
            rows={9}
            cols={40}
            variant="filled"
            role="textbox"
            resize="both"
            {...register("message")}
            required
          />
          <FormErrorMessage>
            <>{errors.message && errors.message.message}</>
          </FormErrorMessage>
        </FormControl>
        <div
          className="g-recaptcha"
          data-sitekey={process.env.REACT_APP_GOOGLE_ID}
        />
        <Button
          mt="2em"
          type="submit"
          w="100%"
          colorScheme="green"
          isLoading={isSubmitting}>
          Submit
        </Button>
      </form>
    </VStack>
  );
};
