import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Products = db.define(
  "product",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    nik: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        notEmpty: true,
        len: [1, 17],
      },
    },
    pt: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 250],
      },
    },
    tempatLahir: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 250],
      },
    },
    tanggalLahir: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    jenisKelamin: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    agama: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    pendidikan: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    suku: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    noRek: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    noHp: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    tanggalMasukKerja: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    jabatan: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    pekerjaan: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    golongan: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    greate: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    mutasi: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    kategori: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Users.hasMany(Products);
Products.belongsTo(Users, { foreignKey: "userId" });

export default Products;
