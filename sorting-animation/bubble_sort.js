const sleep = m => new Promise(r => setTimeout(r, m))

async function bubble_sort (arr, algorithm_title) {

    for(let i=0; i<arr.length; i++){
        for( let j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]

                let row_data = []

                
                for(let k=0;k<arr.length;k++){
                    row_data.push([k+1, arr[k]])
                }

                draw(row_data,algorithm_title)

                await sleep(500)
            }
        }
    }

    const start_btn = document.getElementById('start_sorting_btn')
    const reset_btn = document.getElementById('reset_sorting_btn')
    const incr_btn = document.getElementById('incr_btn')
    const decr_btn = document.getElementById('decr_btn')

    start_btn.disabled=false
    reset_btn.disabled=false
    incr_btn.disabled=false
    decr_btn.disabled=false
}
