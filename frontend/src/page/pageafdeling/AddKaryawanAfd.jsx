import React, { useEffect } from "react";
import Layout from "../Layout";
import AddRkhKaryawanAfd from "../../components/afdeling/AddRkhKaryawanAfd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const AddKaryawanAfd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <AddRkhKaryawanAfd />
    </Layout>
  );
};

export default AddKaryawanAfd;