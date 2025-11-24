import { useForm, Controller } from "react-hook-form";
import FormInput from "../../components/formElements/InputField";
import PrimaryButton from "../../components/formElements/PrimaryButton";
import { Box } from "@mui/material";
import Typo from "../../components/typography/typo";
import PasswordInput from "../../components/formElements/PasswordField";

export default function LoginForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      password: "",
      terms: false,
    },
  });

  interface FormValues {
    name: string;
    password: string;
    terms: boolean;
  }

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typo var="h1" style={{ textAlign: "center", marginBottom: "20px" }}>
          Logo
        </Typo>
        <form onSubmit={handleSubmit(onSubmit)} style={{ minWidth: "400px" }}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Username is required" }}
            render={({ field, fieldState }) => (
              <FormInput
                label="User Name"
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            }}
            render={({ field, fieldState }) => (
              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />
          {/* <Controller
          name="category"
          control={control}
          rules={{ required: "Category required" }}
          render={({ field, fieldState }) => (
            <FormSelect
              label="Category"
              options={[
                { label: "Food", value: "food" },
                { label: "Clothes", value: "clothes" },
                { label: "Electronics", value: "electronics" },
              ]}
              {...field}
              error={fieldState.error?.message}
            />
          )}
        /> */}
          <br />
          <PrimaryButton fullWidth text="Submit" />
        </form>
      </Box>
    </Box>
  );
}
