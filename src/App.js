import List from './Components/List.jsx';
import './App.css';

function App() {
  let info=[
    {brands:"Android"},
    {brands:"Blackberry"},
    {brands:"iPhone"},
    {brands:"Windows Phone"},
  ];

  let info2=[
    {brands:"Samsung"},
    {brands:"HTC"},
    {brands:"Micromax"},
    {brands:"Apple"},
  ]

  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      {info.map((e)=>(
        <div>
        <ul key={e.index}>
          
          <List {...e} />
        
         </ul>
        </div>
      ))}

<div className="App">
      <h1>Mobile Operating System</h1>
      {info2.map((e)=>(
        <div>
        <ul key={e.index}>
          {
            <ul><ul><List {...e} /></ul></ul>
            
          }

         </ul>
        </div>
      ))}
      </div>


    </div>
  );
}

export default App;
