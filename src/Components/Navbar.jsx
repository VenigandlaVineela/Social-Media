const Navbar = () => {
     return (
          <nav className="navbar">
               <div className="container-fluid">
                    {/* Search Bar */}
                    <form className="d-flex flex-grow-1 me-3">
                         <input
                              className="form-control rounded-3 w-100"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"                               
                         />
                    </form>

                    {/* Profile Section */}
                    <div className="d-flex align-items-center">
                         <div
                              className="rounded-circle d-flex align-items-center justify-content-center me-1"
                              style={{
                                   background: 'linear-gradient(135deg, #f7b1e3, #c18ef5)',
                                   color: 'white',
                                   width: '35px',
                                   height: '35px',
                                   fontWeight: 'bold',
                              }}
                         >
                              P
                         </div>
                         <span style={{ fontSize: '12px', color: '#333' }}>▼</span>
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;

