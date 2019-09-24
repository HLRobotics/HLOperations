function engine()
{
    developer = document.getElementById('dev').value;
    key = document.getElementById('key').value;
    data_dev="mbccet";
    data_key="root";
    if(developer==data_dev && key== data_key)
    {
    alert("By clicking OK, You are here with agree that the materials provided will be used only for personal use.");
    location.href='venomServer_2.html';
    }
    else
    {
      alert(" Nice Try :p")  ;
    }
    

document.getElementById('dev').value = "";
document.getElementById('key').value = "";
    
}
