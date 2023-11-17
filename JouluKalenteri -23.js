

$(document).ready(function () {

    // Funktiot ja tapahtumankäsittelijät joulukalenterille

    // Alustetaan taulukko luukkujen numeroiden kanssa
    let luukut = [];
    for (let i = 1; i < 25; i++) {
        luukut.push(i);
        }

    // Asetetaan jokaiseen div-elementtiin vastaava arvo luukuista
    $(".luukku").each(function (index) {
        $(this).html(luukut[index]).css({
            "background-image": "url('https://cdn.pixabay.com/photo/2017/01/12/06/26/flowers-1973875_1280.png')",
            "color": "black"
            });
        });
        

    $(".luukku").click(function () {               
        // Päivämäärä ja kuukausi
        const currentDate = new Date();
        const currentDay = currentDate.getDate();

        // Asetetaan valitun luukun ulkoasu
        const luukkuIndex = $(".luukku").index($(this));
            if (luukut[luukkuIndex] <= currentDay) {
                openDoor($(this));
                showContent(luukut[luukkuIndex]);

                    if (luukut[luukkuIndex] === 1) {
                        // Lisää sisältö luukkuun 1 (kuva, video, teksti jne.)
                        $("#luukku1").css("background-image", "url('https://cdn.pixabay.com/photo/2016/11/14/09/14/cat-1822979_640.jpg')");
                    } else if (luukut[luukkuIndex] === 2) {
                        // Lisää sisältö luukkuun 2
                        $("#luukku2").css("background-image", "url('https://cdn.pixabay.com/photo/2016/12/05/12/52/advent-1883840_640.jpg')");
                    } else if (luukut[luukkuIndex] === 3) {
                        $("#luukku3").css("background-image", "url('https://cdn.pixabay.com/photo/2016/12/04/21/22/snowman-1882635_640.jpg')");
                    } else if (luukut[luukkuIndex] === 4) {
                        $("#luukku4").css("background-image", "url('https://cdn.pixabay.com/photo/2016/12/14/14/22/santa-claus-1906513_640.jpg')");
                    } else if (luukut[luukkuIndex] === 5) {
                        $("#luukku5").html("<video controls autoplay><source src='https://v1.cdnpk.net/videvo_files/video/premium/video0290/large_watermarked/_Holidays66_preview.mp4' type='video/mp4'></video>");
                        $("#luukku5 video").css({ "width": "100%", "height": "100%", "object-fit": "cover" });
                    } else if (luukut[luukkuIndex] === 6) {
                        $("#luukku6").html("<video controls autoplay><source src='https://v2.cdnpk.net/videvo_files/video/premium/partners1240/large_watermarked/0326-Gifts%20Falling%20Green%20Screen_preview.mp4' type='video/mp4'></video>");
                        $("#luukku6 video").css({ "width": "100%", "height": "100%", "object-fit": "cover" });
                    } else if (luukut[luukkuIndex] === 7) {
                        $("#luukku7").html("<video controls autoplay><source src='https://v3.cdnpk.net/videvo_files/video/free/2012-09/large_watermarked/hd1579_preview.mp4' type='video/mp4'></video>");
                        $("#luukku7 video").css({ "width": "100%", "height": "100%", "object-fit": "cover" });
                    } else if (luukut[luukkuIndex] === 8) {
                        $("#luukku8").html("<video controls autoplay><source src='https://v1.cdnpk.net/videvo_files/video/premium/video0386/large_watermarked/_Vol2ProIntroHolidays163_preview.mp4' type='video/mp4'></video>");
                        $("#luukku8 video").css({ "width": "100%", "height": "100%", "object-fit": "cover" });
                    } else if (luukut[luukkuIndex] === 9) {
                        $("#luukku9").html("<p>.Lunta tulvillaan on raikas talvisää, ei liinakkommekaan, nyt enää talliin jää. Sen kohta valjastan reen pienen etehen, ja sitten joutuin matkahan me käymme riemuiten.</p>");
                    } else if (luukut[luukkuIndex] === 10) {
                        $("#luukku10").html("<p>Lumi on jo peittänyt kukat laaksosessa, järvenaalto jäätynyt talvipakkasessa, varpunen pienoinen syönyt kesäeinehen, järvenaalto jäätynyt talvipakkasessa.</p>");
                    } else if (luukut[luukkuIndex] === 11) {
                        $("#luukku11").html("<p>Muistat Tuhkimon, Lumikin, Ruususen varmaan ja punahilkan ja sudenkin harmaan, mutta poro tää sulta usein unhoon jää...</p>");
                    } else if (luukut[luukkuIndex] === 12) {
                        $("#luukku12").html("<p>Joulu on taas, riemuitkaa nyt lapsi on meille tänä yönä syntynyt tulkoon toivo kansoille maan, pääsköön vangit vankiloistaan uskon siemen nouskoon pintaan, olkoon rauha loppumaton</p>");
                    }
                } else {
                    alert("Voit avata vain kuluvan päivän tai aiempien päivien luukut.");
                }
            });

    // Funktio luukun avaamiseen
    function openDoor($door) {
        $door.html("Avattu").css({
            "background-color": "red",
            "color": "blue",
            "width": "150px",
            "height": "150px",
            }).toggleClass("opened")
        }

    // Funktio luukun sisällön näyttämiseen
    function showContent(luukkuNumber) {
        const luukku = $(".luukku").eq(luukkuNumber - 1);
        luukku.html("Avattu luukku " + luukkuNumber).css({
            "background-image": "url('https://cdn.pixabay.com/photo/2017/12/18/18/37/christmas-3026685_1280.jpg')",
            "color": "black"
            });
        }

    });