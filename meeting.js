$(document).ready(() => {
    // 1-Create employee
    $('input#addEmployee').keypress((event) => {
        if (event.which === 13) {
            let newEmployee = $('input#addEmployee').val();

            $('#attendanceTable tbody').append(
                `<tr>
                    <th><span>e</span></th>
                    <th>${newEmployee}</th>
                    <th>
                        <select name="attendance">
                            <option value="" disabled selected>Select status</option>
                            <option value="present">Present</option>
                            <option value="absent">Absent</option>
                        </select>
                    </th>
                    <th><span id="delete">d</span></th>
                </tr>`);

        };
    });
    
    // 2-Read all employees: click on employee table to bring up li of employees


    // 3-Read one employee : click on one employee table to bring up li of this employee



    // 4-Update employee attendance status 


    // 4-Delete an employee

    // $('span#delete').click(() => {
    //     console.log('delete span clicked');
    //     $(this).parents('tr').remove();
        
    // })

})