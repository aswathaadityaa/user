var bookname , dogtype, gender , desc , latitude , longitude;

function readFom() {
 bookname = document.getElementById("bookname").value;
 dogtype = document.getElementById("dogtype").value;
 gender = document.getElementById("gender").value;
 desc = document.getElementById("desc").value;
 latitude = document.getElementById("latitude").value;
 longitude = document.getElementById("longitude").value;
  console.log(bookname ,dogtype , gender , desc , latitude , longitude);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("books/" + bookname)
    .set({
      bookname: bookname,
      dogtype: dogtype,
     gender: gender,
      desc: desc,
    latitude: latitude,
   longitude: longitude ,
    });
  alert("Data Inserted");
  document.getElementById("bookname").value = "";
  document.getElementById("dogtype").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("latitude").value = "";
 document.getElementById("longitude").value = "";
};
