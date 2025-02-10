import {
  Container,
  Button,
  Input,
  Field,
  Stack,
  HStack,
  SimpleGrid,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { useBankForm } from "@modules/Bank/hooks/useBankForm";

const BankPage = () => {
  const { formData, loading, errors, handleChange, handleSubmit } =
    useBankForm();

  return (
    <Container>
      <SimpleGrid minChildWidth="lg">
        <Box>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4} maxW="75%">
              <Field.Root invalid={!!errors.name}>
                <Field.Label>Name</Field.Label>
                <Input
                  name="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <Field.ErrorText>{errors.name[0]}</Field.ErrorText>
                )}
              </Field.Root>

              <Field.Root invalid={!!errors.bank_code}>
                <Field.Label>Code</Field.Label>
                <Input
                  name="bank_code"
                  placeholder="Enter bank code"
                  value={formData.bank_code}
                  onChange={handleChange}
                />
                {errors.bank_code && (
                  <Field.ErrorText>{errors.bank_code[0]}</Field.ErrorText>
                )}
              </Field.Root>

              <Field.Root invalid={!!errors.email}>
                <Field.Label>Email</Field.Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <Field.ErrorText>{errors.email[0]}</Field.ErrorText>
                )}
              </Field.Root>

              <Field.Root invalid={!!errors.phone}>
                <Field.Label>Phone</Field.Label>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Enter phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <Field.ErrorText>{errors.phone[0]}</Field.ErrorText>
                )}
              </Field.Root>

              <Field.Root invalid={!!errors.website}>
                <Field.Label>Website</Field.Label>
                <Input
                  name="website"
                  placeholder="Enter website"
                  value={formData.website}
                  onChange={handleChange}
                />
                {errors.website && (
                  <Field.ErrorText>{errors.website[0]}</Field.ErrorText>
                )}
              </Field.Root>

              <Field.Root invalid={!!errors.location}>
                <Field.Label>Location</Field.Label>
                <Input
                  name="location"
                  placeholder="Enter location"
                  value={formData.location}
                  onChange={handleChange}
                />
                {errors.location && (
                  <Field.ErrorText>{errors.location[0]}</Field.ErrorText>
                )}
              </Field.Root>

              <Field.Root invalid={!!errors.address}>
                <Field.Label>Address</Field.Label>
                <Input
                  name="address"
                  placeholder="Enter address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <Field.ErrorText>{errors.address[0]}</Field.ErrorText>
                )}
              </Field.Root>

              <Field.Root invalid={!!errors.active_status}>
                <Field.Label>Active Status</Field.Label>
                <RadioGroup
                  name="active_status"
                  value={formData.active_status}
                  onChange={handleChange}
                >
                  <HStack gap="6">
                    <Radio value="1">Active</Radio>
                    <Radio value="0">Inactive</Radio>
                  </HStack>
                </RadioGroup>
                {errors.active_status && (
                  <Field.ErrorText>{errors.active_status[0]}</Field.ErrorText>
                )}
              </Field.Root>

              <Button type="submit" alignSelf="flex-start" isDisabled={loading}>
                {loading ? <Spinner size="sm" /> : "Submit"}
              </Button>
            </Stack>
          </form>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default BankPage;
