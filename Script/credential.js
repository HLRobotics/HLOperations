function engine()
{
    developer = document.getElementById('dev').value;
    key = document.getElementById('key').value;
    data_dev="test";
    data_key="test";
    if(developer==data_dev && key== data_key)
    {
    alert("Download access is available after 7th September 2019 ");
    location.href="index.html";
    }
    else
    {
      alert(" Nice Try :p")  ;
    }
    

document.getElementById('dev').value = "";
document.getElementById('key').value = "";
    
}