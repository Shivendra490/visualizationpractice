import React, { useEffect, useState } from 'react'
import CardContainer from './CardContainer'
import countries from '../Data/countries'
// import './Globe.css'
import './Globe.css'
import Loading from './Loading'

const Globe = () => {
    
    const [input, setInput] = useState('')
    const [start,setStart]=useState(true)
    const [include,setInclude]=useState(false)
    const [sort,setSort]=useState(true)
    // const [api,setApi]=useState(countries)
    const [filteredData,setFilteredData]=useState([])
    const [len, setLen] = useState(filteredData.length)
    const [loading, setLoading] = useState(false)
    
    // console.log('api',api)
    
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            
        let temp=[];
        console.log('useeffect');
        console.log('var checkig',filteredData,input,sort)
        if(start){
            temp=countries.filter((curElem)=>{
                
                return (curElem.toLowerCase().startsWith(input.trim().toLowerCase()))
            })


            
        }
        else{
            temp=countries.filter((curElem)=>{
                return curElem.toLowerCase().includes(input.toLowerCase())
            })

        }
        

        console.log(temp.reverse(),'lfkjsdfjasdlkj')
        if(!sort){
            temp.reverse()
        }
        

        

        console.log('useeffect',temp)
       

        
        setFilteredData(temp)
        setLen(temp.length)
        setLoading(false)
        },2000)//set time out for delay only
    },[input,sort])

    

    
  
    


    
    const handleInclude=(e)=>{
       setInclude(true)
       setStart(false)
    }

    const handleStart=(e)=>{
        setInclude(false)
        setStart(true)
     }

    const handleSort=()=>{
       
        setSort(!sort)

    }

    const handleInput=(e)=>{
        setInput(e.target.value)
        console.log(e.target.value,'input')
        
    }

  return (
      <>
    <div className='globe-bg'> 
      <div className="wrapper-container">
          <div className="main-heading">WORLD COUNTRIES LIST</div>
          <div className="static-sub-heading">Total Numbers of Countries : 193</div>
          <div className="dynamic-sub-heading">countries containing letter {len}</div>
          <div className="button-wrapper">
              <button className={start ? 'active' : 'inactive'} onClick={handleStart}>STARTING WORD</button>
              <button className={include ? 'active' : 'inactive'} onClick={handleInclude}>SEARCH WITH ANY WORD</button>
              <button onClick={handleSort}>sort ||</button>
          </div>
          <div className="search-wrapper">
              <input type='search' name='search' placeholder='search country...' onChange={handleInput} value={input}/>
              {/* <span>sicon</span> */}
          </div>
      </div>
      
    </div>

   

    {loading ? <Loading/> : <CardContainer filteredData={filteredData}/>}

   
    </>

  )
}

export default Globe
