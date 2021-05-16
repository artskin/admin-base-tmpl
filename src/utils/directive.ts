//console.log(UserModule.permissionCodes)
export const hasPermission = (value:string | number,admissions?) => {
  let admis = admissions || localStorage.getItem('permissionCodes') || []
  return admis.includes(value+'')
}

export const checkPermission =(el:Element, binding)=>{
  const { value } = binding
  if(value && !hasPermission(value)){
    el.parentNode && el.parentNode.removeChild(el); //el.remove()
  }
}

export default {
  inserted(el:Element, binding) {
    checkPermission(el, binding)
  },
  update(el:Element, binding) {
    checkPermission(el, binding)
  },
  hasPermission
}