let cash = Number;

$.get("/global/topbar.html", "", function(data) {
    $(data).insertBefore("#game-section")
})

