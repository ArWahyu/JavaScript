import React, { useEffect } from "react";
import Layout from "../Layout";
import ListRKH from "../../components/afdeling/ListRKH";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const RKH = () => {
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
    <Layout onScrollHorizontal={true}>
      <ListRKH/>
    </Layout>
  );
};

export default RKH;