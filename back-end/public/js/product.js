$(function(){
    var product = JSON.parse($("#product").text());

    $("#imgEditBtn").on("click", function () {
        alert("edit this yo");
    });

    // 展開上傳新品欄位按鈕

    $("#uploadBtn").click(function(){
        $("#newProducts").slideToggle();
    })

    $('.editBtn').click(function () {
        $(this).parents('tr').children('.showContent').show();
        
    });


    // 新增 product image
    $(".imgEditBtn").on("click",function(e){
        $(this).siblings(".fileInput").click();

        $(this).siblings(".fileInput").on("change",function(evt){
            console.log(this.files);
            let [file] = this.files;
            if(file){
                $(this).next("img").attr('src',URL.createObjectURL(evt.target.files[0]));
            }
        })

    });

    // X － button
    $('.onOff button:last-child').click(function () {
        // console.log($(this).parent().parent());
        $(this).parents('td').hide();
    }); 

    $("#searchBtn").on("click", function () {
        let sortProduct = $("#sortProduct").val();
        let searchProduct = $("#searchProduct").val();
        $('tr:not(:nth-child(1))').slideUp();
        switch (sortProduct) {
            case "sortProductSS":
                for (var i = 0; i < product.length; i++) {
                    console.log(product[i].productClass);
                    if (product[i].productClass == 'SS') {
                        $(`tr:nth-child(${i + 2})`).slideDown();
                    }
                }        
                break;

            case "sortProductD":
                for (var i = 0; i < product.length; i++) {
                    if (product[i].productClass == 'D') {
                        $(`tr:nth-child(${i + 2})`).slideDown();
                    }
                }        
                break;

            case "sortProductACC":
                for (var i = 0; i < product.length; i++) {
                    if (product[i].productClass == 'ACC') {
                        $(`tr:nth-child(${i + 2})`).slideDown();
                    }
                }        
                break;

            case "sortProductHigh":
                var $tr = $('#contentData').find('tr:not(:first-child)');
                var priceSortList = Array.prototype.sort.bind($tr);
            
                priceSortList(function (a, b) {
                    var priceA = parseInt($(a).find('td:nth-child(7)').text());
                    var priceB = parseInt($(b).find('td:nth-child(7)').text());
                    
                    if (priceA > priceB) {
                        return -1;
                    }
            
                    if (priceA < priceB) {
                        return 1;
                    }
            
                    return 0;
                })
            
                $('#contentData').append($tr);
                $('tr:not(:nth-child(1))').slideDown();
                break;

            case "sortProductLow":
                var $tr = $('#contentData').find('tr:not(:first-child)');
                var priceSortList = Array.prototype.sort.bind($tr);
            
                priceSortList(function (a, b) {
                    var priceA = parseInt($(a).find('td:nth-child(7)').text());
                    var priceB = parseInt($(b).find('td:nth-child(7)').text());
                    
                    if (priceA > priceB) {
                        return 1;
                    }
            
                    if (priceA < priceB) {
                        return -1;
                    }
            
                    return 0;
                })
            
                $('#contentData').append($tr);
                $('tr:not(:nth-child(1))').slideDown();
                break;

            case "sortProductStockFull":
                var $tr = $('#contentData').find('tr:not(:first-child)');
                var priceSortList = Array.prototype.sort.bind($tr);
            
                priceSortList(function (a, b) {
                    var priceA = parseInt($(a).find('td:nth-child(9)').text());
                    var priceB = parseInt($(b).find('td:nth-child(9)').text());
                    
                    if (priceA > priceB) {
                        return -1;
                    }
            
                    if (priceA < priceB) {
                        return 1;
                    }
            
                    return 0;
                })
            
                $('#contentData').append($tr);
                $('tr:not(:nth-child(1))').slideDown();
                break;

            case "sortProductStockLow":
                var $tr = $('#contentData').find('tr:not(:first-child)');
                var priceSortList = Array.prototype.sort.bind($tr);
            
                priceSortList(function (a, b) {
                    var priceA = parseInt($(a).find('td:nth-child(9)').text());
                    var priceB = parseInt($(b).find('td:nth-child(9)').text());
                    
                    if (priceA > priceB) {
                        return 1;
                    }
            
                    if (priceA < priceB) {
                        return -1;
                    }
            
                    return 0;
                })
            
                $('#contentData').append($tr);
                $('tr:not(:nth-child(1))').slideDown();
                break;

            default:
                for (var i = 0; i < product.length; i++) {
                    if (product[i].productName.indexOf(`${searchProduct}`) >= 0) {
                        $(`tr:nth-child(${i + 2})`).slideDown();
                    }
                }                
                break;
        }

    });

    $('#clearBtn').click(function () {
        $('tr').slideDown();
        $('#inputNews').val('');
        var $tr = $('#contentData').find('tr:not(:first-child)');
        var priceSortList = Array.prototype.sort.bind($tr);
    
        priceSortList(function (a, b) {
            var priceA = parseInt($(a).find('td:nth-child(2)').text());
            var priceB = parseInt($(b).find('td:nth-child(2)').text());
            
            if (priceA > priceB) {
                return 1;
            }
    
            if (priceA < priceB) {
                return -1;
            }
    
            return 0;
        })
    
        $('#contentData').append($tr);
        $('tr:not(:nth-child(1))').slideDown();

    })
});

