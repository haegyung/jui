jui.ready([ "uix.table" ], function(table) {
    table_16 = table("#table_16", {
        fields: [ "name", "age" ],
        resize: true,
        sort: true,
    });

    $("#table_16_btn").change(function (e) {
        table_16.setCsvFile(e.target.files[0]);
    });
});