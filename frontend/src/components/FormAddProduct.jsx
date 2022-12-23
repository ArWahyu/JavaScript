import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddProduct = () => {
  const [name, setName] = useState("");
  const [nik, setNik] = useState("");
  const [pt, setPt] = useState("");
  const [unit, setUnit] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [agama, setAgama] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [status, setStatus] = useState("");
  const [suku, setSuku] = useState("");
  const [noRek, setNoRek] = useState("");
  const [noHp, setNoHp] = useState("");
  const [tanggalMasukKerja, setTanggalMasukKerja] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [golongan, setGollongan] = useState("")
  const [greate, setGreate] = useState("");
  const [mutasi, setMutasi] = useState("");
  const [kategori, setKategori] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
            name: name,
            nik : nik,
            pt : pt, 
            unit : unit, 
            alamat : alamat, 
            tempatLahir : tempatLahir, 
            tanggalLahir: tanggalLahir, 
            jenisKelamin : jenisKelamin, 
            agama : agama, 
            pendidikan : pendidikan, 
            status: status, 
            suku: suku, 
            noRek: noRek, 
            noHp: noHp, 
            tanggalMasukKerja : tanggalMasukKerja, 
            jabatan: jabatan, 
            pekerjaan: pekerjaan, 
            golongan: golongan, 
            greate : greate, 
            mutasi: mutasi, 
            kategori: kategori
      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Data Karyawan</h1>
      <h2 className="subtitle">Add New Karyawan</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveProduct}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">NIK</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={nik}
                    onChange={(e) => setNik(e.target.value)}
                    placeholder="NIK"    
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">PT</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={pt}
                      onChange={(e) => setPt(e.target.value)}
                    >
                      <option value="-">----</option>
                      <option value="PT. Nusaina Agro Kobi Manie">PT. Nusaina Agro Kobi Manie</option>
                      <option value="PT. Nusaina Agro Tanah Merah Manie">PT. Nusaina Agro Tanah Merah Manie</option>
                      <option value="PT. Nusaina Agro Aketernate Manie">PT. Nusaina Agro Aketernate Manie</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="field">
                <label className="label">Unit</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    placeholder="unit"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Alamat</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="Alamat"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tempat Lahir</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={tempatLahir}
                    onChange={(e) => setTempatLahir(e.target.value)}
                    placeholder="Tempat Lahir"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal Lahir</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={tanggalLahir}
                    onChange={(e) => setTanggalLahir(e.target.value)}
                    placeholder="Tanggal Lahir"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Jenis Kelamin</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={jenisKelamin}
                      onChange={(e) => setJenisKelamin(e.target.value)}
                    >
                      <option value="-">----</option>
                      <option value="laki-laki">Laki-laki</option>
                      <option value="perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Agama</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={agama}
                      onChange={(e) => setAgama(e.target.value)}
                    >
                      <option value="-">----</option>
                      <option value="Islam">Islam</option>
                      <option value="Kristen">Kristen</option>
                      <option value="Katolik">Katolik</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Budha">Budha</option>
                      <option value="Konghucu">Konghucu</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Pendidikan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={pendidikan}
                    onChange={(e) => setPendidikan(e.target.value)}
                    placeholder="Pendidikan Terakhir"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Status</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Status"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Suku</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={suku}
                    onChange={(e) => setSuku(e.target.value)}
                    placeholder="Suku"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">No. Rekening</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={noRek}
                    onChange={(e) => setNoRek(e.target.value)}
                    placeholder="BRI : 00000000"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">No Telpon</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={noHp}
                    onChange={(e) => setNoHp(e.target.value)}
                    placeholder="Nomor Telpon"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal Masuk Kerja</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={tanggalMasukKerja}
                    onChange={(e) => setTanggalMasukKerja(e.target.value)}
                    placeholder="Tanggal Masuk Kerja"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Jabatan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={jabatan}
                    onChange={(e) => setJabatan(e.target.value)}
                    placeholder="Jabatan"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Pekerjaan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={pekerjaan}
                    onChange={(e) => setPekerjaan(e.target.value)}
                    placeholder="Pekerjaan"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Golongan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={golongan}
                    onChange={(e) => setGollongan(e.target.value)}
                    placeholder="Golongan"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Greate</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={greate}
                    onChange={(e) => setGreate(e.target.value)}
                    placeholder="Greate"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Mutasi</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={mutasi}
                    onChange={(e) => setMutasi(e.target.value)}
                    placeholder="Mutasi"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Kategori</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                    placeholder="Kategori"
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

export default FormAddProduct;