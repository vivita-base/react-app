import {useState,useEffect} from 'react';

const usePersistState = (defaultVal,localStorageName,type) => {

  let initVal = defaultVal;
  if(localStorage.getItem(localStorageName) !== undefined && localStorage.getItem(localStorageName) !== null){
    initVal = localStorage.getItem(localStorageName);
  }

  if(type !== undefined){
    if(type === "number"){
      initVal = parseInt(initVal);
    }else if(type === "boolean"){
      initVal = (initVal === "true")?true:false;
    }else if(type === "object" || type === "array"){
      try{
        initVal = JSON.parse(initVal);
      }catch(e){
        console.log("failed to parse "+localStorageName);
        initVal = null;
      }
    }
    if(type === "object"){
      if(initVal === null || typeof initVal !== 'object'){
        initVal = {}
      }
    }
    if(type === "array"){
      if(initVal === null || typeof initVal !== 'object' || !Array.isArray(initVal)){
        initVal = []
      }
    }
  }

  const [value, setValue] = useState(initVal);

  useEffect(() => {
    let prepVal = value;
    if(type === "object"|| type === "array"){
      try{
        prepVal = JSON.stringify(value);
      }catch(e){
        console.log("failed to stringify "+localStorageName);
      }
      
    }
    localStorage.setItem(localStorageName,prepVal);
  },[value,localStorageName,type])

  return [value, setValue];
}

export default usePersistState;