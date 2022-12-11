$(document).ready(function () {
    //JS of tabs.html
    let menus = document.querySelectorAll(".menu div");
    let contents = document.querySelectorAll(".content div");
    let menus1 = document.querySelectorAll(".menu1 div");
    let menus2 = document.querySelectorAll(".menu2 div");
    let contents1 = document.querySelectorAll(".content1 div");
    let contents2 = document.querySelectorAll(".content2 div");
    let menus3 = document.querySelectorAll(".menu3 div");
    let contents3 = document.querySelectorAll(".content3 div");
    let menus4 = document.querySelectorAll(".menu4 div");
    let contents4 = document.querySelectorAll(".content4 div");


    for (let menu of menus) {
        menu.addEventListener("click", function () {
            let active = document.querySelector(".active");
            active.classList.remove("active");
            this.classList.add("active");

            let index = this.getAttribute("data-index");
            for (let content of contents) {
                if (content.getAttribute("data-index") == index) {
                    content.classList.remove("d-none")
                } else {
                    content.classList.add("d-none")
                }
            }

        })
    }
    for (let menu1 of menus1) {
        menu1.addEventListener("click", function () {
            let activetab = document.querySelector(".activetab");
            activetab.classList.remove("activetab");
            this.classList.add("activetab");

            let index1 = this.getAttribute("data-index");
            for (let content1 of contents1) {
                if (content1.getAttribute("data-index") == index1) {
                    content1.classList.remove("display-none")
                } else {
                    content1.classList.add("display-none")
                }
            }

        })
    }
    for (let menu2 of menus2) {
        menu2.addEventListener("click", function () {
            let activetab1 = document.querySelector(".activetab1");
            activetab1.classList.remove("activetab1");
            this.classList.add("activetab1");

            let index2 = this.getAttribute("data-index");
            for (let content2 of contents2) {
                if (content2.getAttribute("data-index") == index2) {
                    content2.classList.remove("display-none1")
                } else {
                    content2.classList.add("display-none1")
                }
            }

        })
    }
    for (let menu3 of menus3) {
        menu3.addEventListener("click", function () {
            let activetab2 = document.querySelector(".activetab2");
            activetab2.classList.remove("activetab2");
            this.classList.add("activetab2", "colorred");

            let index3 = this.getAttribute("data-index");
            for (let content3 of contents3) {
                if (content3.getAttribute("data-index") == index3) {
                    content3.classList.remove("display-none2")
                    activetab2.classList.remove("colorred")
                } else {
                    content3.classList.add("display-none2")
                }
            }

        })
    }
    for (let menu4 of menus4) {
        menu4.addEventListener("click", function () {
            let activetab3 = document.querySelector(".activetab3");
            activetab3.classList.remove("activetab3", "activetab");
            this.classList.add("activetab3", "activetab");

            let index4 = this.getAttribute("data-index");
            for (let content4 of contents4) {
                if (content4.getAttribute("data-index") == index4) {
                    content4.classList.remove("display-none3")

                } else {
                    content4.classList.add("display-none3")
                }
            }

        })
    }
//JS of shoplist.html
    $(".left-slider").click(function () {
        $(".imagesslider").animate({
            "margin-left": "-25%"
        })
    })

    $(".right-slider").click(function () {
        $(".imagesslider").animate({
            "margin-left": 0
        })
    })

//JS of accordion.html

    $(".header1").click(function () {
        if ($(this).next()[0] != $(".active1")[0]) {
            $(".active1").slideUp("slow", function () {
                $(this).removeClass("active1")
            })
            $(this).next().slideDown("slow", function () {
                $(this).addClass("active1")
            })
        }
        else {
            $(".active1").slideUp("slow", function () {
                $(this).removeClass("active1")
            })
        }
    })
    $(".header2").click(function () {
        if ($(this).next()[0] != $(".active2")[0]) {
            $(".active2").slideUp("slow", function () {
                $(this).removeClass("active2")
            })
            $(this).next().slideDown("slow", function () {
                $(this).addClass("active2")
            })
        }
        else {
            $(".active2").slideUp("slow", function () {
                $(this).removeClass("active2")
            })
        }
    })
    $(".header3").click(function () {
        if ($(this).next()[0] != $(".active3")[0]) {
            $(".active3").slideUp("slow", function () {
                $(this).removeClass("active3")
            })
            $(this).next().slideDown("slow", function () {
                $(this).addClass("active3")
            })
        }
        else {
            $(".active3").slideUp("slow", function () {
                $(this).removeClass("active3")
            })
        }
    })
    $(".header4").click(function () {
        if ($(this).next()[0] != $(".active4")[0]) {
            $(".active4").slideUp("slow", function () {
                $(this).removeClass("active4")
            })
            $(this).next().slideDown("slow", function () {
                $(this).addClass("active4")
            })
        }
        else {
            $(".active4").slideUp("slow", function () {
                $(this).removeClass("active4")
            })
        }
    })
    
  // JS of firstpage.html

  //Slider
  let max=$(".itemsliderfirstpage").length;
  $(".imagessliderfirstpage").width(max*100+"%");
  $(".itemsliderfirstpage").width(100/max+"%");
  let count = 0;

  $(".rightmain").click(rightClick);

  function rightClick(){
      if(count<max-1){
          count++;
          $(".imagessliderfirstpage").animate({
              "margin-left": "-" + 100 * count + "%"
          })   
      }else{
          $(".imagessliderfirstpage").animate({
          "margin-left": "0"
      })
      count=0;
      }
      
  }

 

  $(".leftmain").click(function () {
      if (count > 0) {
          count--;
          $(".imagessliderfirstpage").animate({
              "margin-left": "-" + 100 * count + "%"
          })  
      }else{
          $(".imagessliderfirstpage").animate({
              "margin-left": "-" + 100 * (max-1) + "%"
          })
          count=max-1;
      }
      
   
  })

  let slidefirstpage=setInterval(rightClick,5000);

  $(".leftmain, .rightmain").mouseenter(function(){
      clearInterval(slidefirstpage)
  })
  $(".leftmain, .rightmain").mouseleave(function(){
      slidefirstpage=setInterval(rightClick,5000);
  })


  //Add to Cart(text)(hover)

$(".image").mouseenter(function(){
    $(this).children(".price").addClass("price-none");
    $(this).children(".addtocart").addClass("addtocart-active");
})
$(".image").mouseleave(function(){
    $(this).children(".price").removeClass("price-none");
    $(this).children(".addtocart").removeClass("addtocart-active");
})


  
  //Category Selection Firstpage
$('.ulParent li a').click(function(event) {
        event.preventDefault();
        var filter = $(event.target).attr('data-filter');

        $('.image').each(function() {
            var item = $(this);
          
            if ((item.attr('data-category').indexOf(filter) != -1)){
                item.show();
            }
            else{ 
                item.hide();
            }
        });
    });

    //Progress bar
    for (let i = 0; i < ($(".progress-menu-i").length); i++) {
        $(".progress-bar-i")[i].style.width = Number($(".prog-percent")[i].innerText) + "%";
        setProgress($(".progress-menu-i")[i], Number($(".prog-percent")[i].innerText), 1700 / Number($(".prog-percent")[i].innerText))
    }

    function setProgress(obj, max, time) {
        let count = 0;
        let interval = setInterval(function() {
            if (count >= max) {
                clearInterval(interval);
            } else {
                count++;
                obj.firstElementChild.lastElementChild.innerText = count;
            }
        }, time);
    }


   
    var price_prd = document.querySelectorAll(".image");


    for (var i = 0; i < price_prd.length; i++) {
    
        price_prd[i].addEventListener("click", function(e) {
            e.preventDefault();
    
            if (JSON.parse(localStorage.getItem("basket")) === null) {
                localStorage.setItem("basket", JSON.stringify([]))
    
            }
    
            let basket = JSON.parse(localStorage.getItem("basket"));
            let id = this.getAttribute("data-id");
            let img = this.parentElement.firstElementChild.getAttribute("src");
            let name = this.parentElement.firstElementChild.nextElementSibling.innerText;
            let existPro = basket.find(p => p.id == id);
            let dprice = this.previousElementSibling.getAttribute("data-price");
    
    
            if (existPro === undefined) {
                basket.push({
                    id: id,
                    img: img,
                    name: name,
                    count: 1,
                    price: dprice
                })
    
            } else {
                existPro.count += 1
            }
    
            localStorage.setItem("basket", JSON.stringify(basket));
            countBasket();
    
    
        
        });
    
    }
    
    
    
    function countBasket() {
        let basket = JSON.parse(localStorage.getItem("basket"))
        document.getElementById("productCount").innerText = basket.length
    }
    countBasket();
    
    
    
    let basket = JSON.parse(localStorage.getItem("basket"))
    let table = document.querySelector("#GeneralCardList");
    
    for (elm of basket) {
    
        let tr = document.createElement("tr");
        let tdImg = document.createElement("td");
        let tdName = document.createElement("td");
        let tdCount = document.createElement("td");
        let divName = document.createElement("div")
        let divPrice = document.createElement("div")
        let img = document.createElement("img");
    
    
    
        img.setAttribute("src", elm.img);
        tdName.setAttribute("style", "display:block")
        tdName.setAttribute("style", "padding:3px;")
        table.setAttribute("style", "width:300px;")
        tr.setAttribute("style", "margin-bottom:50px;")
    
        divName.innerText = elm.name;
        divPrice.innerText = elm.count + " x " + elm.price + "$";
    
        tdName.append(divName, divPrice)
        tdImg.appendChild(img);
        tr.append(tdImg, tdName, tdCount);
        table.lastElementChild.appendChild(tr);
    }
 
});

