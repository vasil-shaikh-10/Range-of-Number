function range()
{
    let num = parseInt(document.getElementById('num').value);
    let K = parseInt(document.getElementById('K').value);
    let txt="";
    
    for(let v = 1; v <= num; v++)
        {
            if(v%K==0)
                {
                    txt+=v;
                    txt+="<br>";
                }
        }
    document.getElementById('ans').innerHTML = txt;
}