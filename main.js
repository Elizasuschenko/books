$("#button").click(function () {
    let search = $("#search").val();

    if(search === '' || search.length < 3){
            alert('Напишите название книги')
    }
    else{
        setTimeout(function () {
            $('.book-search-result').html('');
            $.get('https://www.googleapis.com/books/v1/volumes?q=' + search, function (response) {
                console.log(response);
                for(let i=0; i<response.items.length; i++){
                    $('.book-search-result').append('<div><h3>' +response.items[i].volumeInfo.title + '</h3></div>')
                }
            });
        }, 3000);


        }
    });
