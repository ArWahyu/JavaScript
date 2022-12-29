import React, { useState, useEffect } from "react";
import axios from "axios";


const LaporanBulanan = () => {
  const [bulan12, setBulan12] = useState([]);
  const [bulan11, setBulan11] = useState([]);
  const [bulan10, setBulan10] = useState([]);
  const [bulan9, setBulan9] = useState([]);
  const [bulan8, setBulan8] = useState([]);
  const [bulan7, setBulan7] = useState([]);
  const [bulan6, setBulan6] = useState([]);
  const [bulan5, setBulan5] = useState([]);
  const [bulan4, setBulan4] = useState([]);
  const [bulan3, setBulan3] = useState([]);
  const [bulan2, setBulan2] = useState([]);
  const [bulan1, setBulan1] = useState([]);

  const [totalHektar1,setHektar1] = useState();
  const [totalJanjang1,setJanjang1] = useState();
  const [totalPokok1,setPokok1] = useState();
  const [totalBahan1,setBahan1] = useState();

  const [totalHektar2,setHektar2] = useState();
  const [totalJanjang2,setJanjang2] = useState();
  const [totalPokok2,setPokok2] = useState();
  const [totalBahan2,setBahan2] = useState();
  
  const [totalHektar3,setHektar3] = useState();
  const [totalJanjang3,setJanjang3] = useState();
  const [totalPokok3,setPokok3] = useState();
  const [totalBahan3,setBahan3] = useState();

  const [totalHektar4,setHektar4] = useState();
  const [totalJanjang4,setJanjang4] = useState();
  const [totalPokok4,setPokok4] = useState();
  const [totalBahan4,setBahan4] = useState();

  const [totalHektar5,setHektar5] = useState();
  const [totalJanjang5,setJanjang5] = useState();
  const [totalPokok5,setPokok5] = useState();
  const [totalBahan5,setBahan5] = useState();

  const [totalHektar6,setHektar6] = useState();
  const [totalJanjang6,setJanjang6] = useState();
  const [totalPokok6,setPokok6] = useState();
  const [totalBahan6,setBahan6] = useState();

  const [totalHektar7,setHektar7] = useState();
  const [totalJanjang7,setJanjang7] = useState();
  const [totalPokok7,setPokok7] = useState();
  const [totalBahan7,setBahan7] = useState();
  
  const [totalHektar8,setHektar8] = useState();
  const [totalJanjang8,setJanjang8] = useState();
  const [totalPokok8,setPokok8] = useState();
  const [totalBahan8,setBahan8] = useState();

  const [totalHektar9,setHektar9] = useState();
  const [totalJanjang9,setJanjang9] = useState();
  const [totalPokok9,setPokok9] = useState();
  const [totalBahan9,setBahan9] = useState();

  const [totalHektar10,setHektar10] = useState();
  const [totalJanjang10,setJanjang10] = useState();
  const [totalPokok10,setPokok10] = useState();
  const [totalBahan10,setBahan10] = useState();

  const [totalHektar11,setHektar11] = useState();
  const [totalJanjang11,setJanjang11] = useState();
  const [totalPokok11,setPokok11] = useState();
  const [totalBahan11,setBahan11] = useState();

  const [totalHektar12,setHektar12] = useState();
  const [totalJanjang12,setJanjang12] = useState();
  const [totalPokok12,setPokok12] = useState();
  const [totalBahan12,setBahan12] = useState();

  const [year, setYear]=useState("")
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [keyword2, setKeyword2] = useState("");
  const [query2, setQuery2] = useState("");
  useEffect(() => {
    getBulan12();
    getBulan11();
    getBulan10();
    getBulan9();
    getBulan8();
    getBulan7();
    getBulan6();
    getBulan5();
    getBulan4();
    getBulan3();
    getBulan2();
    getBulan1();
    //eslint-disable-next-line
  }, [keyword,keyword2]);

  const getBulan12 = async () => {
   
    const response = await axios.get(
      `http://localhost:5000/laporan/?search_query=${keyword}&search_query2=${keyword2}`
    );
    const newUsers = response.data.results;
    setBulan12([...bulan12,...newUsers]);
    setJanjang1(response.data.totalJanjang);
    setHektar1(response.data.totalHektar);
    setPokok1(response.data.totalPokok);
    setBahan1(response.data.totalBahan);
    setYear(response.data.year);
  };
  const getBulan11 = async () => {
   
    const response = await axios.get(
      `http://localhost:5000/laporan1/?search_query=${keyword}&search_query2=${keyword2}`
    );
    const newUsers = response.data.results;
    setBulan11([...bulan11,...newUsers]);
    setJanjang2(response.data.totalJanjang);
    setHektar2(response.data.totalHektar);
    setPokok2(response.data.totalPokok);
    setBahan2(response.data.totalBahan);
  };
  const getBulan10 = async () => {
   
    const response = await axios.get(
      `http://localhost:5000/laporan2/?search_query=${keyword}&search_query2=${keyword2}`
    );
    const newUsers = response.data.results;
    setBulan10([...bulan10,...newUsers]);
    setJanjang3(response.data.totalJanjang);
    setHektar3(response.data.totalHektar);
    setPokok3(response.data.totalPokok);
    setBahan3(response.data.totalBahan);
  };
  const getBulan9 = async () => {
   
    const response = await axios.get(
      `http://localhost:5000/laporan3/?search_query=${keyword}&search_query2=${keyword2}`
    );
    const newUsers = response.data.results;
    setBulan9([...bulan9,...newUsers]);
    setJanjang4(response.data.totalJanjang);
    setHektar4(response.data.totalHektar);
    setPokok4(response.data.totalPokok);
    setBahan4(response.data.totalBahan);
  };
  const getBulan8 = async () => {
   
    const response = await axios.get(
      `http://localhost:5000/laporan4/?search_query=${keyword}&search_query2=${keyword2}`
    );
    const newUsers = response.data.results;
    setBulan8([...bulan8,...newUsers]);
    setJanjang5(response.data.totalJanjang);
    setHektar5(response.data.totalHektar);
    setPokok5(response.data.totalPokok);
    setBahan5(response.data.totalBahan);
  };
  const getBulan7 = async () => {
   
    const response = await axios.get(
      `http://localhost:5000/laporan5/?search_query=${keyword}&search_query2=${keyword2}`
    );
    const newUsers = response.data.results;
    setBulan7([...bulan7,...newUsers]);
    setJanjang6(response.data.totalJanjang);
    setHektar6(response.data.totalHektar);
    setPokok6(response.data.totalPokok);
    setBahan6(response.data.totalBahan);
  };
  const getBulan6 = async () => {
   
    const response = await axios.get(
      `http://localhost:5000/laporan6/?search_query=${keyword}&search_query2=${keyword2}`
    );
    const newUsers = response.data.results;
    setBulan6([...bulan6,...newUsers]);
    setJanjang7(response.data.totalJanjang);
    setHektar7(response.data.totalHektar);
    setPokok7(response.data.totalPokok);
    setBahan7(response.data.totalBahan);
  };
  const getBulan5 = async () => {
   
    const response = await axios.get(
      `http://localhost:5000/laporan7/?search_query=${keyword}&search_query2=${keyword2}`
    );
    const newUsers = response.data.results;
    setBulan5([...bulan5,...newUsers]);
    setJanjang8(response.data.totalJanjang);
    setHektar8(response.data.totalHektar);
    setPokok8(response.data.totalPokok);
    setBahan8(response.data.totalBahan);
  };
  const getBulan4 = async () => {
   
    const response = await axios.get(
      `http://localhost:5000/laporan8/?search_query=${keyword}&search_query2=${keyword2}`
    );
    const newUsers = response.data.results;
    setBulan4([...bulan4,...newUsers]);
    setJanjang9(response.data.totalJanjang);
    setHektar9(response.data.totalHektar);
    setPokok9(response.data.totalPokok);
    setBahan9(response.data.totalBahan);
  };
  const getBulan3 = async () => {
   
    const response = await axios.get(
      `http://localhost:5000/laporan9/?search_query=${keyword}&search_query2=${keyword2}`
    );
    const newUsers = response.data.results;
    setBulan3([...bulan3,...newUsers]);
    setJanjang10(response.data.totalJanjang);
    setHektar10(response.data.totalHektar);
    setPokok10(response.data.totalPokok);
    setBahan10(response.data.totalBahan);
  };
  const getBulan2 = async () => {
   
    const response = await axios.get(
      `http://localhost:5000/laporan10/?search_query=${keyword}&search_query2=${keyword2}`
    );
    const newUsers = response.data.results;
    setBulan2([...bulan2,...newUsers]);
    setJanjang11(response.data.totalJanjang);
    setHektar11(response.data.totalHektar);
    setPokok11(response.data.totalPokok);
    setBahan11(response.data.totalBahan);
  };
  const getBulan1 = async () => {
   
    const response = await axios.get(
      `http://localhost:5000/laporan11/?search_query=${keyword}&search_query2=${keyword2}`
    );
    const newUsers = response.data.results;
    setBulan1([...bulan1,...newUsers]);
    setJanjang12(response.data.totalJanjang);
    setHektar12(response.data.totalHektar);
    setPokok12(response.data.totalPokok);
    setBahan12(response.data.totalBahan);
  };
 

  const searchData = (e) => {
    e.preventDefault();
    setBulan12([]);
    setBulan11([]);
    setBulan10([]);
    setBulan9([]);
    setBulan8([]);
    setBulan7([]);
    setBulan6([]);
    setBulan5([]);
    setBulan4([]);
    setBulan3([]);
    setBulan2([]);
    setBulan1([]);

    setKeyword(query);
    setKeyword2(query2)
  };
  

  return (
    
    <div className="container scroll-horizontal">
      <h1 className="title">RKB Karyawan</h1>
      <h2 className="subtitle">List of Data</h2>
      
      <div className="columns">
        <div className="column is-centered">
          <form onSubmit={searchData}>
            <div className="columns is-vcentered">
              <div className="column is-8">
                <div className="field has-addons mt-2">
                  <div className="control is-expanded">
                    <input
                      type="text"
                      className="input"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Objek Kerja"
                    />
                    <q>Tahun</q>
                    <input
                      type="text"
                      className="input"
                      value={year}
                      onChange={(e) => setQuery2(e.target.value)}
                      placeholder="Tahun"
                    />
                  </div>
                  <div className="control">
                    <button type="submit" className="button is-info">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </form>
          
            <div className="table container"  style={{ height: "300px", width: "900px"}}>
            <table className="table is-striped is-bordered is-fullwidth mt-2" >
            
            <thead >
              <tr>
                <th>Bulan</th>
                <th>Hektar</th>
                <th>Janjang</th>
                <th>pokok</th>
                <th>Penggunaan Bahan</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Desember</th>
                <td>{totalHektar1}</td>
                <td>{totalJanjang1}</td>
                <td>{totalPokok1}</td>
                <td>{totalBahan1}</td>
              </tr>
              <tr>
                <th>November</th>
                <td>{totalHektar2}</td>
                <td>{totalJanjang2}</td>
                <td>{totalPokok2}</td>
                <td>{totalBahan2}</td>
              </tr>
              <tr>
                <th>Oktober</th>
                <td>{totalHektar3}</td>
                <td>{totalJanjang3}</td>
                <td>{totalPokok3}</td>
                <td>{totalBahan3}</td>
              </tr>
              <tr>
                <th>September</th>
                <td>{totalHektar4}</td>
                <td>{totalJanjang4}</td>
                <td>{totalPokok4}</td>
                <td>{totalBahan4}</td>
              </tr>
              <tr>
                <th>Agustus</th>
                <td>{totalHektar5}</td>
                <td>{totalJanjang5}</td>
                <td>{totalPokok5}</td>
                <td>{totalBahan5}</td>
              </tr>
              <tr>
                <th>Juli</th>
                <td>{totalHektar6}</td>
                <td>{totalJanjang6}</td>
                <td>{totalPokok6}</td>
                <td>{totalBahan6}</td>
              </tr>
              <tr>
                <th>Juni</th>
                <td>{totalHektar7}</td>
                <td>{totalJanjang7}</td>
                <td>{totalPokok7}</td>
                <td>{totalBahan7}</td>
              </tr>
              <tr>
                <th>Mei</th>
                <td>{totalHektar8}</td>
                <td>{totalJanjang8}</td>
                <td>{totalPokok8}</td>
                <td>{totalBahan8}</td>
              </tr>
              <tr>
                <th>April</th>
                <td>{totalHektar9}</td>
                <td>{totalJanjang9}</td>
                <td>{totalPokok9}</td>
                <td>{totalBahan9}</td>
              </tr>
              <tr>
                <th>Maret</th>
                <td>{totalHektar10}</td>
                <td>{totalJanjang10}</td>
                <td>{totalPokok10}</td>
                <td>{totalBahan10}</td>
              </tr>
              <tr>
                <th>Februari</th>
                <td>{totalHektar11}</td>
                <td>{totalJanjang11}</td>
                <td>{totalPokok11}</td>
                <td>{totalBahan11}</td>
              </tr>
              <tr>
                <th>Januari</th>
                <td>{totalHektar12}</td>
                <td>{totalJanjang12}</td>
                <td>{totalPokok12}</td>
                <td>{totalBahan12}</td>
              </tr>
            </tbody>
            
            </table>
           <div className="colums">
              <div className="container">
                <q></q>
              </div>
            </div> 
            </div>

            

        </div>
      </div>
      
    </div>
    
    

    //laporan tahunan
    
  );
};

export default LaporanBulanan;