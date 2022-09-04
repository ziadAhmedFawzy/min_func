// min number function

function minNum(...num) {
    num.sort();
    for(let i = 0; i < num.length; i++)
    {
        for(let x = 0; x < num.length; x++)
        {
            if(num[i] < num[i + 1])
            {
                return num[i];
            }
        }
    }
}

console.log(minNum(1,2,3,4,5,6,7,89));
console.log(minNum(8,5,3,4,2,41,0));
console.log(minNum(8,5,3,0,4,2,41));
console.log(minNum(8,5,3,4,2,41,0));
console.log(minNum(8,5,3,4,2,41,0));

let btn = document.getElementById('go-now');

btn.onclick = function() {
    location.href = "";
}