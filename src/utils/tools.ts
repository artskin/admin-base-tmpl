
export function styleToObject(str:string){
  let index=str.lastIndexOf("\{");
  str=str.substring(index+1,str.length-1);

  let cssVars = str.split(';')
  let cssMap = {}
  cssVars.forEach((element:String) => {
    let cssArr = element.split(':');
    cssMap[cssArr[0].trim()] = cssArr[1];
  });
  return cssMap;
}

export function themeSetting(theme:string){
  if(!document.body.classList.length){
    document.body.classList.add(theme)
  }else{
    document.body.classList.replace(document.body.classList[0],theme)
  }
}