
export const Datafunction=(item1,item2)=>{
    const nweArray=[]
    for(let j=0;j<item2.length;j++){
         if(j===0){
            for(let i=0;i<item1.length;i++){
                if(item2[j].chapter === item1[i].from ){
                    nweArray.push({id:j+1,from:item2[j].chapter,to:`/learn/modules/module-a/${item2[j].chapter}`,prev:"",next:`/learn/modules/module-a/${item2[j+1].chapter}`})
                }
            }
         }
         else if(j===item2.length-1){
            for(let i=0;i<item1.length;i++){
                if(item1[i].from === item2[j].chapter){
                    nweArray.push({id:j+1,from:item2[j].chapter,to:`/learn/modules/module-a/${item2[j].chapter}`,prev:`/learn/modules/module-a/${item2[j-1].chapter}`,next:""})
                } 
           }
         }
         else{
            for(let i=0;i<item1.length;i++){
                if(item1[i].from === item2[j].chapter){
                    nweArray.push({id:j+1,from:item2[j].chapter,to:`/learn/modules/module-a/${item2[j].chapter}`,prev:`/learn/modules/module-a/${item2[j-1].chapter}`,next:`/learn/modules/module-a/${item2[j+1].chapter}`})
                }
            }
         }
    }
    return nweArray
 }