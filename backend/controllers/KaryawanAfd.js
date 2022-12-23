import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";
import KaryawanAfd from "../models/KaryawanAfdModel.js";

//import { getProductById } from "./Products.js";

export const getSearch = async (req, res) => {
  const last_id = parseInt(req.query.lastId) || 0;
  const limit = parseInt(req.query.limit) || 30;
  const search = req.query.search_query || "";

  try {
    //pencarian kategori admin
    if (req.role === "admin") {
      let date_ob = new Date();
      let mounth = ("0" + date_ob.getMonth()).slice(-2);

      let results = [];
      let totalHektar = 0,
        totalJanjang = 0,
        totalPokok = 0,
        totalBahan = 0;
      if (last_id < 1) {
        const result = await KaryawanAfd.findAll({
          attributes: [
            "id",
            "uuid",
            "objekKerja",
            "tanggal",
            "blok",
            "hektar",
            "janjang",
            "pokok",
            "pdes",
            "bahan",
            "dosis",
            "pemakaianBahan",
            "keterangan",
          ],
          where: {
            [Op.or]: [
              {
                bahan: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                objekKerja: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                blok: {
                  [Op.like]: "%" + search + "%",
                },
              },
            ],
          },
          include: [
            {
              model: User,
              attributes: ["name", "email"],
            },
            {
              model: Product,
              attributes: ["id", "name", "nik", "unit", "jenisKelamin"],
            },
          ],
          limit: limit,
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
      } else {
        const result = await KaryawanAfd.findAll({
          attributes: [
            "id",
            "uuid",
            "objekKerja",
            "tanggal",
            "blok",
            "hektar",
            "janjang",
            "pokok",
            "pdes",
            "bahan",
            "dosis",
            "pemakaianBahan",
            "keterangan",
          ],
          where: {
            id: {
              [Op.lt]: last_id,
            },
            [Op.or]: [
              {
                blok: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                bahan: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                objekKerja: {
                  [Op.like]: "%" + search + "%",
                },
              },
            ],
          },
          include: [
            {
              model: User,
              attributes: ["name", "email"],
            },
            {
              model: Product,
              attributes: ["id", "name", "nik", "unnit", "jenisKelamin"],
            },
          ],
          limit: limit,
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
      }

      res.json({
        mounth: mounth,
        totalHektar: totalHektar,
        totalJanjang: totalJanjang,
        totalPokok: totalPokok,
        totalBahan: totalBahan,
        results: results,
        lastId: results.length ? results[results.length - 1].id : 0,
        hasMore: results.length >= limit ? true : false,
        long: results.length,
      });
    } else {
      //pencarian kategori user
      let date_ob = new Date();
      let date = ("0" + date_ob.getDate()).slice(-2);
      let results = [];
      let totalHektar = 0,
        totalJanjang = 0,
        totalPokok = 0,
        totalBahan = 0;
      if (last_id < 1) {
        const result = await KaryawanAfd.findAll({
          attributes: [
            "id",
            "uuid",
            "objekKerja",
            "tanggal",
            "blok",
            "hektar",
            "janjang",
            "pokok",
            "pdes",
            "bahan",
            "dosis",
            "pemakaianBahan",
            "keterangan",
          ],
          where: {
            userId: req.userId,
            [Op.or]: [
              {
                blok: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                bahan: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                objekKerja: {
                  [Op.like]: "%" + search + "%",
                },
              },
            ],
          },
          include: [
            {
              model: Product,
              attributes: ["id", "name", "nik", "unit", "jenisKelamin"],
            },
          ],
          limit: limit,
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
          totalBahan = totalBahan + result[i].pemakaianBahan;
        }
      } else {
        const result = await KaryawanAfd.findAll({
          attributes: [
            "id",
            "uuid",
            "objekKerja",
            "tanggal",
            "blok",
            "hektar",
            "janjang",
            "pokok",
            "pdes",
            "bahan",
            "dosis",
            "pemakaianBahan",
            "keterangan",
          ],
          where: {
            id: {
              [Op.lt]: last_id,
            },
            [Op.or]: [
              {
                blok: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                bahan: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                objekKerja: {
                  [Op.like]: "%" + search + "%",
                },
              },
            ],
          },
          include: [
            {
              model: Product,
              attributes: ["id", "name", "nik", "unit", "jenisKelamin"],
            },
          ],
          limit: limit,
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
      }
      res.json({
        date: date,
        totalHektar: totalHektar,
        totalJanjang: totalJanjang,
        totalPokok: totalPokok,
        totalBahan: totalBahan,
        results: results,
        results: results,
        lastId: results.length ? results[results.length - 1].id : 0,
        hasMore: results.length >= limit ? true : false,
        long: results.length,
      });
      //res.status(200).json(results);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getKaryawanAfdById = async (req, res) => {
  try {
    const karyawanAfd = await karyawanAfd.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!karyawanAfd)
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    let response;
    if (req.role === "admin") {
      response = await KaryawanAfd.findOne({
        attributes: [
          "uuid",
          "objekKerja",
          "tanggal",
          "blok",
          "hektar",
          "janjang",
          "pokok",
          "pdes",
          "bahan",
          "dosis",
          "pemakaianBahan",
          "keterangan",
        ],
        where: {
          [Op.and]: [{ id: karyawanAfd.id }],
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
          {
            model: Product,
            attributes: ["name", "nik", "unit", "jenisKelamin"],
          },
        ],
      });
    } else {
      response = await KaryawanAfd.findOne({
        attributes: [
          "uuid",
          "objekKerja",
          "tanggal",
          "blok",
          "hektar",
          "janjang",
          "pokok",
          "pdes",
          "bahan",
          "dosis",
          "pemakaianBahan",
          "keterangan",
        ],
        where: {
          id: karyawanAfd.id,
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
          {
            model: Product,
            attributes: ["name", "nik", "unit", "jenisKelamin"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createKaryawanAfd = async (req, res) => {
  const {
    productId,
    objekKerja,
    tanggal,
    blok,
    hektar,
    janjang,
    pokok,
    pdes,
    bahan,
    dosis,
    pemakaianBahan,
    keterangan,
  } = req.body;
  try {
    await KaryawanAfd.create({
      productId: productId,
      objekKerja: objekKerja,
      tanggal: tanggal,
      blok: blok,
      hektar: hektar,
      janjang: janjang,
      pokok: pokok,
      pdes: pdes,
      bahan: bahan,
      dosis: dosis,
      pemakaianBahan: pemakaianBahan,
      keterangan: keterangan,
      userId: req.userId,
    });

    res.status(201).json({ msg: "Product Created Successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateKaryawanAfd = async (req, res) => {
  try {
    const karyawanAfd = await karyawanAfd.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!karyawanAfd)
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    const {
      tanggal,
      objekKerja,
      hektar,
      janjang,
      pokok,
      pdes,
      bahan,
      dosis,
      pemakaianBahan,
      keterangan,
    } = req.body;
    if (req.role === "admin") {
      await KaryawanAfd.update(
        {
          tanggal,
          objekKerja,
          hektar,
          janjang,
          pokok,
          pdes,
          bahan,
          dosis,
          pemakaianBahan,
          keterangan,
        },
        {
          where: {
            [Op.and]: [{ id: karyawanAfd.id }],
          },
        }
      );
    } else {
      if (req.userId !== karyawanAfd.userId)
        return res.status(403).json({ msg: "Akses terlarang" });
      await karyawanAfd.update(
        {
          tanggal,
          objekKerja,
          hektar,
          janjang,
          pokok,
          pdes,
          bahan,
          dosis,
          pemakaianBahan,
          keterangan,
        },
        {
          where: {
            [Op.and]: [{ id: karyawanAfd.id }, { productId: req.productId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "Product updated successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteKaryawanAfd = (req, res) => {};
