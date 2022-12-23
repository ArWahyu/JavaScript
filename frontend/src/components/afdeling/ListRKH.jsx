import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
//import { useSelector } from "react-redux";


const ObjekKerjaList = () => {
  const [karyawanAfd, setKaryawanAfd] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [tempId, setTempId] = useState(0);
  const [limit] = useState(10);
  const [totalHektar,setHektar] = useState();
  const [totalJanjang,setJanjang] = useState();
  const [totalPokok,setPokok] = useState();
  const [totalBahan,setBahan] = useState();
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);
 // const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    getObjekKerja();
    //eslint-disable-next-line
  }, [lastId, keyword]);

  const getObjekKerja = async () => {
   
    const response = await axios.get(
      `http://localhost:5000/karyawanafd?search_query=${keyword}&lastId=${lastId}&limit=${limit}`
    );
    const newUsers = response.data.results;
    setKaryawanAfd([...karyawanAfd, ...newUsers]);
    setTempId(response.data.lastId);
    setHasMore(response.data.hasMore);
    setJanjang(response.data.totalJanjang);
    setHektar(response.data.totalHektar);
    setPokok(response.data.totalPokok);
    setBahan(response.data.totalBahan);
  };

  const fetchMore = () => {
    setLastId(tempId);
  };

  const searchData = (e) => {
    e.preventDefault();
    setLastId(0);
    setKaryawanAfd([]);
    setKeyword(query);
  };
  

  return (
    
    <div className="container scroll-horizontal">
      <h1 className="title">RKH Karyawan</h1>
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
                      placeholder="Find Something Here..."
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
          <div class="columns">
            <div class="column is-4 is-offset-8">
            <table className="table is-bordered primary" >
              <thead>
                <tr style={{fontSize:"18px", backgroundColor:"ligthblue"}}>Jumlah Data = {karyawanAfd.length}</tr>
                
              </thead>
              
              </table>
              </div>
          </div>
          <InfiniteScroll
            dataLength={karyawanAfd.length}
            next={fetchMore}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            <div className="table container"  style={{ height: "500px", width: "1100px"}}>
            <table className="table is-striped is-bordered is-fullwidth mt-2" >
            
            <thead >
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>NIK</th>
                <th>Unit</th>
                <th>Jenis Kelamin</th>
                <th>Objek Kerja</th>
                <th>Tanggal Bulan </th>
                <th>Blok</th>
                <th>Hektar</th>
                <th>Janjang</th>
                <th>pokok</th>
                <th>pdes</th>
                <th>bahan</th>
                <th>dosis</th>
                <th>Penggunaan Bahan</th>
                <th>Keterangan</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
              {karyawanAfd.map((k, index) => (
                
                <tr key={k.uuid}>
                  <td>{index +1}</td>
                  <td>{k.product.name}</td>
                  <td>{k.product.nik}</td>
                  <td>{k.product.unit}</td>
                  <td>{k.product.jenisKelamin}</td>
                  <td>{k.objekKerja}</td>
                  <td>{k.tanggal}</td>
                  <td>{k.blok}</td>
                  <td>{k.hektar}</td>
                  <td>{k.janjang}</td>
                  <td>{k.pokok}</td>
                  <td>{k.pdes}</td>
                  <td>{k.bahan}</td>
                  <td>{k.dosis}</td>
                  <td>{k.pemakaianBahan}</td>
                  <td>{k.keterangan}</td>
                  
                </tr>
              ))}
              
              <tr>
                <th></th>
                <th >Jumlah</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>{totalHektar}</th>
                <th>{totalJanjang}</th>
                <th>{totalPokok}</th>
                <th ></th>
                <th ></th>
                <th ></th>
                <th>{totalBahan}</th>
                <th ></th>
              </tr>
              
            </tbody>
            
            </table>
            </div>
          </InfiniteScroll>
          
        </div>
      </div>
    </div>
  );
};

export default ObjekKerjaList;