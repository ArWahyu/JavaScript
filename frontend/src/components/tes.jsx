import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

const UserList = () => {
  const [products, setProducts] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [tempId, setTempId] = useState(0);
  const [limit] = useState(10);
  //const [total,setTotal] = useState();
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const { user } = useSelector((state) => state.auth);
  
  useEffect(() => {
    getUsers();
    //eslint-disable-next-line
  }, [lastId, keyword]);

  const getUsers = async () => {
   
    const response = await axios.get(
      `http://localhost:5000/products?search_query=${keyword}&lastId=${lastId}&limit=${limit}`
    );
    const newUsers = response.data.results;
    setProducts([...products, ...newUsers]);
    setTempId(response.data.lastId);
    setHasMore(response.data.hasMore);
    //setTotal(response.data.total)
  };
  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getUsers();
  };

  const fetchMore = () => {
    setLastId(tempId);
  };

  const searchData = (e) => {
    e.preventDefault();
    setLastId(0);
    setProducts([]);
    setKeyword(query);
  };
  

  return (
    
    <div className="container scroll-horizontal">
      <h1 className="title">Data Karyawan</h1>
      <h2 className="subtitle">List of Data</h2>
      <Link to="/products/add" className="button is-primary mb-2">
        Add New
      </Link>
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
                <tr style={{fontSize:"18px", backgroundColor:"ligthblue"}}>Jumlah Data = {products.length}</tr>
                
              </thead>
              
              </table>
              </div>
          </div>
          <InfiniteScroll
            dataLength={products.length}
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
                <th>PT</th>
                <th>Unit</th>
                <th>Alamat</th>
                <th>Tempat Lahir</th>
                <th>Tanggal Lahir</th>
                <th>Jenis Kelamin</th>
                <th>Agama</th>
                <th>Pendidikan</th>
                <th>Status</th>
                <th>Suku</th>
                <th>No Rekening</th>
                <th>No Telpon</th>
                <th>Tanggal Masuk Kerja</th>
                <th>Jabatan</th>
                <th>Pekerjaan</th>
                <th>Golongan</th>
                <th>Great</th>
                <th>Mutasi</th>
                <th>Kategori</th>
                <th>Created By</th>
                <th>Actions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
              {products.map((product, index) => (
                //total +=product.nik,
                <tr key={product.uuid}>
                  <td>{index +1}</td>
                  <td>{product.name}</td>
                  <td>{product.nik}</td>
                  <td>{product.pt}</td>
                  <td>{product.unit}</td>
                  <td>{product.alamat}</td>
                  <td>{product.tempatLahir}</td>
                  <td>{product.tanggalLahir}</td>
                  <td>{product.jenisKelamin}</td>
                  <td>{product.agama}</td>
                  <td>{product.pendidikan}</td>
                  <td>{product.status}</td>
                  <td>{product.suku}</td>
                  <td>{product.noRek}</td>
                  <td>{product.noHp}</td>
                  <td>{product.tanggalMasukKerja}</td>
                  <td>{product.jabatan}</td>
                  <td>{product.pekerjaan}</td>
                  <td>{product.golongan}</td>
                  <td>{product.greate}</td>
                  <td>{product.mutasi}</td>
                  <td>{product.kategori}</td>
                  <td>{product.user.name}</td>
                  
                  {user && user.role === "admin" && (
                  <td>
                    <Link
                      to={`/products/edit/${product.uuid}`}
                      className="button is-small is-info"
                    >
                      Edit
                    </Link>
                    
                    <button
                      onClick={() => deleteProduct(product.uuid)}
                      className="button is-small is-danger"
                    >
                      Delete
                    </button>
                  </td>
                  )}
                  
                </tr>
              ))}
              
              <tr>
                <th></th>
                <th >Data Length</th>
                <th >{}</th>
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

export default UserList;