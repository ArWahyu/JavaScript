//import Product from "../models/ProductModel.js";
//import User from "../models/UserModel.js";
import { Op } from "sequelize";
import KaryawanAfd from "../models/KaryawanAfdModel.js";
const bulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
let year = new Date().getFullYear();

export const getLaporan = async (req, res) => {
  try {
    //laporan perbulan
    const search = req.query.search_query || "";
    const search2 = req.query.search_query2 || "";
    let results = [];
    let totalHektar = 0;
    let totalJanjang = 0;
    let totalPokok = 0;
    let totalBahan = 0;
    const result = await KaryawanAfd.findAll({
      where: {
        objekKerja: {
          [Op.like]: "%" + search + "%",
        },
        tanggal: {
          [Op.like]: "%" + bulan[11] + " " + search2 + "%",
        },
      },
      order: [["tanggal", "ASC"]],
    });
    results = result;
    for (let i = 0; i < results.length; i++) {
      totalHektar = totalHektar + result[i].hektar;
    }
    for (let i = 0; i < results.length; i++) {
      totalJanjang = totalJanjang + result[i].janjang;
    }
    for (let i = 0; i < results.length; i++) {
      totalPokok = totalPokok + result[i].pokok;
    }
    for (let i = 0; i < results.length; i++) {
      totalBahan = totalBahan + result[i].bahan;
    }

    res.json({
      year: year,
      totalHektar: totalHektar,
      totalJanjang: totalJanjang,
      totalPokok: totalPokok,
      totalBahan: totalBahan,
      results: results,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getLaporan1 = async (req, res) => {
  try {
    //laporan perbulan
    const search = req.query.search_query || "";
    const search2 = req.query.search_query2 || "";
    let results = [];
    let totalHektar = 0;
    let totalJanjang = 0;
    let totalPokok = 0;
    let totalBahan = 0;
    const result = await KaryawanAfd.findAll({
      where: {
        objekKerja: {
          [Op.like]: "%" + search + "%",
        },
        tanggal: {
          [Op.like]: "%" + bulan[10] + " " + search2 + "%",
        },
      },
      order: [["tanggal", "ASC"]],
    });
    results = result;
    for (let i = 0; i < results.length; i++) {
      totalHektar = totalHektar + result[i].hektar;
    }
    for (let i = 0; i < results.length; i++) {
      totalJanjang = totalJanjang + result[i].janjang;
    }
    for (let i = 0; i < results.length; i++) {
      totalPokok = totalPokok + result[i].pokok;
    }
    for (let i = 0; i < results.length; i++) {
      totalBahan = totalBahan + result[i].bahan;
    }

    res.json({
      totalHektar: totalHektar,
      totalJanjang: totalJanjang,
      totalPokok: totalPokok,
      totalBahan: totalBahan,
      results: results,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getLaporan2 = async (req, res) => {
  try {
    //laporan perbulan
    const search = req.query.search_query || "";
    const search2 = req.query.search_query2 || "";
    let results = [];
    let totalHektar = 0;
    let totalJanjang = 0;
    let totalPokok = 0;
    let totalBahan = 0;
    const result = await KaryawanAfd.findAll({
      where: {
        objekKerja: {
          [Op.like]: "%" + search + "%",
        },
        tanggal: {
          [Op.like]: "%" + bulan[9] + " " + search2 + "%",
        },
      },
      order: [["tanggal", "ASC"]],
    });
    results = result;
    for (let i = 0; i < results.length; i++) {
      totalHektar = totalHektar + result[i].hektar;
    }
    for (let i = 0; i < results.length; i++) {
      totalJanjang = totalJanjang + result[i].janjang;
    }
    for (let i = 0; i < results.length; i++) {
      totalPokok = totalPokok + result[i].pokok;
    }
    for (let i = 0; i < results.length; i++) {
      totalBahan = totalBahan + result[i].bahan;
    }

    res.json({
      totalHektar: totalHektar,
      totalJanjang: totalJanjang,
      totalPokok: totalPokok,
      totalBahan: totalBahan,
      results: results,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getLaporan3 = async (req, res) => {
  try {
    //laporan perbulan
    const search = req.query.search_query || "";
    const search2 = req.query.search_query2 || "";
    let results = [];
    let totalHektar = 0;
    let totalJanjang = 0;
    let totalPokok = 0;
    let totalBahan = 0;
    const result = await KaryawanAfd.findAll({
      where: {
        objekKerja: {
          [Op.like]: "%" + search + "%",
        },
        tanggal: {
          [Op.like]: "%" + bulan[8] + " " + search2 + "%",
        },
      },
      order: [["tanggal", "ASC"]],
    });
    results = result;
    for (let i = 0; i < results.length; i++) {
      totalHektar = totalHektar + result[i].hektar;
    }
    for (let i = 0; i < results.length; i++) {
      totalJanjang = totalJanjang + result[i].janjang;
    }
    for (let i = 0; i < results.length; i++) {
      totalPokok = totalPokok + result[i].pokok;
    }
    for (let i = 0; i < results.length; i++) {
      totalBahan = totalBahan + result[i].bahan;
    }

    res.json({
      totalHektar: totalHektar,
      totalJanjang: totalJanjang,
      totalPokok: totalPokok,
      totalBahan: totalBahan,
      results: results,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getLaporan4 = async (req, res) => {
  try {
    //laporan perbulan
    const search = req.query.search_query || "";
    const search2 = req.query.search_query2 || "";
    let results = [];
    let totalHektar = 0;
    let totalJanjang = 0;
    let totalPokok = 0;
    let totalBahan = 0;
    const result = await KaryawanAfd.findAll({
      where: {
        objekKerja: {
          [Op.like]: "%" + search + "%",
        },
        tanggal: {
          [Op.like]: "%" + bulan[7] + " " + search2 + "%",
        },
      },
      order: [["tanggal", "ASC"]],
    });
    results = result;
    for (let i = 0; i < results.length; i++) {
      totalHektar = totalHektar + result[i].hektar;
    }
    for (let i = 0; i < results.length; i++) {
      totalJanjang = totalJanjang + result[i].janjang;
    }
    for (let i = 0; i < results.length; i++) {
      totalPokok = totalPokok + result[i].pokok;
    }
    for (let i = 0; i < results.length; i++) {
      totalBahan = totalBahan + result[i].bahan;
    }

    res.json({
      totalHektar: totalHektar,
      totalJanjang: totalJanjang,
      totalPokok: totalPokok,
      totalBahan: totalBahan,
      results: results,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getLaporan5 = async (req, res) => {
  try {
    //laporan perbulan
    const search = req.query.search_query || "";
    const search2 = req.query.search_query2 || "";
    let results = [];
    let totalHektar = 0;
    let totalJanjang = 0;
    let totalPokok = 0;
    let totalBahan = 0;
    const result = await KaryawanAfd.findAll({
      where: {
        objekKerja: {
          [Op.like]: "%" + search + "%",
        },
        tanggal: {
          [Op.like]: "%" + bulan[6] + " " + search2 + "%",
        },
      },
      order: [["tanggal", "ASC"]],
    });
    results = result;
    for (let i = 0; i < results.length; i++) {
      totalHektar = totalHektar + result[i].hektar;
    }
    for (let i = 0; i < results.length; i++) {
      totalJanjang = totalJanjang + result[i].janjang;
    }
    for (let i = 0; i < results.length; i++) {
      totalPokok = totalPokok + result[i].pokok;
    }
    for (let i = 0; i < results.length; i++) {
      totalBahan = totalBahan + result[i].bahan;
    }

    res.json({
      year: year,
      totalHektar: totalHektar,
      totalJanjang: totalJanjang,
      totalPokok: totalPokok,
      totalBahan: totalBahan,
      results: results,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getLaporan6 = async (req, res) => {
  try {
    //laporan perbulan
    const search = req.query.search_query || "";
    const search2 = req.query.search_query2 || "";
    let results = [];
    let totalHektar = 0;
    let totalJanjang = 0;
    let totalPokok = 0;
    let totalBahan = 0;
    const result = await KaryawanAfd.findAll({
      where: {
        objekKerja: {
          [Op.like]: "%" + search + "%",
        },
        tanggal: {
          [Op.like]: "%" + bulan[5] + " " + search2 + "%",
        },
      },
      order: [["tanggal", "ASC"]],
    });
    results = result;
    for (let i = 0; i < results.length; i++) {
      totalHektar = totalHektar + result[i].hektar;
    }
    for (let i = 0; i < results.length; i++) {
      totalJanjang = totalJanjang + result[i].janjang;
    }
    for (let i = 0; i < results.length; i++) {
      totalPokok = totalPokok + result[i].pokok;
    }
    for (let i = 0; i < results.length; i++) {
      totalBahan = totalBahan + result[i].bahan;
    }

    res.json({
      totalHektar: totalHektar,
      totalJanjang: totalJanjang,
      totalPokok: totalPokok,
      totalBahan: totalBahan,
      results: results,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getLaporan7 = async (req, res) => {
  try {
    //laporan perbulan
    const search = req.query.search_query || "";
    const search2 = req.query.search_query2 || "";
    let results = [];
    let totalHektar = 0;
    let totalJanjang = 0;
    let totalPokok = 0;
    let totalBahan = 0;
    const result = await KaryawanAfd.findAll({
      where: {
        objekKerja: {
          [Op.like]: "%" + search + "%",
        },
        tanggal: {
          [Op.like]: "%" + bulan[4] + " " + search2 + "%",
        },
      },
      order: [["tanggal", "ASC"]],
    });
    results = result;
    for (let i = 0; i < results.length; i++) {
      totalHektar = totalHektar + result[i].hektar;
    }
    for (let i = 0; i < results.length; i++) {
      totalJanjang = totalJanjang + result[i].janjang;
    }
    for (let i = 0; i < results.length; i++) {
      totalPokok = totalPokok + result[i].pokok;
    }
    for (let i = 0; i < results.length; i++) {
      totalBahan = totalBahan + result[i].bahan;
    }

    res.json({
      totalHektar: totalHektar,
      totalJanjang: totalJanjang,
      totalPokok: totalPokok,
      totalBahan: totalBahan,
      results: results,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getLaporan8 = async (req, res) => {
  try {
    //laporan perbulan
    const search = req.query.search_query || "";
    const search2 = req.query.search_query2 || "";
    let results = [];
    let totalHektar = 0;
    let totalJanjang = 0;
    let totalPokok = 0;
    let totalBahan = 0;
    const result = await KaryawanAfd.findAll({
      where: {
        objekKerja: {
          [Op.like]: "%" + search + "%",
        },
        tanggal: {
          [Op.like]: "%" + bulan[3] + " " + search2 + "%",
        },
      },
      order: [["tanggal", "ASC"]],
    });
    results = result;
    for (let i = 0; i < results.length; i++) {
      totalHektar = totalHektar + result[i].hektar;
    }
    for (let i = 0; i < results.length; i++) {
      totalJanjang = totalJanjang + result[i].janjang;
    }
    for (let i = 0; i < results.length; i++) {
      totalPokok = totalPokok + result[i].pokok;
    }
    for (let i = 0; i < results.length; i++) {
      totalBahan = totalBahan + result[i].bahan;
    }

    res.json({
      totalHektar: totalHektar,
      totalJanjang: totalJanjang,
      totalPokok: totalPokok,
      totalBahan: totalBahan,
      results: results,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getLaporan9 = async (req, res) => {
  try {
    //laporan perbulan
    const search = req.query.search_query || "";
    const search2 = req.query.search_query2 || "";
    let results = [];
    let totalHektar = 0;
    let totalJanjang = 0;
    let totalPokok = 0;
    let totalBahan = 0;
    const result = await KaryawanAfd.findAll({
      where: {
        objekKerja: {
          [Op.like]: "%" + search + "%",
        },
        tanggal: {
          [Op.like]: "%" + bulan[2] + " " + search2 + "%",
        },
      },
      order: [["tanggal", "ASC"]],
    });
    results = result;
    for (let i = 0; i < results.length; i++) {
      totalHektar = totalHektar + result[i].hektar;
    }
    for (let i = 0; i < results.length; i++) {
      totalJanjang = totalJanjang + result[i].janjang;
    }
    for (let i = 0; i < results.length; i++) {
      totalPokok = totalPokok + result[i].pokok;
    }
    for (let i = 0; i < results.length; i++) {
      totalBahan = totalBahan + result[i].bahan;
    }

    res.json({
      totalHektar: totalHektar,
      totalJanjang: totalJanjang,
      totalPokok: totalPokok,
      totalBahan: totalBahan,
      results: results,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getLaporan10 = async (req, res) => {
  try {
    //laporan perbulan
    const search = req.query.search_query || "";
    const search2 = req.query.search_query2 || "";
    let results = [];
    let totalHektar = 0;
    let totalJanjang = 0;
    let totalPokok = 0;
    let totalBahan = 0;
    const result = await KaryawanAfd.findAll({
      where: {
        objekKerja: {
          [Op.like]: "%" + search + "%",
        },
        tanggal: {
          [Op.like]: "%" + bulan[1] + " " + search2 + "%",
        },
      },
      order: [["tanggal", "ASC"]],
    });
    results = result;
    for (let i = 0; i < results.length; i++) {
      totalHektar = totalHektar + result[i].hektar;
    }
    for (let i = 0; i < results.length; i++) {
      totalJanjang = totalJanjang + result[i].janjang;
    }
    for (let i = 0; i < results.length; i++) {
      totalPokok = totalPokok + result[i].pokok;
    }
    for (let i = 0; i < results.length; i++) {
      totalBahan = totalBahan + result[i].bahan;
    }

    res.json({
      totalHektar: totalHektar,
      totalJanjang: totalJanjang,
      totalPokok: totalPokok,
      totalBahan: totalBahan,
      results: results,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getLaporan11 = async (req, res) => {
  try {
    //laporan perbulan
    const search = req.query.search_query || "";
    const search2 = req.query.search_query2 || "";
    let results = [];
    let totalHektar = 0;
    let totalJanjang = 0;
    let totalPokok = 0;
    let totalBahan = 0;
    const result = await KaryawanAfd.findAll({
      where: {
        objekKerja: {
          [Op.like]: "%" + search + "%",
        },
        tanggal: {
          [Op.like]: "%" + bulan[0] + " " + search2 + "%",
        },
      },
      order: [["tanggal", "ASC"]],
    });
    results = result;
    for (let i = 0; i < results.length; i++) {
      totalHektar = totalHektar + result[i].hektar;
    }
    for (let i = 0; i < results.length; i++) {
      totalJanjang = totalJanjang + result[i].janjang;
    }
    for (let i = 0; i < results.length; i++) {
      totalPokok = totalPokok + result[i].pokok;
    }
    for (let i = 0; i < results.length; i++) {
      totalBahan = totalBahan + result[i].bahan;
    }

    res.json({
      totalHektar: totalHektar,
      totalJanjang: totalJanjang,
      totalPokok: totalPokok,
      totalBahan: totalBahan,
      results: results,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
