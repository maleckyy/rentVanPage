import './App.css';
import {

  Route,
  Link,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useRouteError,

} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import VansList, {loader as vansListLoader} from './components/Vans';
import Layout from './components/Layout'
import VanDetail,{loader as vanDetailLoader} from './components/VanDetail';

import Income from './components/Host/Income';
import Review from './components/Host/Review';
import Dashboard from './components/Host/Dashboard';
import HostLayout from './components/Host/HostLayout';
import HostVans, {loader as hostVansLoader} from './components/Host/HostVans';
import HostVansDetail,{loader as hostVansDetailLoader} from './components/Host/HostVansDetail';
import VanDesc from './components/Host/VanDesc';
import VanPrice from './components/Host/VanPrice';
import VanPhoto from './components/Host/VanPhoto';
import Login from './components/Login';
import { requireAuth } from './utils';


import "./server"

function ErrorInfo(){
  const error = useRouteError()
  return <h1>There was an error: {error.message}</h1>
}

function ErrorPage(){
  return(
    <div className='error__page__cont'>
      <h1>Page not found!</h1>
      <div className='error__button'>

      <Link to='/'>Back to home page</Link>
      </div>

    </div>
  )
}

// async function authC(){
//   const isLog = false

//   if (!isLog){
//     // redirect('/')
//     console.log('niezalowogina')
    
//     return <Navigate to="/"/>


      
//   }else{

//     console.log('loged')
//     return null
//   }
// }

// function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>} >

        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='login' element={<Login/>} />
        <Route 
        path='vans' 
        element={<VansList/>} 
        errorElement = {<ErrorInfo/>}
        loader={vansListLoader}
        
        />

        <Route path='vans/:id' element={<VanDetail/>}
        loader={vanDetailLoader}
        />
{/* tutaj host potrzeba log ON */}
        <Route path='host' element={<HostLayout/>}>
          <Route 
          index 
          element={<Dashboard/>}
          // loader={ async ()=> await requireAuth()}
          // loader={async ()=>{
          //   return authC()
          //   // console.log('s')
          // }}
          // loader={ async()=>requireAuth()}
          
          
          /> 
          <Route 
          path='income' 
          element={<Income/>}
          // loader={ async ()=> await requireAuth()}
          // loader={async ()=>{
          //   return authC()
          //   // console.log('s')
          // }}
          
          />
          <Route 
          path='review' 
          element={<Review/>}
          // loader={ async ()=> await requireAuth()}
          // loader={async ()=>{
          //   return authC()
          //   // console.log('s')
          // }}
          
          />
          <Route 
          path='vans' 
          element={<HostVans/>}
          // loader={async ()=>{
            //   return authC()
            //   // console.log('s')
            // }}
            
            loader={hostVansLoader}
            />
          <Route path='vans/:id' element={<HostVansDetail/>}
          loader={hostVansDetailLoader}
          >
            <Route index element={<VanDesc/>} 
            // loader={ async ()=> await requireAuth()}
            
            />
            <Route path='pricing' element={<VanPrice/>} 
            // loader={ async ()=> await requireAuth()}
            
            />
            <Route path='photos' element={<VanPhoto/>}
            // loader={ async ()=> await requireAuth()}
            />

          </Route>

        </Route>


        <Route path='*' element={<ErrorPage/>}/>
    </Route>
  ))
  function App() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
