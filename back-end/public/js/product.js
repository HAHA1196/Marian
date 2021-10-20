$(function () {
  // 1. Initialize fotorama manually.
  var $fotoramaDiv = $("#fotorama").fotorama();

  // 2. Get the API object.
  var fotorama = $fotoramaDiv.data("fotorama");

  // 3. Inspect it in console.
  console.log(fotorama);

  var product = JSON.parse($("#product").text());

  var a = [];
  $(".imgEditBtn").on("click", function () {
    $(this).siblings(".fileInput").click();
    $(this)
      .siblings(".fileInput")
      .on("change", function (evt) {
        if (this.files) {
          for (var i = 0; i < this.files.length; i++) {
            a.push(URL.createObjectURL(evt.target.files[i]));
          }
          fotorama.load([
            { img: `${a[0]}` },
            { img: `${a[1]}` },
            { img: `${a[2]}` },
            { img: `${a[3]}` },
            { img: `${a[4]}` },
          ]);
        }
      });
  });

  window.onload = function () {
    document.getElementById("uploadBtn").click();
  };

  // 展開上傳新品欄位按鈕
  $("#uploadBtn").click(function () {
    $("#newProducts").slideToggle();
  });

  // 鉛筆展開 tr
  $(".editBtn").click(function () {
    $(this).parents("tr").children(".showContent").show();
  });

  // X button
  $(".onOff").click(function () {
    // console.log($(this).parent().parent());
    $(this).parents("td").hide();
    // location.reload();
  });

  $("#searchBtn").on("click", function () {
    let sortProduct = $("#sortProduct").val();
    let searchProduct = $("#searchProduct").val();
    $("tr:not(:nth-child(1))").slideUp();
    switch (sortProduct) {
      case "sortProductSS":
        for (var i = 0; i < product.length; i++) {
          console.log(product[i].productClass);
          if (product[i].productClass == "SS") {
            $(`tr:nth-child(${i + 2})`).slideDown();
          }
        }
        break;

      case "sortProductD":
        for (var i = 0; i < product.length; i++) {
          if (product[i].productClass == "D") {
            $(`tr:nth-child(${i + 2})`).slideDown();
          }
        }
        break;

      case "sortProductACC":
        for (var i = 0; i < product.length; i++) {
          if (product[i].productClass == "ACC") {
            $(`tr:nth-child(${i + 2})`).slideDown();
          }
        }
        break;

      case "sortProductHigh":
        var $tr = $("#contentData").find("tr:not(:first-child)");
        var priceSortList = Array.prototype.sort.bind($tr);

        priceSortList(function (a, b) {
          var priceA = parseInt($(a).find("td:nth-child(7)").text());
          var priceB = parseInt($(b).find("td:nth-child(7)").text());

          if (priceA > priceB) {
            return -1;
          }

          if (priceA < priceB) {
            return 1;
          }

          return 0;
        });

        $("#contentData").append($tr);
        $("tr:not(:nth-child(1))").slideDown();
        break;

      case "sortProductLow":
        var $tr = $("#contentData").find("tr:not(:first-child)");
        var priceSortList = Array.prototype.sort.bind($tr);

        priceSortList(function (a, b) {
          var priceA = parseInt($(a).find("td:nth-child(7)").text());
          var priceB = parseInt($(b).find("td:nth-child(7)").text());

          if (priceA > priceB) {
            return 1;
          }

          if (priceA < priceB) {
            return -1;
          }

          return 0;
        });

        $("#contentData").append($tr);
        $("tr:not(:nth-child(1))").slideDown();
        break;

      case "sortProductStockFull":
        var $tr = $("#contentData").find("tr:not(:first-child)");
        var priceSortList = Array.prototype.sort.bind($tr);

        priceSortList(function (a, b) {
          var priceA = parseInt($(a).find("td:nth-child(9)").text());
          var priceB = parseInt($(b).find("td:nth-child(9)").text());

          if (priceA > priceB) {
            return -1;
          }

          if (priceA < priceB) {
            return 1;
          }

          return 0;
        });

        $("#contentData").append($tr);
        $("tr:not(:nth-child(1))").slideDown();
        break;

      case "sortProductStockLow":
        var $tr = $("#contentData").find("tr:not(:first-child)");
        var priceSortList = Array.prototype.sort.bind($tr);

        priceSortList(function (a, b) {
          var priceA = parseInt($(a).find("td:nth-child(9)").text());
          var priceB = parseInt($(b).find("td:nth-child(9)").text());

          if (priceA > priceB) {
            return 1;
          }

          if (priceA < priceB) {
            return -1;
          }

          return 0;
        });

        $("#contentData").append($tr);
        $("tr:not(:nth-child(1))").slideDown();
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

  $("#clearBtn").click(function () {
    $("tr").slideDown();
    $("#inputNews").val("");
    var $tr = $("#contentData").find("tr:not(:first-child)");
    var priceSortList = Array.prototype.sort.bind($tr);

    priceSortList(function (a, b) {
      var priceA = parseInt($(a).find("td:nth-child(2)").text());
      var priceB = parseInt($(b).find("td:nth-child(2)").text());

      if (priceA > priceB) {
        return 1;
      }

      if (priceA < priceB) {
        return -1;
      }

      return 0;
    });

    $("#contentData").append($tr);
    $("tr:not(:nth-child(1))").slideDown();
  });
});
