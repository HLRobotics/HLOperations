function engine()
{
    developer = document.getElementById('dev').value;
    key = document.getElementById('key').value;
    data_dev="HLEngine_Bangalore";
    data_key="rootuser";
    if(developer==data_dev && key== data_key)
    {
    alert("By clicking OK, You are here with agree that HLEngine will be used only under the development activities for HLRobotics.");
    location.href='venomServer.html'
    }
    else
    {
      alert(" Nice Try :p")  ;
    }
    

document.getElementById('dev').value = "";
document.getElementById('key').value = "";
    
}
