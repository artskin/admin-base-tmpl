
export function styleToObject(str){
	let index=str.lastIndexOf("\{");
	str=str.substring(index+1,str.length-1);

    let cssVars = str.split(';')
    let cssMap = {}
    cssVars.forEach((element:String) => {
        let cssArr = element.split(':')
        cssMap[cssArr[0].trim()] = cssArr[1]
    });
	return cssMap;
}