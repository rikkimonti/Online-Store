
let grid_container = document.querySelector(".grid-container");
let modal = document.querySelector(".modal");
let modal_window = document.querySelector(".modal-window");
const count_numb = document.getElementById('count_numb')
const numb = document.getElementById('numb');
let sortBySelect = document.getElementById('IDsortBy');
// var value = sortBySelect.options[sortBySelect.selectedIndex].value;
let srt_ch = document.getElementById('srt_ch');
// for(let i=0;i<5;i++){
// // console.log(value);
// }
let pb_list = document.getElementById("IDpb-list");
let IDpb_listAuthor = document.getElementById("IDpb-listAuthor");
let IDpb_listGenere = document.getElementById("IDpb-listGenere");
const api_url = "https://62d3ec80cd960e45d4500ac6.mockapi.io/api/v1/booksDB";
async function show(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    for (book of data) {

        let box = document.createElement("div");
        box.className = "box";
        box.id = "box";
        let namebook = document.createElement("p");
        namebook.className = "namebook";
        namebook.textContent = book.title;
        let author = document.createElement("p");
        author.className = "author";
        author.textContent = book.name;
        let image_book = document.createElement("img");
        image_book.className = "image_book";
        image_book.src = book.image;

        let mw_infoPage = document.createElement("div");
        mw_infoPage.className = "mw-infoPage";

        let mw_text = document.createElement("table");
        mw_text.className = "mw-text";

        let tr_genre = document.createElement("tr");
        let th_genre = document.createElement("th");
        let td_genre = document.createElement("td");
        th_genre.textContent = "Genre:";
        td_genre.textContent = book.genre;

        let tr_year = document.createElement("tr");
        let th_year = document.createElement("th");
        let td_year = document.createElement("td");
        th_year.textContent = "Year:";
        td_year.textContent = book.year;

        let tr_publishing = document.createElement("tr");
        let th_publishing = document.createElement("th");
        let td_publishing = document.createElement("td");
        th_publishing.textContent = "Publishing:";
        td_publishing.textContent = book.publishing;

        let tr_count = document.createElement("tr");
        let th_count = document.createElement("th");
        let td_count = document.createElement("td");
        th_count.textContent = "Publishing:";
        td_count.textContent = book.count;

        let detalis = document.createElement("div");
        detalis.className = "detalis";

        let price = document.createElement("div");
        price.className = "price";

        let price_sp = document.createElement("span");
        price_sp.className = "price_sp";
        price_sp.textContent = "Price:";

        let price_P = document.createElement("p");
        price_P.className = "price_P";
        price_P.textContent = book.price + "$";

        let btn = document.createElement("div");
        btn.className = "btn";

        let btn_remove = document.createElement("div");
        btn_remove.className = "btn_remove";

        let btn_detalis = document.createElement("button");
        btn_detalis.className = "btn-detalis";
        btn_detalis.id = "buy";
        btn_detalis.textContent = "Buy";


        let remove = document.createElement("button");
        remove.className = "remove";
        remove.id = "remove";
        remove.textContent = "Remove";

        let a = 0;
        btn_detalis.addEventListener("click", () => {
            count_numb.classList.add('show');
            btn_remove.style.display = 'block';
            a++;
            console.log(a);
            numb.innerHTML = a;
        });



        remove.addEventListener("click", () => {
            if(a==0){
            btn_remove.style.display = 'none';
            count_numb.classList.remove('show');
            }
            a--;
            console.log(a);
            numb.innerHTML = a;
        });




        btn_remove.append(remove)
        btn.append(btn_detalis);
        price.append(price_sp, price_P);
        detalis.append(price, btn, btn_remove);
        tr_genre.append(th_genre, td_genre);
        tr_year.append(th_year, td_year);
        tr_publishing.append(th_publishing, td_publishing);
        tr_count.append(th_count, td_count);

        mw_text.append(tr_genre, tr_year, tr_publishing, tr_count);
        box.append(namebook, author, image_book, mw_text, detalis);
        grid_container.append(box);
    }
    for (book of data) {
        let newOption = new Option(book.publishing, book.id);
        let newOptionA = new Option(book.name, book.id);
        let newOptionG = new Option(book.genre, book.id);

        pb_list.append(newOption);
        IDpb_listAuthor.append(newOptionA);
        IDpb_listGenere.append(newOptionG);
    }
}
show();
// async function myFunction() {
//         const response = await fetch(api_url);
//         const data = await response.json();
//     // if (value === "year (increase)") {
//     //         data.sort(function (a, b) {
//     //             if (a.title > b.title)
//     //                     return 1;
//     //         });
//             srt_ch.addEventListener("click", () => {
//                 console.log("ke");
//             });
//         // }
    
// }


// myFunction();

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://62d3ec80cd960e45d4500ac6.mockapi.io/api/v1/booksDB");
// let books = JSON.parse(xhr.response);



// show = function () {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://62d3ec80cd960e45d4500ac6.mockapi.io/api/v1/booksDB")

//     xhr.onload = function () {

        

    //     for (book of books) {

    //         let box = document.createElement("div");
    //         box.className = "box";
    //         box.id = "box";
    //         let namebook = document.createElement("p");
    //         namebook.className = "namebook";
    //         namebook.textContent = book.title;
    //         let author = document.createElement("p");
    //         author.className = "author";
    //         author.textContent = book.name;
    //         let image_book = document.createElement("img");
    //         image_book.className = "image_book";
    //         image_book.src = book.image;

    //         let mw_infoPage = document.createElement("div");
    //         mw_infoPage.className = "mw-infoPage";

    //         let mw_text = document.createElement("table");
    //         mw_text.className = "mw-text";

    //         let tr_genre = document.createElement("tr");
    //         let th_genre = document.createElement("th");
    //         let td_genre = document.createElement("td");
    //         th_genre.textContent = "Genre:";
    //         td_genre.textContent = book.genre;

    //         let tr_year = document.createElement("tr");
    //         let th_year = document.createElement("th");
    //         let td_year = document.createElement("td");
    //         th_year.textContent = "Year:";
    //         td_year.textContent = book.year;

    //         let tr_publishing = document.createElement("tr");
    //         let th_publishing = document.createElement("th");
    //         let td_publishing = document.createElement("td");
    //         th_publishing.textContent = "Publishing:";
    //         td_publishing.textContent = book.publishing;

    //         let tr_count = document.createElement("tr");
    //         let th_count = document.createElement("th");
    //         let td_count = document.createElement("td");
    //         th_count.textContent = "Publishing:";
    //         td_count.textContent = book.count;

    //         let detalis = document.createElement("div");
    //         detalis.className = "detalis";

    //         let price = document.createElement("div");
    //         price.className = "price";

    //         let price_sp = document.createElement("span");
    //         price_sp.className = "price_sp";
    //         price_sp.textContent = "Price:";

    //         let price_P = document.createElement("p");
    //         price_P.className = "price_P";
    //         price_P.textContent = book.price + "$";

    //         let btn = document.createElement("div");
    //         btn.className = "btn";

    //         let btn_remove = document.createElement("div");
    //         btn_remove.className = "btn_remove";

    //         let btn_detalis = document.createElement("button");
    //         btn_detalis.className = "btn-detalis";
    //         btn_detalis.id = "buy";
    //         btn_detalis.textContent = "Buy";


    //         let remove = document.createElement("button");
    //         remove.className = "remove";
    //         remove.id = "remove";
    //         remove.textContent = "Remove";

    //         let a = 0;
    //         box.addEventListener("click", () => {
    //             count_numb.classList.add('show');

    //             // btn_remove.style.display = 'block';
    //             a++;
    //             console.log(a);
    //             numb.innerHTML = a;
    //         });



    //         box.addEventListener("click", () => {
    //             count_numb.classList.remove('show');
    //             a--;
    //             console.log(a);
    //             numb.innerHTML = a;
    //         });




    //         btn_remove.append(remove)
    //         btn.append(btn_detalis);
    //         price.append(price_sp, price_P);
    //         detalis.append(price, btn, btn_remove);
    //         tr_genre.append(th_genre, td_genre);
    //         tr_year.append(th_year, td_year);
    //         tr_publishing.append(th_publishing, td_publishing);
    //         tr_count.append(th_count, td_count);

    //         mw_text.append(tr_genre, tr_year, tr_publishing, tr_count);
    //         box.append(namebook, author, image_book, mw_text, detalis);
    //         grid_container.append(box);
    //     }


    // }
//     xhr.send();

// }

// show();
// window.sortBy = function (){
//     // let xhr = new XMLHttpRequest();
//     // xhr.open("GET", "https://62d3ec80cd960e45d4500ac6.mockapi.io/api/v1/booksDB")
//     // xhr.onload = function () {

//     //     let books = JSON.parse(xhr.response);
//     sortBySelect.addEventListener("click", () => {
//         if (sortBySelect.value == "name (A-z)") {

//             // books.sort(function (a, b) {
//             //     if (a.title < b.title)
//             //         return -1;
//             // });
            
//                 console.log("yyyyyyyy");
//                  show();
//         }
//             });
        
        
//     // }
//     // xhr.send();
// }
// sortBySelect.addEventListener("click", () => {
//     console.log("Hello");
    

    
        
//         if (sortBySelect.value == "name (z-A)") {
//             books.sort(function (a, b) {
//                 if (a.title > b.title)
//                     return 1;
//             });
//         }
//         if (sortBySelect.value == "year (decrease)") {
//             books.sort(function (a, b) {
//                 return b.year - a.year;
//             });
//         }
//         if (sortBySelect.value == "year (increase)") {
//             books.sort(function (a, b) {
//                 return a.year - b.year;
//             });
//         }
//     }
// });


