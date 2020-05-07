import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { AgGridReact } from 'ag-grid-react'; // ag grid compponent
import 'ag-grid-community/dist/styles/ag-grid.css'; // css
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // css
import PictureRenderer from './PictureRenderer.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      columnDefs: [
        {  field: "gender" ,sortable: true,resizable: true},
        { headerName:"Name", field: "name.first" ,sortable: true,resizable: true},
        {  field: "email",sortable: true,resizable: true },
        { headerName:"picture", field:"picture", cellRenderer: 'PictureRenderer',sortable: true,resizable: true}
      ],
      rowData: null,
      context: { componentParent: this },
      frameworkComponents: { // you need to pass this to the <agGridReact/> for it to work
        PictureRenderer: PictureRenderer
      }
    }
  }



  componentDidMount(){
    fetch('https://randomuser.me/api/?results=40')
    .then(res=>res.json())
    .then(res=>this.setState({rowData:res.results}))
    
    
  }
  render(){
    return (
    <div
    className="ag-theme-alpine"
    style={{
      backgroundColor:'black' ,
    height: '600px',
    width: 'auto' }}
    >
       <AgGridReact
        paginationAutoPageSize={true}
        pagination={true}
        columnDefs={this.state.columnDefs}
        rowData={this.state.rowData}
        frameworkComponents={this.state.frameworkComponents}>
        </AgGridReact>
    </div>)
        
  }
}

export default App;
