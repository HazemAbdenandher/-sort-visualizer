
const SideBar = ({setSelectedSort}) => {

    const createArray=()=>{
        let list= [];
        let min = 1;
        let max = 100;

        for (let i = 0; i < 15; ++i) {
            let randomNumber = Math.floor(
            Math.random() * (max - min + 1) + min
            );
            list.push(parseInt(randomNumber));
        }
        return list;
    }
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    const sortType=(sort)=>{
        setSelectedSort(sort)
        const list = createArray()
        const graph = document.querySelector("#graph")
        if(graph){  
            removeAllChildNodes(graph)
            for(let i = 0 ; i < list.length ; i++){
                let bar = document.createElement("div")
                bar.classList.add("bar")
                bar.style.height = `${list[i] *3}px`
                bar.setAttribute("value", list[i])
                bar.style.width = `20px`
                graph.appendChild(bar)
                
            }
        }
    }
    return ( 
        <div className="side-bar">
            <h2>SEARCHING ALGORIHMS VISUALISATION</h2>
            <div className="sorts">
                <h4 onClick={()=>sortType("Selection Sort")}>Selection Sort</h4>
                <h4 onClick={()=>sortType("Bubble Sort")}>Bubble Sort</h4>
                <h4 onClick={()=>sortType("Insertion Sort")}>Insertion Sort</h4>
            </div>
        </div>
     );
}
 
export default SideBar;