import express from "express";
import {
  getLaporan,
  getLaporan1,
  getLaporan2,
  getLaporan3,
  getLaporan4,
  getLaporan5,
  getLaporan6,
  getLaporan7,
  getLaporan8,
  getLaporan9,
  getLaporan10,
  getLaporan11,
} from "../controllers/LTanaman.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/laporan", verifyUser, getLaporan);
router.get("/laporan1", verifyUser, getLaporan1);
router.get("/laporan2", verifyUser, getLaporan2);
router.get("/laporan3", verifyUser, getLaporan3);
router.get("/laporan4", verifyUser, getLaporan4);
router.get("/laporan5", verifyUser, getLaporan5);
router.get("/laporan6", verifyUser, getLaporan6);
router.get("/laporan7", verifyUser, getLaporan7);
router.get("/laporan8", verifyUser, getLaporan8);
router.get("/laporan9", verifyUser, getLaporan9);
router.get("/laporan10", verifyUser, getLaporan10);
router.get("/laporan11", verifyUser, getLaporan11);

export default router;
