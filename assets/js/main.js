const submenu = ()=>{
    document.getElementById("buttonSubMenu").addEventListener("click",()=>{
        let element = document.getElementById("subMenu")
        let elementStyle = window.getComputedStyle(element)
        let elementMaxHeight = elementStyle.getPropertyValue('max-height');
    
        if( elementMaxHeight == "0px"){
            document.getElementById("subMenu").style.maxHeight="300px"
        }else{
            document.getElementById("subMenu").style.maxHeight="0px"
        }
        
    })
}
submenu()

const menu = ()=> {
    let menu1 = document.querySelector(".buttonMenu > div:nth-child(1)") 
    let menu2 = document.querySelector(".buttonMenu > div:nth-child(2)") 
    let menu3 = document.querySelector(".buttonMenu > div:nth-child(3)") 
    
    const resetearAnimaciones = () =>{
        menu1.classList.remove("cruz1")
        menu2.classList.remove("opacidad")
        menu3.classList.remove("cruz3")
        menu1.classList.remove("cruz1Invertida")
        menu2.classList.remove("opacidadInvertida")
        menu3.classList.remove("cruz3Invertida")
        menu1.offsetWidth; 
        menu2.offsetWidth; 
        menu3.offsetWidth; 
    }
    
    const menuLeft = () => {
        let element = document.getElementById("menu")
        let elementStyle = window.getComputedStyle(element)
        let elementLeft = elementStyle.getPropertyValue('left');
        return [element,elementLeft]
    }
    document.getElementById("buttonMenu").addEventListener("click",(e)=>{
    
        resetearAnimaciones()
        const left = menuLeft()
        if( left[1] == "-350px"){
            left[0].style.left="0px"
            document.getElementById("fondoInactividad").style.display="block"
            menu1.classList.add("cruz1")
            menu2.classList.add("opacidad")
            menu3.classList.add("cruz3")
        }else{
            left[0].style.left="-350px"
            document.getElementById("fondoInactividad").style.display="none"
            menu1.classList.add("cruz1Invertida")
            menu2.classList.add("opacidadInvertida")
            menu3.classList.add("cruz3Invertida")
    
    
        }
    
    })
    
    document.getElementById("fondoInactividad").addEventListener("click",()=>{
        resetearAnimaciones()
        const menu = menuLeft()
        if( menu[1] == "0px"){
            menu[0].style.left="-350px"
            document.getElementById("fondoInactividad").style.display="none"
            menu1.classList.add("cruz1Invertida")
            menu2.classList.add("opacidadInvertida")
            menu3.classList.add("cruz3Invertida")
    
        }
    
    })
}

menu()



