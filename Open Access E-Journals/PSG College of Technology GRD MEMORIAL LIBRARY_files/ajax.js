
$(document).ready(function () {

//addContent>>>>>>>>>>>>>
    $("#addContent").submit(function (e) {
        e.preventDefault();//stop submit the form, we will post it manually.
        var form = $('#addContent')[0];// Get form
        var data = new FormData(form);// Create an FormData object
        data.append("add_content", " ");// If you want to add an extra field for the FormData

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "../ajax.php",
            dataType: 'json',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (response) {
                console.log(response);
                //alert(response.result);
				if(response.done==true)
				{
				$('#ajax_output').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
                $("#addContent")[0].reset(); // reset form
				}
			else
			{
			$('#ajax_output').html('<div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');
			}

            },
            error: function (response) {
                alert("err");
				console.log(response);
            }
        });
    return false;
    });
//addContent>>>>>>>>>>>>>  //


//EventsGallery>>>>>>>>>>>>>
    $("#addContent3").submit(function (e) {
        e.preventDefault();//stop submit the form, we will post it manually.
        var form = $('#addContent3')[0];// Get form
        var data = new FormData(form);// Create an FormData object
        data.append("add_content3", " ");// If you want to add an extra field for the FormData

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "../ajax.php",
            dataType: 'json',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (response) {
                console.log(response);
                //alert(response.result);
				if(response.done==true)
				{
				$('#ajax_output').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
                $("#addContent3")[0].reset(); // reset form
				}
			else
			{
			$('#ajax_output').html('<div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');
			}

            },
            error: function (response) {
                alert("err");
				console.log(response);
            }
        });

    return false;

    });
//>>>>>>>>>>>>>  //



//EventsReport>>>>>>>>>>>>>
    $("#addContent4").submit(function (e) {
        e.preventDefault();//stop submit the form, we will post it manually.
        var form = $('#addContent4')[0];// Get form
        var data = new FormData(form);// Create an FormData object
        data.append("add_content4", " ");// If you want to add an extra field for the FormData

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "../ajax.php",
            dataType: 'json',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (response) {
                console.log(response);
                //alert(response.result);
				if(response.done==true)
				{
				$('#ajax_output').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
                $("#addContent3")[0].reset(); // reset form
				}
			else
			{
			$('#ajax_output').html('<div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');
			}

            },
            error: function (response) {
                alert("err");
				console.log(response);
            }
        });

    return false;

    });
//>>>>>>>>>>>>>  //




//ContentEdit>>>>>>>>>>>>>
$("#editContent").submit(function (e) {
    e.preventDefault();//stop submit the form, we will post it manually.
    var form = $('#editContent')[0];// Get form
    var data = new FormData(form);// Create an FormData object
    data.append("edit_content", " ");// If you want to add an extra field for the FormData
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "../ajax.php",
        dataType: 'json',
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
            console.log(response);
            //alert(response.result);
            if(response.done==true)
            {
            $('#ajax_output').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            // $("#addContent")[0].reset(); // reset form

            }
        else
        {
        $('#ajax_output').html('<div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');
        }

        },
        error: function (response) {
            alert("err");
            console.log(response);

        }
    });
return false;
});
//ContentEdit>>>>>>>>>>>>>  //



//ContentDelete>>>>>>>>>>>>>
$(".remove").click(function(e){

    var deleteId = $(this).attr("id");
    alert(deleteId);

    var delConf = confirm("Do You Want to delete this Post");

    if(delConf){
        $.ajax({
            type: "POST",
            url: "../ajax.php",
            data: {deleteId:deleteId},
            success: function (response) {
                console.log(response);
                location.reload();
            if(response.done==true)
            {
            $('#ajax_output').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            }
            },
            error: function (response) {
                alert("err");
                console.log(response);
            }
        });
    }

return false;

});

//ContentDelete>>>>>>>>>>>>>  //



//eventgaldelete>>>>>>>>>>>>>
$(".removegal").click(function(e){

    var deleteg = $(this).attr("id");
    alert(deleteg);

    var delConf = confirm("Do You Want to delete this Post");

    if(delConf){
        $.ajax({
            type: "POST",
            url: "../ajax.php",
            data: {deleteg:deleteg},
            success: function (response) {
                console.log(response);
                location.reload();
            if(response.done==true)
            {
            $('#ajax_output').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            }
            },
            error: function (response) {
                alert("err");
                console.log(response);
            }
        });
    }

return false;

});

//eventgaldelete>>>>>>>>>>>>>  //


//eventrepdelete>>>>>>>>>>>>>
$(".removerp").click(function(e){

    var deleteIdd = $(this).attr("id");
    alert(deleteIdd);

    var delConf = confirm("Do You Want to delete this Post");

    if(delConf){
        $.ajax({
            type: "POST",
            url: "../ajax.php",
            data: {deleteIdd:deleteIdd},
            success: function (response) {
                console.log(response);
                location.reload();
            if(response.done==true)
            {
            $('#ajax_output').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            }
            },
            error: function (response) {
                alert("err");
                console.log(response);
            }
        });
    }

return false;

});

//eventrepdelete>>>>>>>>>>>>>  //



//EventgalleryEdit>>>>>>>>>>>>>
$("#editacgal").submit(function (e) {
    e.preventDefault();//stop submit the form, we will post it manually.
    var form = $('#editacgal')[0];// Get form
    var data = new FormData(form);// Create an FormData object
    data.append("edit_metgal", " ");// If you want to add an extra field for the FormData
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "../ajax.php",
        dataType: 'json',
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
            console.log(response);
            //alert(response.result);
            if(response.done==true)
            {
            $('#ajax_output').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            // $("#addContent")[0].reset(); // reset form

            }
        else
        {
        $('#ajax_output').html('<div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');
        }

        },
        error: function (response) {
            alert("err");
            console.log(response);

        }
    });
return false;
});
//Eventgalleryedit>>>>>>>>>>>>>  //

//EventreportEdit>>>>>>>>>>>>>
$("#editacrep").submit(function (e) {
    e.preventDefault();//stop submit the form, we will post it manually.
    var form = $('#editacrep')[0];// Get form
    var data = new FormData(form);// Create an FormData object
    data.append("edit_metrep", " ");// If you want to add an extra field for the FormData
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "../ajax.php",
        dataType: 'json',
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
            console.log(response);
            //alert(response.result);
            if(response.done==true)
            {
            $('#ajax_output').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            // $("#addContent")[0].reset(); // reset form

            }
        else
        {
        $('#ajax_output').html('<div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');
        }

        },
        error: function (response) {
            alert("err");
            console.log(response);

        }
    });
return false;
});
//Eventreportedit>>>>>>>>>>>>>  //


//adminSignup>>>>>>>>>>>>>
    $("#adminSignup").submit(function (e) {

        e.preventDefault();//stop submit the form, we will post it manually.

        var form = $('#adminSignup')[0];// Get form

        var data = new FormData(form);// Create an FormData object

        data.append("signup", " ");// If you want to add an extra field for the FormData

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "../ajax.php",
            dataType: 'json',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (response) {
                console.log(response);
                //alert(response.result);
				if(response.done==true)
				{
				$('#ajax_output').html('<div class="alert alert-success aj_out" ><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
				$("#adminSignup")[0].reset(); // reset form
				}
			else
			{
			$('#ajax_output').html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');
			}

            },
            error: function (response) {
                alert("err");
				console.log(response);

            }
        });

return false;

    });
//adminSignup>>>>>>>>>>  //






//adminLogin>>>>>>>>>>>>>
$("#adminLogin").submit(function (e) {

    e.preventDefault();//stop submit the form, we will post it manually.

    var form = $('#adminLogin')[0];// Get form

    var data = new FormData(form);// Create an FormData object

    data.append("login", " ");// If you want to add an extra field for the FormData

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "../ajax.php",
        dataType: 'json',
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
            console.log(response);
            //alert(response.result);
            if(response.done==true)
            {
            $('#ajax_output').html('<div class="alert alert-success aj_out" ><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            $("#adminLogin")[0].reset(); // reset form
            window.location.href = 'dashboard_book-journal.php'; // redirecting
            }
        else
        {
        $('#ajax_output').html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');
        }

        },
        error: function (response) {
            alert("err");
            console.log(response);

        }
    });

return false;

});
//adminLogin>>>>>>>>>>  //






//search>>>>>>>>>>>>>
$("#search").keyup(function (e) {

        var str = $(this).val();

        // if(str == ""){
        // $('#ajax_output').html(str);
        // }
        // else{

            $.ajax({
                type: "POST",
                url: "../ajax.php",
                dataType: 'json',
                data: {search:str},
                success: function (response) {
                    console.log(response);
                    if(response.done==true)
                    {
                    $('#tableone').hide();
                    $('#ajax_output').html( response.result );
                    }
                else
                {
                $('#ajax_output').html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');
                }

                },
                error: function (response) {
                    alert("err");
                    console.log(response);

                }
            });

        // }

return false;

});
//search>>>>>>>>>>  //




//adminProfileEdit>>>>>>>>>>>>>
$("#adminProfileEdit").submit(function (e) {

    e.preventDefault();//stop submit the form, we will post it manually.

    var form = $('#adminProfileEdit')[0];// Get form

    var data = new FormData(form);// Create an FormData object

    data.append("edit", " ");// If you want to add an extra field for the FormData
    console.log("hello");

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "../ajax.php",
        dataType: 'json',
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
            console.log(response.result);
            //alert(response.result);
            if(response.done==true)
            {
            $('#ajax_output').html('<div class="alert alert-success aj_out" ><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            alert(response.result);
            window.location.reload();

            }
        else
        {
        $('#ajax_output').html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');
        }

        },
        error: function (response) {
            alert("err");
            console.log(response);

        }
    });

return false;

});
//adminProfileEdit>>>>>>>>>>  //







//Books/Journal Count update>>>>>>>>>>>>>
$("#bokJnlUpdtFom").submit(function (e) {

    e.preventDefault();//stop submit the form, we will post it manually.
    var form = $('#bokJnlUpdtFom')[0];// Get form
    var data = new FormData(form);// Create an FormData object
    data.append("edit_bokJnl", " ");// If you want to add an extra field for the FormData

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "../ajax.php",
        dataType: 'json',
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
            console.log(response);
            if(response.done==true){
            $('#ajax_output').html('<div class="alert alert-success animated slideInUp"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            //$("#addContent")[0].reset(); // reset form

            }
        else{
        $('#ajax_output').html('<div class="alert alert-danger animated slideInUp"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');
        }
        },
        error: function (response) {
            alert("Error");
            console.log(response);
        }
    });


return false;
});
// Books/Journal Count update >>>>>>>>>>>>>  //




//Add News Links>>>>>>>>>>>>>
$("#newsLinkFrm").submit(function (e) {

    e.preventDefault();//stop submit the form, we will post it manually.
    var form = $('#newsLinkFrm')[0];// Get form
    var data = new FormData(form);// Create an FormData object
    data.append("add_newsLinks", " ");// If you want to add an extra field for the FormData
    console.log(data);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "../ajax.php",
        dataType: 'json',
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
            console.log(response);
            //alert(response.result);
            if(response.done==true)
            {
            $('#ajax_output').html('<div class="alert alert-success animated slideInUp"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            $("#newsLinkFrm")[0].reset(); // reset form
            $('#nwsLinkRow').html(response.tableRws);

            }
        else
        {
        $('#ajax_output').html('<div class="alert alert-danger animated slideInUp"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');

        }
         //echo json_encode($response);
        },

        error: function (response) {
            alert("err");
            console.log(response);

        }
    });

return false;

});
//Add News Links>>>>>>>>>>>>>  //

 // News Links Live update >>>>>>>
 $('.edit').click(function(){
    $(this).addClass('editMode');
   });

$(".edit").focusout(function(){
    $(this).removeClass("editMode");

    var id = this.id;
    var split_id = id.split("_");
    var field_name = split_id[0];
    var edit_id = split_id[1];
    var nwsUpdt = 'One';
    var NwsValue = 'Initial';

    var txtIn = $(this).text();
    var valIn = $(this).val();
    var NwsValue = (valIn == '') ? txtIn : valIn;

        var data = new FormData();
        data.append("nwsUpdt", nwsUpdt);
        data.append("Field", field_name);
        data.append("id", edit_id);
        data.append("NwsValue", NwsValue);
        console.log(NwsValue);


    $.ajax({
        url: '../ajax.php',
        type: 'post',
        dataType: 'json',
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success:function(response){

            if(response.done==true)
            {
            $('#nwsTableOut').html('<div class="alert alert-success animated slideInUp"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Data Updated ! </strong> ' + response.result + ' </div>');
            console.log(response.result);
            }
        else
        {
        $('#nwsTableOut').html('<div class="alert alert-danger animated slideInUp"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');
        console.log(response.result);

        }
        },
        error: function (response) {
            alert("err");
            console.log(response);

        }
       });

return false;

});
//News Links Live update >>>>>>>>>>>>>  //



//News Evt Delete>>>>>>>>>>>>>
$(".remove1").click(function(e){

    var delete1 = $(this).attr("id");
    alert(delete1);

    var delConf = confirm("Do You Want to delete this Post...?");

    if(delConf){
        $.ajax({
            type: "POST",
            url: "../ajax.php",
            data: {delete1:delete1},
            success: function (response) {
                console.log(response);
                location.reload();
            if(response.done==true)
            {
            $('#ajax_output').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            }
            },
            error: function (response) {
                alert("err");
                console.log(response);
            }
        });
    }

return false;

});

//News Links Delete>>>>>>>>>>>>>  //




//E-Resource Menu pages>>>>>>>>>>>>>>>>>>>>>>>>>

$("#eResoForm").submit(function (e) {
//$("eResoForm").on("submit", function(e){
  //  alert("error file");
   // return false; 
    e.preventDefault();//stop submit the form, we will post it manually.
    var form = $('#eResoForm')[0];// Get form
    var data = new FormData(form);// Create an FormData object
    data.append("eResourceIns", "e_resource_insert");// If you want to add an extra field for the FormData
    console.log(data);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "../ajax.php",
        dataType: 'json',
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
            console.log(response);
            if(response.done==true)
            {
            $('#ajax_output').html('<div class="alert alert-success animated slideInUp"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            $("#eResoForm")[0].reset(); // reset form


            $('#eResTable').html(response.tableRws);

            }
        else
        {
        $('#ajax_output').html('<div class="alert alert-danger animated slideInUp"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');

        }

        },

        error: function (response) {
            alert("err");
            console.log(response);

        }
    });

return false;

});
//E-Resource Menu pages >>>>>>>>>>>>>  //



// Edb Live update >>>>>>>
$("#eResTable").on("click",".edb_edit", function(){
    $(this).addClass('editMode');
  });

  $("#eResTable").on("focusout",".edb_edit", function(){
    $(this).removeClass("editMode");

    var id = this.id;
    var split_id = id.split("_");
    var field_name = split_id[0];
    var edit_id = split_id[1];

    var edb_up = 'One';
    var edb_val = 'Initial';

        var data = new FormData();
        data.append("edbUp", edb_up);
        data.append("Field", field_name);
        data.append("id", edit_id);

    var txtIn = $(this).text();
    var valIn = $(this).val();
    //var NwsValue = (valIn == '') ? txtIn : valIn;

    var isImg = valIn.search('fakepath'); // image check

    if(isImg == -1){
        var edb_val = (valIn == '') ? txtIn : valIn;
        data.append("edbVal", edb_val);
        data.append("is_imge","NO");
        console.log('not img '+ isImg);

    } else if(isImg == 3) {
        var imgIn = this.files[0];
        data.append("edbVal", imgIn);
        data.append("is_imge","YES");
        console.log('Image'+isImg);
    }


        $.ajax({
            url: '../ajax.php',
            type: 'post',
            dataType: 'json',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success:function(response){
                if(response.done==true)
                {
                $('#edb_table_out').html('<div class="alert alert-success animated slideInUp"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
                }
            else
            {
            console.log(response.result);
            }

            },
            error: function (response) {
                //alert("err");
                console.log("error->"+response);

            }
           });

    return false;


  });
 //Edb pages Live update >>>>>>>>>>>>>  //


 $("#eResTable").on("click",".edb_del", function(){
    var id = $(this).attr("id");
    var split_id = id.split("-");
    var eres_del_id = split_id.slice(-1)[0];

    var delConf = confirm("Do You Want to delete this Record");
    var data = new FormData();
    data.append("eresDelId", eres_del_id);
    console.log();


    if(delConf){
        $.ajax({
            type: "POST",
            url: "../ajax.php",
            data: data,
            dataType: 'json',
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (response) {
            if(response.done==true)
            {
            console.log(response);
            $('#edb_table_out').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            $('#eResTable').html(response.tableRws);
            }
            },
            error: function (response) {
                alert("err");
                console.log(response);
            }
        });
    }
    else{
        console.log("canceled")
    }

return false;

   });

//E-Resource Menu pages >>>>>>>>>>>>>>>>>>>  *********** <<<<<<<<<<<<<<



//E-Theses Menu pages>>>>>>>>>>>>>

$("#eThesForm").submit(function (e) {
    e.preventDefault();//stop submit the form, we will post it manually.
    var form = $('#eThesForm')[0];// Get form
    var data = new FormData(form);// Create an FormData object
    data.append("eThesesIns", "e_theses_insert");// If you want to add an extra field for the FormData
    console.log(data);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "../ajax.php",
        dataType: 'json',
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
            console.log(response);
            if(response.done==true)
            {
            $('#ethes_out').html('<div class="alert alert-success animated slideInUp"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            $("#eThesForm")[0].reset(); // reset form


            $('#eResTable').html(response.tableRws);

            }
        else
        {
        $('#ethes_out').html('<div class="alert alert-danger animated slideInUp"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');

        }

        },

        error: function (response) {
            alert("err");
            console.log(response);

        }
    });

return false;

});


// Delete //
$("#eResTable").on("click",".ethes_del", function(){
    var id = $(this).attr("id");
    var split_id = id.split("-");
    var ethes_del_id = split_id.slice(-1)[0];

    var delConf = confirm("Do You Want to delete this Record");
    var data = new FormData();
    data.append("ethesDelId", ethes_del_id);
    console.log();


    if(delConf){
        $.ajax({
            type: "POST",
            url: "../ajax.php",
            data: data,
            dataType: 'json',
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (response) {
            if(response.done==true)
            {
            console.log(response);
            $('#edb_table_out').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
            $('#eResTable').html(response.tableRws);
            }
            },
            error: function (response) {
                alert("err");
                console.log(response);
            }
        });
    }
    else{
        console.log("canceled")
    }

return false;

   });
// Delete >>>//



// Ethes Live update >>>>>>>
$("#eResTable").on("click",".eThes_edit", function(){
    $(this).addClass('editMode');
  });

  $("#eResTable").on("focusout",".eThes_edit", function(){
    $(this).removeClass("editMode");

    var id = this.id;
    var split_id = id.split("_");
    var field_name = split_id[0];
    var edit_id = split_id[1];

    var edb_up = 'One';
    var edb_val = 'Initial';

        var data = new FormData();
        data.append("eThesUp", edb_up);
        data.append("Field", field_name);
        data.append("id", edit_id);

    var txtIn = $(this).text();
    var valIn = $(this).val();
    //var NwsValue = (valIn == '') ? txtIn : valIn;

    var isImg = valIn.search('fakepath'); // image check

    if(isImg == -1){
        var edb_val = (valIn == '') ? txtIn : valIn;
        data.append("edbVal", edb_val);
        data.append("is_imge","NO");
        console.log('not img '+ isImg);

    } else if(isImg == 3) {
        var imgIn = this.files[0];
        data.append("edbVal", imgIn);
        data.append("is_imge","YES");
        console.log('Image'+isImg);
    }


        $.ajax({
            url: '../ajax.php',
            type: 'post',
            dataType: 'json',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success:function(response){
                if(response.done==true)
                {
                $('#edb_table_out').html('<div class="alert alert-success animated slideInUp"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');
                }
            else
            {
            console.log(response.result);
            }

            },
            error: function (response) {
                //alert("err");
                console.log("error->"+response);

            }
           });

    return false;


  });
 //Ethes pages Live update >>>>>>>>>>>>>  //


//E-Theses Menu pages >>>>>>>>>>>>>>>>>>>***********<<<<<<<<<<<<<<


//addFaculty>>>>>>>>>>>>>
$("#addFaculty").submit(function (e) {

    e.preventDefault();//stop submit the form, we will post it manually.

    var form = $('#addFaculty')[0];// Get form

    var FacData = new FormData(form);// Create an FormData object

    if(FacData.get('actn') == "INS") {
        FacData.append("add_fac", " ");// If you want to add an extra field for the FormData
    } else if (FacData.get('actn') == "UPD") {
        FacData.append("upd_fac", " ");
    }

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "../ajax.php",
        dataType: 'json',
        data: FacData,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
            console.log(response.result);
            //alert(response.result);
            if(response.done==true)
            {
                formReset_add_faculty();
                $('#facList').html( response.tableRws );
                $('#AlertMesseges').html('<div class="alert alert-success aj_out" ><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Success ! </strong> ' + response.result + ' </div>');

            }
            else
            {
                $('#AlertMesseges').html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');
            }

        },
        error: function (response) {
            alert("err");
            console.log(response);

        }
    });

return false;

});
//addFaculty>>>>>>>>>>  //




//relivFaculty>>>>>>>>>>>>>
$("#relivFaculty").submit(function (e) {

    e.preventDefault();//stop submit the form, we will post it manually.

    var conf = confirm("Are you sure you want to relieve this faculty..?!!");

    if(conf) {

    var form = $('#relivFaculty')[0];// Get form

    var facData = new FormData(form);// Create an FormData object

    facData.append("relv_fac", " ");// If you want to add an extra field for the FormData

    console.log(facData);
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "../ajax.php",
        dataType: 'json',
        data: facData,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
            console.log(response.result);
            if(response.done==true)
            {
                // formReset_add_faculty();
                // fetchFac();
                location.reload();

                $('#facList').html( response.tableRws );
            }
            else
            {
            $('#facListTr').html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Faild ! </strong> ' + response.result + ' </div>');
            }

        },
        error: function (response) {
            alert("err");
            console.log(response);

        }
    });

    }


return false;

});
//relivFaculty>>>>>>>>>>  //


});


    function formReset_add_faculty() {
        $("#addFaculty")[0].reset(); // reset form
        $("#relivFaculty")[0].reset();

        $("#fac_img_prev").attr("src", "../images/faculty/default.jpg");
        $("#fac_form_ttl").text("Add Faculty");
        $("#addFaculty button").text("Add Faculty");
    }
