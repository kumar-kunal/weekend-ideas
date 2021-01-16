const AlgorithmTitle={
    1: "Bubble Sort",
    2: "Insertion Sort",
    3: "Merge Sort"
}

var arr = []
var algorithm_type=1
var algorithm_title = AlgorithmTitle[algorithm_type]

function default_data(){
    let number_of_points = parseInt(document.getElementById("number_of_points").innerHTML)
    for(let i=0;i<number_of_points;i++){
        arr.push(Math.floor(Math.random() * number_of_points) + 1)
    }
    let row_data = []
    for(let i=0; i<arr.length;i++){
        row_data.push([i+1, arr[i]])
    }
    draw(row_data, algorithm_title)
}

default_data()

function increment_element(){
    let number_of_points = parseInt(document.getElementById("number_of_points").innerHTML)
    if(number_of_points>=20){
        alert("Oops! We can not go beyond 20 elements at this moment!")
    }else{
        number_of_points +=1
    }
    document.getElementById("number_of_points").innerHTML = number_of_points

    arr=[]
    for(let i=0;i<number_of_points;i++){
        arr.push(Math.floor(Math.random() * number_of_points) + 1)
    }
    let row_data = []
    for(let i=0; i<arr.length;i++){
        row_data.push([i+1, arr[i]])
    }
    draw(row_data)
    // console.log(arr)
}

function decrement_element(){
    let number_of_points = parseInt(document.getElementById("number_of_points").innerHTML)
    if(number_of_points<=3){
        alert("Oops! We can not go below 3 elements at this moment!")
    }else{
        number_of_points -=1
    }
    document.getElementById("number_of_points").innerHTML = number_of_points

    arr=[]
    for(let i=0;i<number_of_points;i++){
        arr.push(Math.floor(Math.random() * number_of_points) + 1)
    }
    let row_data = []
    for(let i=0; i<arr.length;i++){
        row_data.push([i+1, arr[i]])
    }
    draw(row_data, algorithm_title)
}

async function start_sorting(){
    // console.log(arr)
    const start_btn = document.getElementById('start_sorting_btn')
    const reset_btn = document.getElementById('reset_sorting_btn')
    const incr_btn = document.getElementById('incr_btn')
    const decr_btn = document.getElementById('decr_btn')

    if(algorithm_type===1){
        start_btn.disabled=true
        reset_btn.disabled=true
        incr_btn.disabled=true
        decr_btn.disabled=true
        await bubble_sort(arr, algorithm_title)
    }
    else{
        alert("Oops, This algorithm is not implemented yet!")
    }
}

function reset_sorting(){
    let number_of_points = parseInt(document.getElementById("number_of_points").innerHTML)
    arr=[]
    for(let i=0;i<number_of_points;i++){
        arr.push(Math.floor(Math.random() * number_of_points) + 1)
    }
    let row_data = []
    for(let i=0; i<arr.length;i++){
        row_data.push([i+1, arr[i]])
    }
    draw(row_data, algorithm_title)
}

function change_algorithm(type){
    algorithm_type=type
    algorithm_title = AlgorithmTitle[algorithm_type]
    let row_data = []
    for(let i=0; i<arr.length;i++){
        row_data.push([i+1, arr[i]])
    }
    draw(row_data, algorithm_title)
}