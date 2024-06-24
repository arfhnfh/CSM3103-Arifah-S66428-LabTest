$(function(){
        $.ajax({
            url: 'https://kerbau.odaje.biz/getstaff.php',
            method: 'GET',
            success: function(data){
                const staffList = JSON.parse(data);
                const ul = $('#staff-list');
                staffList.forEach(staff => {
                    const staffData = JSON.parse(staff);
                    if (staffData.email){
                        const li = $('<li class="list-group-item"></li>');
                        const a = $('<a></a>').text(staffData.email).attr('href','secondpage.html?id=${staffData.employeeNumber}');
                        li.append(a);
                        ul.append(li);
                    
                    }
                });
            },
            error: function(){
                alert("failed tp fetch");
            }
        });
        

})