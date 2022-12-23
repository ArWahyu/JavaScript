import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getSearch = async (req, res) => {
  const last_id = parseInt(req.query.lastId) || 0;
  const limit = parseInt(req.query.limit) || 30;
  const search = req.query.search_query || "";
  try {
    //pencarian kategori afd
    if (req.role === "admin" || req.role === "Personalia") {
      let results = [];
      let total = 0;

      if (last_id < 1) {
        const result = await Product.findAll({
          attributes: [
            "id",
            "uuid",
            "name",
            "nik",
            "pt",
            "unit",
            "alamat",
            "tempatLahir",
            "tanggalLahir",
            "jenisKelamin",
            "agama",
            "pendidikan",
            "status",
            "suku",
            "noRek",
            "noHp",
            "tanggalMasukKerja",
            "jabatan",
            "pekerjaan",
            "golongan",
            "greate",
            "mutasi",
            "kategori",
          ],
          where: {
            [Op.or]: [
              {
                name: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                nik: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                pt: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                pekerjaan: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                jenisKelamin: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                unit: {
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
          ],
          limit: limit,
          order: [["name", "ASC"]],
        });

        results = result;
        for (let i = 0; i < results.length; i++) {
          total = total + result[i].nik;
        }
      } else {
        const result = await Product.findAll({
          attributes: [
            "id",
            "uuid",
            "name",
            "nik",
            "pt",
            "unit",
            "alamat",
            "tempatLahir",
            "tanggalLahir",
            "jenisKelamin",
            "agama",
            "pendidikan",
            "status",
            "suku",
            "noRek",
            "noHp",
            "tanggalMasukKerja",
            "jabatan",
            "pekerjaan",
            "golongan",
            "greate",
            "mutasi",
            "kategori",
          ],
          where: {
            id: {
              [Op.lt]: last_id,
            },
            [Op.or]: [
              {
                name: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                nik: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                pt: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                pekerjaan: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                jenisKelamin: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                unit: {
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
          ],
          limit: limit,
          order: [["name", "ASC"]],
        });
        results = result;
        for (let i = 0; i < results.length; i++) {
          total = total + result[i].nik;
        }
      }

      res.json({
        total: total,
        //laki:jkl,
        //perempuan: jkp,
        results: results,
        lastId: results.length ? results[results.length - 1].id : 0,
        hasMore: results.length >= limit ? true : false,
        long: results.length,
      });
    } else {
      //pencarian kategori user
      let results = [];
      let total = 0;
      if (last_id < 1) {
        const result = await Product.findAll({
          attributes: [
            "id",
            "uuid",
            "name",
            "nik",
            "pt",
            "unit",
            "alamat",
            "tempatLahir",
            "tanggalLahir",
            "jenisKelamin",
            "agama",
            "pendidikan",
            "status",
            "suku",
            "noRek",
            "noHp",
            "tanggalMasukKerja",
            "jabatan",
            "pekerjaan",
            "golongan",
            "greate",
            "mutasi",
            "kategori",
          ],
          where: {
            //pemisah antar user userId: req.userId
            unit: req.role,
            [Op.or]: [
              {
                name: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                nik: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                pt: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                pekerjaan: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                jenisKelamin: {
                  [Op.like]: "%" + search + "%",
                },
              },
            ],
            //limit: limit,
          },
          include: [
            {
              model: User,
              attributes: ["name", "email"],
            },
          ],
          limit: limit,
          order: [["name", "ASC"]],
        });
        results = result;
        for (let i = 0; i < results.length; i++) {
          total = total + result[i].nik;
        }
      } else {
        const result = await Product.findAll({
          attributes: [
            "id",
            "uuid",
            "name",
            "nik",
            "pt",
            "unit",
            "alamat",
            "tempatLahir",
            "tanggalLahir",
            "jenisKelamin",
            "agama",
            "pendidikan",
            "status",
            "suku",
            "noRek",
            "noHp",
            "tanggalMasukKerja",
            "jabatan",
            "pekerjaan",
            "golongan",
            "greate",
            "mutasi",
            "kategori",
          ],

          where: {
            //userId: req.userId,
            id: {
              [Op.lt]: last_id,
            },
            [Op.or]: [
              {
                name: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                nik: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                pt: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                pekerjaan: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                jenisKelamin: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                unit: {
                  [Op.like]: "%" + search + "%",
                },
              },
            ],
            //limit: limit,
          },
          include: [
            {
              model: User,
              attributes: ["name", "email"],
            },
          ],
          limit: limit,
          order: [["name", "ASC"]],
        });
        results = result;
        for (let i = 0; i < results.length; i++) {
          total = total + result[i].nik;
        }
      }
      res.json({
        total: total,
        //laki:jkl,
        //perempuan: jkp,
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

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    let response;
    if (req.role === "admin" || "personalia") {
      response = await Product.findOne({
        attributes: [
          "id",
          "uuid",
          "name",
          "nik",
          "pt",
          "unit",
          "alamat",
          "tempatLahir",
          "tanggalLahir",
          "jenisKelamin",
          "agama",
          "pendidikan",
          "status",
          "suku",
          "noRek",
          "noHp",
          "tanggalMasukKerja",
          "jabatan",
          "pekerjaan",
          "golongan",
          "greate",
          "mutasi",
          "kategori",
        ],
        where: {
          id: product.id,
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Product.findOne({
        attributes: [
          "id",
          "uuid",
          "name",
          "nik",
          "pt",
          "unit",
          "alamat",
          "tempatLahir",
          "tanggalLahir",
          "jenisKelamin",
          "agama",
          "pendidikan",
          "status",
          "suku",
          "noRek",
          "noHp",
          "tanggalMasukKerja",
          "jabatan",
          "pekerjaan",
          "golongan",
          "greate",
          "mutasi",
          "kategori",
        ],
        where: {
          [Op.and]: [{ id: product.id }],
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  const {
    name,
    nik,
    pt,
    unit,
    alamat,
    tempatLahir,
    tanggalLahir,
    jenisKelamin,
    agama,
    pendidikan,
    status,
    suku,
    noRek,
    noHp,
    tanggalMasukKerja,
    jabatan,
    pekerjaan,
    golongan,
    greate,
    mutasi,
    kategori,
  } = req.body;
  try {
    await Product.create({
      name: name,
      nik: nik,
      pt: pt,
      unit: unit,
      alamat: alamat,
      tempatLahir: tempatLahir,
      tanggalLahir: tanggalLahir,
      jenisKelamin: jenisKelamin,
      agama: agama,
      pendidikan: pendidikan,
      status: status,
      suku: suku,
      noRek: noRek,
      noHp: noHp,
      tanggalMasukKerja: tanggalMasukKerja,
      jabatan: jabatan,
      pekerjaan: pekerjaan,
      golongan: golongan,
      greate: greate,
      mutasi: mutasi,
      kategori: kategori,
      userId: req.userId,
    });
    res.status(201).json({ msg: "Product Created Successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const {
      name,
      nik,
      pt,
      unit,
      alamat,
      tempatLahir,
      tanggalLahir,
      jenisKelamin,
      agama,
      pendidikan,
      status,
      suku,
      noRek,
      noHp,
      tanggalMasukKerja,
      jabatan,
      pekerjaan,
      golongan,
      greate,
      mutasi,
      kategori,
    } = req.body;
    if (req.role === "admin") {
      await Product.update(
        {
          name,
          nik,
          pt,
          unit,
          alamat,
          tempatLahir,
          tanggalLahir,
          jenisKelamin,
          agama,
          pendidikan,
          status,
          suku,
          noRek,
          noHp,
          tanggalMasukKerja,
          jabatan,
          pekerjaan,
          golongan,
          greate,
          mutasi,
          kategori,
        },
        {
          where: {
            id: product.id,
          },
        }
      );
    } else {
      if (req.userId !== product.userId)
        return res.status(403).json({ msg: "Akses terlarang" });
      await Product.update(
        {
          name,
          nik,
          pt,
          unit,
          alamat,
          tempatLahir,
          tanggalLahir,
          jenisKelamin,
          agama,
          pendidikan,
          status,
          suku,
          noRek,
          noHp,
          tanggalMasukKerja,
          jabatan,
          pekerjaan,
          golongan,
          greate,
          mutasi,
          kategori,
        },
        {
          where: {
            [Op.and]: [{ id: product.id }],
          },
        }
      );
    }
    res.status(200).json({ msg: "Product updated successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const {
      name,
      nik,
      pt,
      unit,
      alamat,
      tempatLahir,
      tanggalLahir,
      jenisKelamin,
      agama,
      pendidikan,
      status,
      suku,
      noRek,
      noHp,
      tanggalMasukKerja,
      jabatan,
      pekerjaan,
      golongan,
      greate,
      mutasi,
      kategori,
    } = req.body;
    if (req.role === "admin") {
      await Product.destroy({
        where: {
          id: product.id,
        },
      });
    } else {
      if (req.userId !== product.userId)
        return res.status(403).json({ msg: "Akses terlarang" });
      await Product.destroy({
        where: {
          [Op.and]: [{ id: product.id }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "Product deleted successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
