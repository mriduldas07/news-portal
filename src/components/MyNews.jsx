import { Box, Typography } from "@mui/material";
import MaterialReactTable from "material-react-table";
import React, { useEffect, useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { editActive, removeNews } from "../features/news/newsSlice";
import { fetchNewsForEmail } from "../features/newsForQueryEmail/newsForQueryEmailSlice";
import { auth } from "../firebase.config";
import {
  _author_date_split,
  _category_join,
} from "../utils/_utlities_function";

export default function MyNews() {
  const { news } = useSelector((state) => state.myNews);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const { email } = user || {};

  const handleEditActive = (row) => {
    dispatch(editActive(row));
    navigate(`/update/${row.id}`);
  };
  const handleDelete = (id) => {
    dispatch(removeNews(id));
    confirm("Want to delete this news?");
  };

  const columns = useMemo(() => [
    {
      header: "Category",
      accessorFn: (row) => (
        <Link to={`/news/${row.id}`}>{_category_join(row.category)}</Link>
      ),
    },
    {
      header: "Date",
      accessorFn: (row) => _author_date_split(row.author.published_date),
    },
    {
      header: "Thumbnail",
      accessorFn: (row) => (
        <Link to={`/news/${row.id}`}>
          <img src={row.image_url} className="w-[50px]" alt="" />
        </Link>
      ),
    },
    {
      accessorKey: "total_view",
      header: "View",
    },
  ]);

  useEffect(() => {
    dispatch(fetchNewsForEmail(email));
  }, [dispatch, email, handleDelete]);
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
              <div className="flex gap-5 justify-center items-center">
                <div
                  className="bg-green-600 px-3 py-3 rounded-full cursor-pointer"
                  onClick={() => handleEditActive(row.original)}
                >
                  <GrDocumentUpdate size={30} />
                </div>
                <div
                  className="bg-red-600 px-3 py-3 rounded-full cursor-pointer"
                  onClick={() => handleDelete(row.original.id)}
                >
                  <AiOutlineDelete size={34} />
                </div>
              </div>
            </Typography>
          </Box>
        )}
      />
    </div>
  );
}
