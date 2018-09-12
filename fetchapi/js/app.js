document.getElementById('button1').addEventListener('click', loadText);
document.getElementById('button2').addEventListener('click', loadJSON);
document.getElementById('button3').addEventListener('click', loadJSONapi);

function loadText() {
    fetch('data.txt')
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById('result').innerHTML = data;
        })
        .catch(function (error) {
            document.getElementById('result').innerHTML = error;

        })
}

//function loadJSON() {
//    const xhr = new XMLHttpRequest();
//
//    xhr.open('GET', 'employees.json', true);
//
//    xhr.onload = function () {
//      
//
//        if (this.status === 200) {
//            const data = JSON.parse(this.responseText);
//        
//        let output = ``;
//        data.forEach(function (dat) {
//
//            output += `
//
//                    <ul>
//                        <li> ${dat.name} </li>
//                        <li>${dat.job} </li>
//                    </ul>
//            
//                    <br>
//                    <hr>
//                    `;
//
//           
//        });
//         document.getElementById('result').innerHTML = output;
//    }
//    
//  }
//    xhr.send();
//}


function loadJSON() {
    let output = ``;
    fetch('employees.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            data.forEach(function (dat) {
                output += `
                        <ul>
                            <li> ${dat.name} </li>
                            <li> ${dat.job} </li>
                        </ul>
                        <br>
                        <hr>
                    
                        `;

            });
            document.getElementById('result').innerHTML = output;
        })
        .catch(function (reject) {
            document.getElementById('result').innerHTML = "<p> Error Not found. </p>";
        });
}


function loadJSONapi() {

    let output = '';

    fetch('https://picsum.photos/list')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            data.forEach(function (dataa) {

                output += `
                    
                    <ul>

                        <li>${dataa.format}</li>
                        <li>${dataa.width}</li>
                        <li>${dataa.height}</li>
                        <li>${dataa.author}</li>
                        <li>${dataa.filename}</li>
                        <li>
                        <a target="_blank" href="${dataa.post_url}">View Image</a>
                        
                        </li>
                        
                        <br>
                        <hr>

                    </ul>

                    `;
            });

            document.getElementById('result').innerHTML = output;


        })
        .catch(function (reject) {
            document.getElementById('result').innerHTML = "<p> Error Not found. </p>";
        });
}
