import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BasicPagination({
  handleChangePage,
  totalPages,
  currentPage,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        count={totalPages}
        onChange={handleChangePage}
        page={currentPage}
        color="secondary"
      />
    </div>
  );
}
