import React, { useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import { useForm, Controller } from "react-hook-form";
import {
  Fab,
  FormGroup,
  FormHelperText,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@mui/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MySnackbar from "../../components/MySnackbar";
import Theme from "../UI/Theme";

init("user_40wIm0nd3KnaNXjZZZmdC");

const schema = yup
  .object({
    user_name: yup.string().required("Please enter your name"),
    user_email: yup
      .string()
      .required("Please enter your email")
      .email("Must be an email"),
  })
  .required();

const useStyles = makeStyles((theme) => ({
  formGroup: {
    "&.MuiFormGroup-root": {
      // paddingBottom: 10,
    },
  },
  input: {
    "&.MuiInput-root": {
      backgroundColor: "#fafafa",
      padding: 5,
      color: theme.palette.common.colorBG,
    },
    "&.Mui-focused": {
      backgroundColor: theme.palette.common.colorLight,
    },
  },
  itemText: {
    color: "#fff",
    "& .MuiTypography-root": {
      fontSize: "0.9rem",
    },
    "&.MuiSvgIcon-root": {
      width: "0.9rem",
      height: "0.9rem",
    },
  },
  helperText: {
    "&.MuiFormHelperText-root": {
      color: "red",
    },
  },
}));

export default function ContactForm2() {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(false);
  const [snackData, setSnackData] = useState({ msg: "", type: "error" });
  const serviceID = "service_0eseqqi";
  const templateID = "contact_form";
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitted, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const callSnackBar = (msg, type) => {
    setOpen(true);
    setSnackData({ msg, type });
  };

  const onSubmit = (data) => {
    emailjs.send(serviceID, templateID, data).then(
      (result) => {
        callSnackBar("Done! Thank you!", "success");
        reset();
        // console.log(result.text);
      },
      (error) => {
        callSnackBar("something went wrong, please try again!", "error");
        // console.log(error.text);
      }
    );
  };

  return (
    <React.Fragment>
      <Typography variant="h5" textAlign={!matchSM ? "center" : "left"}>
        Get in Touch
      </Typography>
      <Typography fontSize={12} textAlign={!matchSM ? "center" : "left"}>
        Feel free to drop me a line below!
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing="20px" mt="0">
          <Grid item xs={12} md={6}>
            <FormGroup className={classes.formGroup}>
              <Controller
                name="user_name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    className={classes.input}
                    disableUnderline
                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                  />
                )}
              />
              <FormHelperText className={classes.helperText}>
                {errors.user_name && errors.user_name.message}
              </FormHelperText>
            </FormGroup>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormGroup className={classes.formGroup}>
              <Controller
                name="user_email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    className={classes.input}
                    disableUnderline
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                  />
                )}
              />
              <FormHelperText className={classes.helperText}>
                {errors.user_email && errors.user_email.message}
              </FormHelperText>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup className={classes.formGroup}>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    className={classes.input}
                    disableUnderline
                    multiline
                    rows={3}
                    placeholder="Message"
                  />
                )}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <Fab
                disabled={!isDirty}
                type="submit"
                // onClick={console.log(errors)}
                variant="extended"
                sx={{
                  alignSelf: matchSM ? "flex-start" : "center",
                  minWidth: 120,
                  backgroundColor: Theme.palette.common.colorPrimaryVariant,
                  color: Theme.palette.common.colorBG,
                }}
              >
                Send
              </Fab>
              {/* <FormHelperText
            sx={{ textAlign: "center" }}
            className={classes.helperText}
          >
            {isSubmitted && !isValid && isDirty && "some thing went wrong"}
          </FormHelperText> */}
            </FormGroup>
          </Grid>
        </Grid>
      </form>
      <MySnackbar open={open} setOpen={setOpen} data={snackData} />
    </React.Fragment>
  );
}
