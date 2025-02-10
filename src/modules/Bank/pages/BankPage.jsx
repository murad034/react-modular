import {
  Container,
  Button,
  Fieldset,
  Input,
  Stack,
  HStack,
  SimpleGrid,
  Box,
  Alert,
  Spinner
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Radio, RadioGroup } from "@/components/ui/radio";
import {useBankForm} from "@modules/Bank/hooks/useBankForm";

const BankPage = () => {
  const { formData, loading, error, handleChange, handleRadioChange, handleSubmit } = useBankForm();

  return (
      <Container>
        <SimpleGrid minChildWidth="lg">
          <Box>
            <form onSubmit={handleSubmit}>
              <Fieldset.Root size="lg" maxW="75%">
                <Stack>
                  <Fieldset.Legend>Create new Bank</Fieldset.Legend>
                </Stack>

                {error && (
                    <Alert status="error" mb={4}>
                      {error}
                    </Alert>
                )}

                <Fieldset.Content>
                  <Field label="Name">
                    <Input name="name" value={formData.name} onChange={handleChange} />
                  </Field>

                  <Field label="Code">
                    <Input name="bank_code" value={formData.bank_code} onChange={handleChange} />
                  </Field>

                  <Field label="Email">
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} />
                  </Field>

                  <Field label="Phone">
                    <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                  </Field>

                  <Field label="Website">
                    <Input name="website" value={formData.website} onChange={handleChange} />
                  </Field>

                  <Field label="Location">
                    <Input name="location" value={formData.location} onChange={handleChange} />
                  </Field>

                  <Field label="Address">
                    <Input name="address" value={formData.address} onChange={handleChange} />
                  </Field>

                  <Field label="Active Status">
                    <RadioGroup name="active_status" value={formData.active_status} onChange={handleRadioChange}>
                      <HStack gap="6">
                        <Radio value="1">Active</Radio>
                        <Radio value="2">Inactive</Radio>
                      </HStack>
                    </RadioGroup>
                  </Field>
                </Fieldset.Content>

                <Button type="submit" alignSelf="flex-start" isDisabled={loading}>
                  {loading ? <Spinner size="sm" /> : "Submit"}
                </Button>
              </Fieldset.Root>
            </form>
          </Box>
        </SimpleGrid>
      </Container>
  );
};

export default BankPage;
