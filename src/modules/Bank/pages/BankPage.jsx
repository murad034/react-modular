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
  console.log("Bank Pages jsx");

  const { formData, loading, errors, handleChange, handleSubmit } =
    useBankForm();

  return (
    <div className="border-card-block">
      <div className="bd-card-head">
        <div className="bd-card-title">
          <span className="title-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M20.9041 15.0465L17.4667 11.3003L16.6981 10.473C16.5849 10.3345 16.5431 10.0856 16.6169 9.92139L17.8699 7.12973C18.2631 6.25391 18.0822 4.92313 17.4778 4.16954C17.2655 3.90984 16.9371 3.76242 16.6019 3.77642C15.6463 3.82975 14.5276 4.58816 14.1345 5.46397L12.8814 8.25563C12.8077 8.41985 12.594 8.5541 12.4153 8.56157L6.21182 8.46254C5.53059 8.44175 4.74181 8.95363 4.46334 9.574L3.92279 10.7782C3.57471 11.5537 3.9866 12.199 4.84655 12.2123L10.3017 12.2933C10.7272 12.2979 10.9331 12.6206 10.757 13.0129L10.3025 14.0255L9.56536 15.6677C9.47117 15.8775 9.21743 16.1253 9.00594 16.2058L5.93524 17.3814C5.61801 17.5021 5.32519 17.8858 5.28631 18.241L5.13992 19.6661C5.06253 20.278 5.55911 20.8078 6.17554 20.7776L9.16585 19.9276C9.62122 19.7922 10.1595 20.0338 10.361 20.4641L11.7132 23.2633C12.1045 23.7349 12.8263 23.7629 13.2503 23.3066L14.2178 22.2501C14.4533 21.9941 14.5495 21.5111 14.4288 21.1939L13.2664 18.1182C13.1769 17.9026 13.1934 17.5483 13.2876 17.3385L14.4792 14.6836C14.6553 14.2913 15.02 14.2358 15.3194 14.5456L19.0056 18.5678C19.5871 19.2015 20.3429 19.0804 20.691 18.305L21.2316 17.1007C21.51 16.4803 21.3683 15.5508 20.9041 15.0465Z"
                fill="white"
              />
            </svg>
          </span>
          <h3>New Flight</h3>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bd-card-content">
          <div className="new-flight-form">
            <Stack spacing={4} maxW="75%">
              <div className="card-form-group">
                <Field.Root className="card-form-block" invalid={!!errors.name}>
                  <Field.Label>Name</Field.Label>
                  <Input
                    name="name"
                    placeholder="Enter name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <Field.ErrorText>{errors.name[0]}</Field.ErrorText>
                  )}
                </Field.Root>

                <Field.Root
                  className="card-form-block"
                  invalid={!!errors.bank_code}
                >
                  <Field.Label>Code</Field.Label>
                  <Input
                    name="bank_code"
                    placeholder="Enter bank code"
                    className="form-control"
                    value={formData.bank_code}
                    onChange={handleChange}
                  />
                  {errors.bank_code && (
                    <Field.ErrorText>{errors.bank_code[0]}</Field.ErrorText>
                  )}
                </Field.Root>

                <Field.Root
                  className="card-form-block"
                  invalid={!!errors.email}
                >
                  <Field.Label>Email</Field.Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <Field.ErrorText>{errors.email[0]}</Field.ErrorText>
                  )}
                </Field.Root>

                <Field.Root
                  className="card-form-block"
                  invalid={!!errors.phone}
                >
                  <Field.Label>Phone</Field.Label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Enter phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <Field.ErrorText>{errors.phone[0]}</Field.ErrorText>
                  )}
                </Field.Root>

                <Field.Root
                  className="card-form-block"
                  invalid={!!errors.website}
                >
                  <Field.Label>Website</Field.Label>
                  <Input
                    name="website"
                    placeholder="Enter website"
                    className="form-control"
                    value={formData.website}
                    onChange={handleChange}
                  />
                  {errors.website && (
                    <Field.ErrorText>{errors.website[0]}</Field.ErrorText>
                  )}
                </Field.Root>

                <Field.Root
                  className="card-form-block"
                  invalid={!!errors.location}
                >
                  <Field.Label>Location</Field.Label>
                  <Input
                    name="location"
                    placeholder="Enter location"
                    className="form-control"
                    value={formData.location}
                    onChange={handleChange}
                  />
                  {errors.location && (
                    <Field.ErrorText>{errors.location[0]}</Field.ErrorText>
                  )}
                </Field.Root>

                <Field.Root
                  className="card-form-block"
                  invalid={!!errors.address}
                >
                  <Field.Label>Address</Field.Label>
                  <Input
                    name="address"
                    placeholder="Enter address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <Field.ErrorText>{errors.address[0]}</Field.ErrorText>
                  )}
                </Field.Root>

                <Field.Root
                  className="card-form-block"
                  invalid={!!errors.active_status}
                >
                  <Field.Label>Active Status</Field.Label>
                  <RadioGroup
                    name="active_status"
                    value={formData.active_status}
                    onChange={handleChange}
                  >
                    <HStack spacing="10" gap="12">
                      <Radio value="1">Active</Radio>
                      <Radio value="0">Inactive</Radio>
                    </HStack>
                  </RadioGroup>
                  {errors.active_status && (
                    <Field.ErrorText>{errors.active_status[0]}</Field.ErrorText>
                  )}
                </Field.Root>
              </div>
            </Stack>
          </div>
        </div>

        <div className="bd-card-footer">
          <div className="flex-space-btw info-btn-group">
            <Button className="btn btn-default">
              <span>Close</span>
            </Button>

            <Button
              type="submit"
              className="btn btn-green"
              isDisabled={loading}
            >
              <span>{loading ? <Spinner size="sm" /> : "Create"}</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BankPage;
