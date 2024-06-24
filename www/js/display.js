$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const employeeNumber = urlParams.get('employeeNumber');

    if (employeeNumber) {
        $.ajax({
            type: "post",
            url: 'https://kerbau.odaje.biz/getstaffbyid.php?id=${employeeNumber}`,',
            data: datalist,
            cache: false,
            success: function(data) {
                try {
                    let responseData = JSON.parse(data);

                    if (responseData.status === 1) {
                        let staff = responseData; 
                        let tableHTML = `
                            <table class="table mt-3">
                                <tr>
                                    <th>Employee Number</th>
                                    <td>${staff.employeeNumber}</td>
                                </tr>
                                <tr>
                                    <th>Last Name</th>
                                    <td>${staff.lastName}</td>
                                </tr>
                                <tr>
                                    <th>First Name</th>
                                    <td>${staff.firstName}</td>
                                </tr>
                                <tr>
                                    <th>Extension</th>
                                    <td>${staff.extension}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>${staff.email}</td>
                                </tr>
                                <tr>
                                    <th>Office Code</th>
                                    <td>${staff.officeCode}</td>
                                </tr>
                                <tr>
                                    <th>Reports To</th>
                                    <td>${staff.reportsTo}</td>
                                </tr>
                                <tr>
                                    <th>Job Title</th>
                                    <td>${staff.jobTitle}</td>
                                </tr>
                            </table>
                        `;
                        $('#staff-details').html(tableHTML);
                    } else {
                        $('#staff-details').html('<p>No data found for the selected employee.</p>');
                    }
                } catch (error) {
                    console.error('Error parsing JSON data', error);
                    $('#staff-details').html('<p>Error parsing data. Please try again later.</p>');
                }
            },
            error: function(error) {
                console.error('Error fetching staff details', error);
                $('#staff-details').html('<p>Error fetching staff details. Please try again later.</p>');
            }
        });
    } else {
        $('#staff-details').html('<p>No employee selected</p>');
    }
});
