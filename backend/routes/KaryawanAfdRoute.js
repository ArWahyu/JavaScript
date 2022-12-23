import express from "express";
import {
  getSearch,
  getKaryawanAfdById,
  createKaryawanAfd,
  updateKaryawanAfd,
  deleteKaryawanAfd,
} from "../controllers/KaryawanAfd.js";
import { getProductById } from "../controllers/Products.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

//router.get('/products', verifyUser, getProducts);
router.get("/karyawanafd", verifyUser, getSearch);
router.get("/products/:id", verifyUser, getProductById);
router.get("/karyawanafd/:id", verifyUser, getKaryawanAfdById);
router.post("/karyawanafd", verifyUser, createKaryawanAfd);
router.patch("/karyawanafd/:id", verifyUser, updateKaryawanAfd);
router.delete("/karyawanAfd/:id", verifyUser, deleteKaryawanAfd);

export default router;
