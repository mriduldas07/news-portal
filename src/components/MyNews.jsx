import React, { useEffect, useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsForEmail } from "../features/newsForQueryEmail/newsForQueryEmailSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";
import { _category_join } from "../utils/_utlities_function";
import { _author_date_split } from "../utils/_utlities_function";

export default function MyNews() {
  const { news } = useSelector((state) => state.myNews);
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const { email } = user || {};

  const columns = useMemo(() => [
    {
      header: "Category",
      accessorFn: (row) => _category_join(row.category),
    },
    {
      header: "Date",
      accessorFn: (row) => _author_date_split(row.author.published_date),
    },
    {
      //   accessorKey: "thumbnail_url",
      header: "Thumbnail",
      accessorFn: (row) => (
        <img src={row.image_url} className="w-[50px]" alt="" />
      ),
    },
    {
      accessorKey: "total_view",
      header: "View",
    },
  ]);

  useEffect(() => {
    dispatch(fetchNewsForEmail(email));
  }, [dispatch, email]);
  return (
    <div className="min-h-screen">
      <h1 className="text-semibold text-2xl my-6 text-center">My News</h1>
      <MaterialReactTable
        columns={columns}
        data={news}
        renderDetailPanel={({ row }) => (
          <Box
            sx={{
              display: "flex",
              margin: "auto",
              width: "100%",
            }}
          >
            <Typography>
              <h1 className="font-semibold text-xl"> {row.original.title}</h1>
              <p className="py-2">{row.original.details}</p>
            </Typography>
          </Box>
        )}
      />
    </div>
  );
}
