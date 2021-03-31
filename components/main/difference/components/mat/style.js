import { makeStyles } from "@material-ui/core/styles";

export const useStyless = makeStyles(() => ({
  p: {
    "@media (max-width: 900px)": {
    fontSize: "11px"
    }
  }
}))