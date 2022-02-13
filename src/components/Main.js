

const Main = ( {selectedSort}) => {

    
   
    function delay(delayInms) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(2);
          }, delayInms);
        });
    }
    const swap = async (index1, index2,bars) => {
        bars[index1].classList.add("selected")
        bars[index2].classList.add("selected")
        let value1 = bars[index1].getAttribute("value");
        let value2 = bars[index2].getAttribute("value");
        bars[index1].setAttribute("value", value2);
        bars[index2].setAttribute("value", value1);
        bars[index1].style.height = `${3*value2}px`;
        bars[index2].style.height = `${3*value1}px`;
        await delay(500);
        bars[index1].classList.remove("selected")
        bars[index2].classList.remove("selected")
               
    }
    const compare = (index1 , index2,bars)=>{
        return  parseInt(bars[index1].getAttribute("value")) > parseInt(bars[index2].getAttribute("value"));
    }

    const selectionSort = async(bars)=> { 
        let n = bars.length;
        
        for(let i = 0; i < n; i++) {
            let min = i;
            for(let j = i+1; j < n; j++){
                if( compare(min,j,bars) ) {
                    min=j; 
                } 
                
            }
            if (min !== i) {
               await swap(min ,i , bars)   
            }
        }
    }
    const BubbleSort = async (bars) => {
        var i, j;
        var len = bars.length;
            
        var isSwapped = false;
            
        for(i =0; i < len; i++){
            
            isSwapped = false;
            
            for(j = 0; j < len-1; j++){
                if(compare(j, j+1,bars)) {
                    await swap(j, j+1,bars);
                    isSwapped=true;
                }  
            }
            
            
            if(!isSwapped){
            break;
            }
        }
    }
    

    const sorting = ()=>{
        const bars = document.querySelectorAll(".bar")
        switch (selectedSort) {
            case "Bubble Sort":
                BubbleSort(bars)
               break;
            case "Insertion Sort":
                break;
            case "Selection Sort":
                selectionSort(bars)
                break;
    
            default:
               break;
        }
    }
    return ( 
        <div className="main">      
            <div className="graph" id="graph"></div>
            <div className="navigation">
                <h2 className="selected-sort" >{selectedSort}</h2>
                <div className="icons">
                    <button className="btn" ><i className="fas fa-pause icon"></i></button>
                    <button className="btn" onClick={sorting}><i className="fas fa-play icon"></i></button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Main;