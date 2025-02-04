$(function(){
    $("input[type=radio][name=find-id-type]").click(function(){
        var chkValue = $("input[type=radio][name=find-id-type]:checked").val();

        if (chkValue == "1") {
            $(".id-type-select .search-hp").css("display", "block");
            $(".id-type-select .search-email").css("display", "none");
        } else if (chkValue == "2") {
            $(".id-type-select .search-hp").css("display", "none");
            $(".id-type-select .search-email").css("display", "block");
        }
    });

    $("input[type=radio][name=find-pw-type]").click(function(){
        var chkValue = $("input[type=radio][name=find-pw-type]:checked").val();

        if (chkValue == "1") {
            $(".pw-type-select .search-hp").css("display", "block");
            $(".pw-type-select .search-email").css("display", "none");
        } else if (chkValue == "2") {
            $(".pw-type-select .search-hp").css("display", "none");
            $(".pw-type-select .search-email").css("display", "block");
        }
    });
});