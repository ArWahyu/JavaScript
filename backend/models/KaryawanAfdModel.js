import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Products from "./ProductModel.js";
import User from "./UserModel.js";

const { DataTypes } = Sequelize;

const KaryawanAfd = db.define(
  "karyawanafd",
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
    tanggal: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    objekKerja: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    },
    blok: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    },
    hektar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1, 17],
      },
    },
    janjang: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1, 11],
      },
    },
    pokok: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    pdes: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    bahan: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    dosis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1, 11],
      },
    },
    pemakaianBahan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1, 11],
      },
    },
    keterangan: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
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

Products.hasMany(KaryawanAfd);
KaryawanAfd.belongsTo(Products, { foreignKey: "productId" });
User.hasMany(KaryawanAfd);
KaryawanAfd.belongsTo(User, { foreignKey: "userId" });

export default KaryawanAfd;
