var names=["DAD","MOM","ME","SISTER"];
var images=["https://www.pngfind.com/pngs/m/674-6748235_father-clipart-tired-dad-cartoon-hd-png-download.png",
"https://png.pngtree.com/element_our/20190531/ourmid/pngtree-mother-and-daughter-image_1317642.jpg","https://png.pngtree.com/png-clipart/20190902/original/pngtree-black-skin-girl-illustration-png-image_4383771.jpg","https://png.pngtree.com/png-clipart/20190920/original/pngtree-dancing-little-girl-cartoon-png-material-png-image_4683603.jpg"]

var i = 0
function update(){
    i++;
    var number = 5
    if (i > number) 
    {
        i = 0
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_name").innerHTML=updatedName
    document.getElementById("family_member_image").src=updatedImage
}
