import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditProduct = () => {
  //berasal dari data karyawan
  const [productId, setProductId] = useState([]);
  const [name, setName] = useState("");
  const [nik, setNik] = useState("");
  const [unit, setUnit] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");

  //untuk penambahan objek kerja
  const [tanggal, setTanggal] = useState();
  const [objekKerja, setObjekKerja] = useState("");
  const [blok, setBlok] = useState("");
  const [hektar, setHektar] = useState("");
  const [janjang, setJanjang] = useState("");
  const [pokok, setPokok] = useState("");
  const [pdes, setPdes] = useState("");
  const [bahan, setBahan] = useState("");
  const [dosis, setDosis] = useState("");
  const [pemakaianBahan, setPemakaianBahan] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${id}`
        );
        setProductId(response.data.id);
        setName(response.data.name);
        setNik(response.data.nik);
        setUnit(response.data.unit);
        setJenisKelamin(response.data.jenisKelamin);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProductById();
  },[id]);


    
  

  const saveData = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post(`http://localhost:5000/karyawanafd`, {
        productId: productId,
        objekKerja: objekKerja,
        tanggal: tanggal,
        blok: blok,
        hektar : hektar,
        janjang : janjang,
        pokok : pokok,
        pdes : pdes,
        bahan : bahan,
        dosis : dosis,
        pemakaianBahan: pemakaianBahan,
        keterangan : keterangan,
      });
      navigate("/karyawanafd");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  
  return (
    <div>
      <h1 className="title">Objek Kerja Karyawan</h1>
      <h3 className="subtitle">Tambah Objek Kerja</h3>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <h5 className="title">Nama             : {name}</h5>
              </div>
              <div className="field">
                <h5 className="title" >NIK              : {nik}</h5>
              </div>
              <div className="field">
                <h5 className="title">Unit             : {unit}</h5>
              </div>
              <div className="field">
                <h5 className="title">Jenis Kelamin    : {jenisKelamin}</h5>
              </div>
              <form onSubmit={saveData}>
              
              <div className="field">
                <label className="label">Objek Kerja</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={objekKerja}
                    onChange={(e) => setObjekKerja(e.target.value)}
                    placeholder="objek kerja"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal Bulan Tahun</label>
                <div className="control">
                  <input
                    type="date"
                    format="dd-mmm-yyyy"
                    className="input"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                    placeholder="dd-mmmm-yyyy"
                  />
                  
                </div>
              </div>
              <div className="field">
                <label className="label">Blok</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={blok}
                    onChange={(e) => setBlok(e.target.value)}
                    placeholder="Area Blok"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Luas Kerja /H</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={hektar}
                    onChange={(e) => setHektar(e.target.value)}
                    placeholder="Luas Hasil Kerja"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Janjang</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={janjang}
                    onChange={(e) => setJanjang(e.target.value)}
                    placeholder="Jumlah janjang"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Pokok</label>
                <div className="control">
                  <input
                    type="tnumber"
                    className="input"
                    value={pokok}
                    onChange={(e) => setPokok(e.target.value)}
                    placeholder="Pokok"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Pdes</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={pdes}
                    onChange={(e) => setPdes(e.target.value)}
                    placeholder="Pdes"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Bahan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={bahan}
                    onChange={(e) => setBahan(e.target.value)}
                    placeholder="Bahan Yang Digunakan"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Dosis</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={dosis}
                    onChange={(e) => setDosis(e.target.value)}
                    placeholder="Dosisyang Digunakan"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Jumlah Penggunaan Bahan</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={pemakaianBahan}
                    onChange={(e) => setPemakaianBahan(e.target.value)}
                    placeholder="Jumlah Bahan"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Keterangan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                    placeholder="keterangan"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
              </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditProduct;