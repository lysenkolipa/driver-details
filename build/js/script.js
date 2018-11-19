const rows = document.querySelectorAll('tr');
rows.forEach( function (tr) {
    tr.addEventListener("click", function(){
        let tr = this.className,
            trClass = " selected",
            start_idx = tr.indexOf(trClass);
        if(start_idx === -1) {
            tr += trClass;
        }
        else tr = tr.replace(trClass,"");
        this.className = tr;

    });
})